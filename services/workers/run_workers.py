"""
Preflo Worker Server — FastAPI service that:
  1. Accepts analysis jobs via POST /jobs
  2. Runs background scraping loop continuously
  3. Pushes all data to shared PostgreSQL DB
"""

import asyncio
import json
import logging
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from typing import Any

import psycopg
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel

from config.settings import settings
from scrapers import reddit_scraper, serp_scraper, trends_collector
from processors import signal_processor
from scoring import constraint_engine, regime_detector, scoring_engine, failure_modes, probabilistic_layer

logging.basicConfig(level=logging.INFO, format="%(asctime)s [worker] %(message)s")
logger = logging.getLogger(__name__)


# ─── DB Connection ───

def get_db():
    """Create a fresh DB connection. Handles Neon pooler SSL idle drops."""
    return psycopg.connect(
        settings.DATABASE_URL,
        connect_timeout=10,
    )


# ─── Models ───

class JobRequest(BaseModel):
    keyword: str
    domain: str = "SEO"
    effort_level: str = "medium"


class JobResponse(BaseModel):
    status: str
    keyword: str
    message: str


# ─── DB Helpers ───

def _ensure_keyword(conn: psycopg.Connection, keyword: str, domain: str) -> int:
    """Insert keyword if not exists, return its ID."""
    slug = keyword.lower().strip().replace(" ", "-")

    with conn.cursor() as cur:
        cur.execute(
            """INSERT INTO keywords (keyword, slug, domain)
               VALUES (%s, %s, %s)
               ON CONFLICT (keyword) DO UPDATE SET domain = EXCLUDED.domain
               RETURNING id""",
            (keyword, slug, domain),
        )
        row = cur.fetchone()
        conn.commit()
        return row[0]


def _store_demand_signal(conn: psycopg.Connection, keyword_id: int, data: dict[str, Any]):
    """Store Reddit demand signals in the database."""
    with conn.cursor() as cur:
        cur.execute(
            """INSERT INTO demand_signals
               (keyword_id, source, post_count, avg_comments, sentiment_score, recency_score, raw_data)
               VALUES (%s, %s, %s, %s, %s, %s, %s)""",
            (
                keyword_id,
                data.get("source", "reddit"),
                data.get("post_count"),
                data.get("avg_comments"),
                data.get("sentiment_score"),
                data.get("recency_score"),
                json.dumps(data.get("raw_data")),
            ),
        )
        conn.commit()


def _store_competition_signal(conn: psycopg.Connection, keyword_id: int, data: dict[str, Any]):
    """Store SERP competition signals in the database."""
    with conn.cursor() as cur:
        cur.execute(
            """INSERT INTO competition_signals
               (keyword_id, top_results, avg_domain_strength, unique_domains_top10,
                avg_content_length, avg_content_age_days, indexed_pages_estimate)
               VALUES (%s, %s, %s, %s, %s, %s, %s)""",
            (
                keyword_id,
                json.dumps(data.get("top_results")),
                data.get("avg_domain_strength"),
                data.get("unique_domains_top10"),
                data.get("avg_content_length"),
                data.get("avg_content_age_days"),
                data.get("indexed_pages_estimate"),
            ),
        )
        conn.commit()


def _store_trend_signal(conn: psycopg.Connection, keyword_id: int, data: dict[str, Any]):
    """Store Google Trends signals in the database."""
    with conn.cursor() as cur:
        cur.execute(
            """INSERT INTO trend_signals
               (keyword_id, interest_data, slope, variance, related_queries)
               VALUES (%s, %s, %s, %s, %s)""",
            (
                keyword_id,
                json.dumps(data.get("interest_data")),
                data.get("slope"),
                data.get("variance"),
                json.dumps(data.get("related_queries")),
            ),
        )
        conn.commit()


def _store_feasibility_score(
    conn: psycopg.Connection,
    keyword_id: int,
    result: Any,
    constraint_data: dict[str, Any],
    regime_data: dict[str, Any],
    failure_data: dict[str, Any],
    prob_model: dict[str, Any] | None = None,
):
    """Store the final feasibility score in the database."""
    r = result.to_dict()
    with conn.cursor() as cur:
        cur.execute(
            """INSERT INTO feasibility_scores
               (keyword_id, demand_score, competition_score, constraint_pressure,
                feasibility_score, difficulty, time_range_min, time_range_max,
                regime, success_band, constraints, conditions, signal_versions)
               VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)""",
            (
                keyword_id,
                r["demand_score"],
                r["competition_score"],
                r["constraint_pressure"],
                r["feasibility_score"],
                r["difficulty"],
                r["time_range_min"],
                r["time_range_max"],
                r["regime"],
                json.dumps(r["success_band"]),
                json.dumps(r["constraints"]),
                json.dumps(r["conditions"]),
                json.dumps({
                    "regime_data": regime_data,
                    "failure_modes": failure_data.get("failure_modes", []),
                    "probabilistic": {
                        "percentiles": prob_model["percentiles"],
                        "uncertainty_level": prob_model["uncertainty_level"],
                        "spread": prob_model["spread"],
                        "sensitivity": prob_model["sensitivity"],
                    } if prob_model else None,
                }),
            ),
        )
        conn.commit()


def _update_last_analyzed(conn: psycopg.Connection, keyword_id: int):
    """Mark a keyword as recently analyzed."""
    with conn.cursor() as cur:
        cur.execute(
            "UPDATE keywords SET last_analyzed = %s WHERE id = %s",
            (datetime.now(timezone.utc), keyword_id),
        )
        conn.commit()


# ─── Job Processing ───

