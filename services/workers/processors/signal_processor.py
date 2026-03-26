"""
Signal Processor — Normalizes raw scraper outputs and calculates composite scores.

Steps:
  1. Normalize all raw signals to 0-100 scale
  2. Calculate composite demand score (weighted)
  3. Calculate composite competition score (weighted)
  4. Validate data quality (min 2 of 3 sources must have data)
"""

import logging
from typing import Any

from processors.normalizer import normalize, clamp
from scoring.weights import WEIGHTS

logger = logging.getLogger(__name__)

# ─── Normalization ranges (empirical baselines) ───

# Reddit demand signal ranges
REDDIT_POST_COUNT_RANGE = (0, 200)       # 0-200 posts in a year
REDDIT_AVG_COMMENTS_RANGE = (0, 50)      # 0-50 avg comments
REDDIT_SENTIMENT_RANGE = (-1.0, 1.0)     # -1 to +1
REDDIT_RECENCY_RANGE = (0.0, 1.0)        # 0-1

# SERP competition signal ranges
SERP_AUTHORITY_RANGE = (0.0, 1.0)        # 0-1
SERP_UNIQUE_DOMAINS_RANGE = (1, 10)      # 1-10 unique domains in top 10
SERP_CONTENT_LENGTH_RANGE = (0, 500)     # snippet length proxy
SERP_INDEXED_PAGES_RANGE = (0, 50_000_000)  # 0-50M indexed pages

# Trends signal ranges
TRENDS_SLOPE_RANGE = (-5.0, 5.0)         # regression slope
TRENDS_VARIANCE_RANGE = (0.0, 1.0)       # coefficient of variation


def _normalize_to_100(value: float, min_val: float, max_val: float) -> float:
    """Normalize a value to 0-100 scale."""
    return clamp(normalize(value, min_val, max_val) * 100, 0, 100)


def _has_data(signal: dict[str, Any]) -> bool:
    """Check if a signal dict has meaningful data (not all None/empty)."""
    if not signal:
        return False
    # Check for known empty markers
    for key in ["post_count", "avg_domain_strength", "slope"]:
        val = signal.get(key)
        if val is not None and val != 0:
            return True
    # Check for non-empty lists
    for key in ["top_results", "interest_data"]:
        val = signal.get(key)
        if val and len(val) > 0:
            return True
    return False


def normalize_reddit(reddit_data: dict[str, Any]) -> dict[str, float]:
    """Normalize Reddit demand signals to 0-100 scale."""
    if not _has_data(reddit_data):
        return {"frequency": 0, "engagement": 0}

    frequency = _normalize_to_100(
        reddit_data.get("post_count", 0),
        *REDDIT_POST_COUNT_RANGE,
    )

    # Engagement = combination of comments and sentiment
    avg_comments = reddit_data.get("avg_comments", 0)
    sentiment = reddit_data.get("sentiment_score", 0)
    recency = reddit_data.get("recency_score", 0.5)

    engagement_raw = (
        _normalize_to_100(avg_comments, *REDDIT_AVG_COMMENTS_RANGE) * 0.5
        + _normalize_to_100(sentiment, *REDDIT_SENTIMENT_RANGE) * 0.25
        + _normalize_to_100(recency, *REDDIT_RECENCY_RANGE) * 0.25
    )

    return {
        "frequency": round(frequency, 2),
        "engagement": round(engagement_raw, 2),
    }


def normalize_serp(serp_data: dict[str, Any]) -> dict[str, float]:
    """Normalize SERP competition signals to 0-100 scale."""
    if not _has_data(serp_data):
        return {"authority": 0, "content_volume": 0, "content_freshness": 50, "diversity": 50}

    authority = _normalize_to_100(
        serp_data.get("avg_domain_strength", 0) or 0,
        *SERP_AUTHORITY_RANGE,
    )

    # Content volume from indexed pages
    indexed = serp_data.get("indexed_pages_estimate") or 0
    content_volume = _normalize_to_100(indexed, *SERP_INDEXED_PAGES_RANGE)

    # Content freshness — we don't have page-level dates, use 50 as default
    content_freshness = 50.0
    if serp_data.get("avg_content_age_days") is not None:
        # Lower age = fresher = higher competition
        age = serp_data["avg_content_age_days"]
        content_freshness = _normalize_to_100(max(0, 365 - age), 0, 365)

    # SERP diversity — more unique domains = harder to compete
    unique = serp_data.get("unique_domains_top10") or 5
    diversity = _normalize_to_100(unique, *SERP_UNIQUE_DOMAINS_RANGE)

    return {
        "authority": round(authority, 2),
        "content_volume": round(content_volume, 2),
        "content_freshness": round(content_freshness, 2),
        "diversity": round(diversity, 2),
    }


