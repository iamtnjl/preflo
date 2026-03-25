"""
Preflo Worker Server — FastAPI service that:
  1. Accepts analysis jobs via POST /jobs
  2. Runs background scraping loop continuously
  3. Pushes all data to shared PostgreSQL DB
"""

import asyncio
import logging
from contextlib import asynccontextmanager

import psycopg
import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from config.settings import settings

logging.basicConfig(level=logging.INFO, format="%(asctime)s [worker] %(message)s")
logger = logging.getLogger(__name__)


# ─── DB Connection ───

def get_db():
    return psycopg.connect(settings.DATABASE_URL)


# ─── Models ───

class JobRequest(BaseModel):
    keyword: str
    domain: str = "SEO"
    effort_level: str = "medium"


class JobResponse(BaseModel):
    status: str
    keyword: str
    message: str


# ─── Job Processing ───

async def process_job(keyword: str, domain: str):
    """Run the full scrape → process → score pipeline for a keyword."""
    logger.info(f"Processing job: keyword='{keyword}', domain='{domain}'")

    # TODO: Wire up when scrapers are implemented
    # 1. reddit_scraper.scrape(keyword, domain)
    # 2. serp_scraper.scrape(keyword)
    # 3. trends_collector.collect(keyword)
    # 4. signal_processor.process(signals)
    # 5. scoring_engine.score(processed_signals)
    # 6. Store result in DB

    logger.info(f"Completed job: '{keyword}' (scrapers/scoring not yet implemented)")


# ─── Background Scraping Loop ───

async def background_scrape_loop():
    """Continuously scrape pending/stale keywords from DB."""
    logger.info("Background scrape loop started")

    while True:
        try:
            # TODO: Query DB for keywords needing re-analysis
            # Example: keywords where last_analyzed is NULL or older than 24h
            #
            # conn = get_db()
            # cur = conn.cursor()
            # cur.execute("""
            #     SELECT keyword, domain FROM keywords
            #     WHERE last_analyzed IS NULL
            #        OR last_analyzed < NOW() - INTERVAL '24 hours'
            #     ORDER BY last_analyzed ASC NULLS FIRST
            #     LIMIT 5
            # """)
            # rows = cur.fetchall()
            # for keyword, domain in rows:
            #     await process_job(keyword, domain or "SEO")
            # cur.close()
            # conn.close()

            pass

        except Exception as e:
            logger.error(f"Background scrape error: {e}")

        await asyncio.sleep(settings.SCRAPE_INTERVAL)


# ─── App Lifecycle ───

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Start background scraping on startup
    task = asyncio.create_task(background_scrape_loop())
    logger.info(f"Worker server running on {settings.WORKER_HOST}:{settings.WORKER_PORT}")
    yield
    # Cancel background task on shutdown
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

    # Run in background so the API gets an immediate response
    asyncio.create_task(process_job(job.keyword, job.domain))

    return JobResponse(
        status="accepted",
        keyword=job.keyword,
        message="Job queued for processing",
    )


@app.get("/jobs/status/{keyword}")
async def job_status(keyword: str):
    """Check if a keyword has been scored."""
    # TODO: Query DB for latest score
    return {"keyword": keyword, "status": "not_implemented"}


# ─── Entry Point ───

if __name__ == "__main__":
    uvicorn.run(
        "run_workers:app",
        host=settings.WORKER_HOST,
        port=settings.WORKER_PORT,
        reload=True,
    )
