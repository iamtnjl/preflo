"""
Google Trends Collector — Fetches trend signals for keywords.

Extracts:
  - 12-month interest-over-time data
  - Trend slope (rising, stable, declining)
  - Seasonal patterns
  - Geographic concentration
  - Related rising queries

Rate limit: 1 per 5s, max 50/hr.
"""

import logging
import time
from typing import Any

import numpy as np
import pandas as pd
from pytrends.request import TrendReq

from config.settings import settings

logger = logging.getLogger(__name__)


def _get_trends_client() -> TrendReq:
    return TrendReq(hl="en-US", tz=360, timeout=(10, 25))


def _calculate_slope(values: list[float]) -> float:
    """Calculate linear regression slope over the data points."""
    if len(values) < 2:
        return 0.0
    x = np.arange(len(values), dtype=float)
    y = np.array(values, dtype=float)
    x_mean = x.mean()
    y_mean = y.mean()
    numerator = ((x - x_mean) * (y - y_mean)).sum()
    denominator = ((x - x_mean) ** 2).sum()
    if denominator == 0:
        return 0.0
    return float(numerator / denominator)


def _calculate_variance(values: list[float]) -> float:
    """Calculate coefficient of variation (stddev / mean) to detect seasonality."""
    if len(values) < 2:
        return 0.0
    arr = np.array(values, dtype=float)
    mean = arr.mean()
    if mean == 0:
        return 0.0
    return float(arr.std() / mean)


def _classify_trend(slope: float, variance: float) -> str:
    """Classify the trend direction based on slope and variance."""
    if slope > 1.0:
        return "rising"
    if slope < -1.0:
        return "declining"
    if variance > 0.5:
        return "seasonal"
    return "stable"


def collect(keyword: str) -> dict[str, Any]:
    """
    Collect Google Trends data for a keyword.

    Returns a dict matching the trend_signals DB schema.
    """
    logger.info(f"Trends collect: keyword='{keyword}'")

    # Rate limit
    time.sleep(settings.TRENDS_RATE_LIMIT)

    pytrends = _get_trends_client()

    try:
        pytrends.build_payload([keyword], timeframe="today 12-m", geo="")
    except Exception as e:
        logger.error(f"Trends payload build failed for '{keyword}': {e}")
        return _empty_result()

    # ─── Interest over time ───

    interest_data: list[dict[str, Any]] = []
    slope = 0.0
    variance = 0.0

    try:
        iot: pd.DataFrame = pytrends.interest_over_time()

        if not iot.empty and keyword in iot.columns:
            values = iot[keyword].tolist()
            dates = [d.isoformat() for d in iot.index]
            interest_data = [
                {"date": d, "value": int(v)} for d, v in zip(dates, values)
            ]
            slope = _calculate_slope(values)
            variance = _calculate_variance(values)
    except Exception as e:
        logger.warning(f"Trends interest-over-time failed for '{keyword}': {e}")

    time.sleep(settings.TRENDS_RATE_LIMIT)

    # ─── Related queries ───

    related_rising: list[dict[str, Any]] = []

    try:
        related = pytrends.related_queries()

        if keyword in related and related[keyword]["rising"] is not None:
            rising_df: pd.DataFrame = related[keyword]["rising"]
            related_rising = [
                {"query": row["query"], "value": int(row["value"])}
                for _, row in rising_df.head(10).iterrows()
            ]
    except Exception as e:
        logger.warning(f"Trends related queries failed for '{keyword}': {e}")

    time.sleep(settings.TRENDS_RATE_LIMIT)

    # ─── Interest by region ───

    geo_data: list[dict[str, Any]] = []

    try:
        ibr: pd.DataFrame = pytrends.interest_by_region(
            resolution="COUNTRY", inc_low_vol=False
        )

        if not ibr.empty and keyword in ibr.columns:
            top_regions = ibr[keyword].nlargest(10)
            geo_data = [
                {"region": region, "value": int(val)}
                for region, val in top_regions.items()
                if val > 0
            ]
    except Exception as e:
        logger.warning(f"Trends geo data failed for '{keyword}': {e}")

    trend_direction = _classify_trend(slope, variance)

    return {
        "interest_data": interest_data,
        "slope": round(slope, 4),
        "variance": round(variance, 4),
        "related_queries": related_rising,
        "trend_direction": trend_direction,
        "geo_concentration": geo_data,
    }


def _empty_result() -> dict[str, Any]:
    return {
        "interest_data": [],
        "slope": None,
        "variance": None,
        "related_queries": [],
        "trend_direction": None,
        "geo_concentration": [],
    }