def normalize_trends(trends_data: dict[str, Any]) -> dict[str, float]:
    """Normalize Google Trends signals to 0-100 scale."""
    if not _has_data(trends_data):
        return {"volume": 0, "direction": 50}

    # Trend volume — average interest value over time
    interest = trends_data.get("interest_data", [])
    if interest:
        values = [pt["value"] for pt in interest]
        avg_interest = sum(values) / len(values)
        volume = clamp(avg_interest, 0, 100)  # Already 0-100 from Google
    else:
        volume = 0.0

    # Trend direction — slope normalized to 0-100
    # >50 = rising, <50 = declining, 50 = stable
    slope = trends_data.get("slope") or 0.0
    direction = _normalize_to_100(slope, *TRENDS_SLOPE_RANGE)

    return {
        "volume": round(volume, 2),
        "direction": round(direction, 2),
    }


def calculate_demand_score(
    reddit_normalized: dict[str, float],
    trends_normalized: dict[str, float],
) -> float:
    """
    Calculate composite demand score (0-100) using weighted signals.

    Weights from scoring/weights.py:
      reddit_frequency: 0.3, reddit_engagement: 0.2,
      trend_volume: 0.3, trend_direction: 0.2
    """
    w = WEIGHTS["demand"]
    score = (
        reddit_normalized["frequency"] * w["reddit_frequency"]
        + reddit_normalized["engagement"] * w["reddit_engagement"]
        + trends_normalized["volume"] * w["trend_volume"]
        + trends_normalized["direction"] * w["trend_direction"]
    )
    return round(clamp(score, 0, 100), 2)


def calculate_competition_score(serp_normalized: dict[str, float]) -> float:
    """
    Calculate composite competition score (0-100) using weighted signals.

    Weights from scoring/weights.py:
      serp_authority: 0.4, content_volume: 0.3,
      content_freshness: 0.15, serp_diversity: 0.15
    """
    w = WEIGHTS["competition"]
    score = (
        serp_normalized["authority"] * w["serp_authority"]
        + serp_normalized["content_volume"] * w["content_volume"]
        + serp_normalized["content_freshness"] * w["content_freshness"]
        + serp_normalized["diversity"] * w["serp_diversity"]
    )
    return round(clamp(score, 0, 100), 2)


def process(
    reddit_data: dict[str, Any],
    serp_data: dict[str, Any],
    trends_data: dict[str, Any],
) -> dict[str, Any]:
    """
    Process raw scraper outputs into normalized scores.

    Returns:
      - demand_score (0-100)
      - competition_score (0-100)
      - normalized sub-signals
      - data_quality indicator
    """
    # Data quality check: at least 2 of 3 sources must have data
    sources_with_data = sum([
        _has_data(reddit_data),
        _has_data(serp_data),
        _has_data(trends_data),
    ])
    data_quality = "good" if sources_with_data >= 2 else "low"

    if sources_with_data == 0:
        logger.warning("Signal processor: no data from any source")
        return {
            "demand_score": 0,
            "competition_score": 0,
            "data_quality": "none",
            "signals": {},
        }

    # Normalize
    reddit_norm = normalize_reddit(reddit_data)
    serp_norm = normalize_serp(serp_data)
    trends_norm = normalize_trends(trends_data)

    # Composite scores
    demand_score = calculate_demand_score(reddit_norm, trends_norm)
    competition_score = calculate_competition_score(serp_norm)

    logger.info(
        f"Signal processor: demand={demand_score}, competition={competition_score}, "
        f"quality={data_quality} ({sources_with_data}/3 sources)"
    )

    return {
        "demand_score": demand_score,
        "competition_score": competition_score,
        "data_quality": data_quality,
        "sources_available": sources_with_data,
        "signals": {
            "reddit": reddit_norm,
            "serp": serp_norm,
            "trends": trends_norm,
        },
    }