async def process_job(keyword: str, domain: str):
    """Run the full scrape → process → store pipeline for a keyword."""
    logger.info(f"Processing job: keyword='{keyword}', domain='{domain}'")

    # Run scrapers (blocking I/O, run in thread pool)
    loop = asyncio.get_event_loop()

    reddit_data, serp_data, trends_data = await asyncio.gather(
        loop.run_in_executor(None, reddit_scraper.scrape, keyword, domain),
        loop.run_in_executor(None, serp_scraper.scrape, keyword),
        loop.run_in_executor(None, trends_collector.collect, keyword),
    )

    # Process signals
    processed = signal_processor.process(reddit_data, serp_data, trends_data)

    logger.info(
        f"Processed '{keyword}': demand={processed['demand_score']}, "
        f"competition={processed['competition_score']}, "
        f"quality={processed['data_quality']}"
    )

    # Run scoring pipeline
    constraints = constraint_engine.evaluate(serp_data, trends_data)
    regime = regime_detector.detect(trends_data, processed, constraints.get("constraint_pressure"))
    result = scoring_engine.score(processed, constraints, regime)
    failures = failure_modes.analyze(serp_data, trends_data, processed)

    # Probabilistic modeling (Task 06)
    prob_model = probabilistic_layer.model(
        result.feasibility_score, processed, constraints, regime,
    )

    logger.info(
        f"Scored '{keyword}': score={result.feasibility_score}, "
        f"difficulty={result.difficulty}, regime={result.regime}, "
        f"uncertainty={prob_model['uncertainty_level']}, "
        f"p10={prob_model['percentiles']['p10']}, p90={prob_model['percentiles']['p90']}"
    )

    # Store in DB
    try:
        conn = get_db()
        keyword_id = _ensure_keyword(conn, keyword, domain)

        _store_demand_signal(conn, keyword_id, reddit_data)
        _store_competition_signal(conn, keyword_id, serp_data)
        _store_trend_signal(conn, keyword_id, trends_data)
        _store_feasibility_score(conn, keyword_id, result, constraints, regime, failures, prob_model)
        _update_last_analyzed(conn, keyword_id)

        conn.close()
        logger.info(f"Stored signals + score for '{keyword}' (id={keyword_id})")
    except Exception as e:
        logger.error(f"DB storage failed for '{keyword}': {e}")


# ─── Background Scraping Loop ───

async def background_scrape_loop():
    """Continuously scrape pending/stale keywords from DB."""
    logger.info("Background scrape loop started")

    while True:
        conn = None
        try:
            conn = get_db()
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT keyword, domain FROM keywords
                    WHERE last_analyzed IS NULL
                       OR last_analyzed < NOW() - INTERVAL '24 hours'
                    ORDER BY last_analyzed ASC NULLS FIRST
                    LIMIT 5
                """)
                rows = cur.fetchall()
            conn.close()
            conn = None

            for keyword, domain in rows:
                await process_job(keyword, domain or "SEO")

        except psycopg.OperationalError as e:
            # Connection dropped (Neon idle timeout, network blip) — expected, retry next cycle
            logger.debug(f"Background scrape: connection reset ({e})")
        except Exception as e:
            logger.error(f"Background scrape error: {e}")
        finally:
            if conn is not None:
                try:
                    conn.close()
                except Exception:
                    pass

        await asyncio.sleep(settings.SCRAPE_INTERVAL)


# ─── App Lifecycle ───

@asynccontextmanager
async def lifespan(app: FastAPI):
    task = asyncio.create_task(background_scrape_loop())
    logger.info(f"Worker server running on {settings.WORKER_HOST}:{settings.WORKER_PORT}")
    yield
    task.cancel()
    try:
        await task
    except asyncio.CancelledError:
        pass
    logger.info("Worker server stopped")


# ─── FastAPI App ───

app = FastAPI(
    title="Preflo Worker",
    description="Scraping and scoring worker service",
    version="0.1.0",
    lifespan=lifespan,
)


@app.get("/health")
async def health():
    return {"status": "ok", "service": "worker"}


@app.post("/jobs", response_model=JobResponse)
async def submit_job(job: JobRequest):
    """Accept an analysis job from the Fastify API."""
    logger.info(f"Job received: keyword='{job.keyword}', domain='{job.domain}'")

    asyncio.create_task(process_job(job.keyword, job.domain))

    return JobResponse(
        status="accepted",
        keyword=job.keyword,
        message="Job queued for processing",
    )


@app.get("/jobs/status/{keyword}")
async def job_status(keyword: str):
    """Check if a keyword has been scored."""
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute(
                """SELECT fs.feasibility_score, fs.demand_score, fs.competition_score, fs.scored_at
                   FROM feasibility_scores fs
                   JOIN keywords k ON k.id = fs.keyword_id
                   WHERE k.keyword = %s
                   ORDER BY fs.scored_at DESC LIMIT 1""",
                (keyword,),
            )
            row = cur.fetchone()
        conn.close()

        if row:
            return {
                "keyword": keyword,
                "status": "complete",
                "feasibility_score": row[0],
                "demand_score": row[1],
                "competition_score": row[2],
                "scored_at": row[3].isoformat() if row[3] else None,
            }
        else:
            return {"keyword": keyword, "status": "pending"}
    except Exception as e:
        logger.error(f"Status check failed for '{keyword}': {e}")
        return {"keyword": keyword, "status": "error", "message": str(e)}


# ─── Entry Point ───

if __name__ == "__main__":
    uvicorn.run(
        "run_workers:app",
        host=settings.WORKER_HOST,
        port=settings.WORKER_PORT,
        reload=True,
    )
