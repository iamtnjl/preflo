"""
Probabilistic Modeling Layer — Generates probability distributions for outcomes.

Instead of a single-point score, produces:
  - Full probability distribution (PDF points for visualization)
  - Percentile bands: p10, p25, p50 (median), p75, p90
  - Uncertainty level based on data quality + volatility
  - Factor sensitivity analysis (which inputs matter most)
"""

import logging
import math
from typing import Any

import numpy as np

from processors.normalizer import clamp

logger = logging.getLogger(__name__)

# ─── Uncertainty multipliers ───

DATA_QUALITY_SPREAD = {
    "good": 1.0,    # 3/3 sources — tight distribution
    "low":  1.6,    # 1-2 sources — wider
    "none": 2.5,    # no data — very wide
}

VOLATILITY_SPREAD = {
    "low":      1.0,
    "moderate": 1.3,
    "high":     1.8,
}

REGIME_SPREAD = {
    "emerging":  1.4,   # inherently unpredictable
    "trending":  1.2,
    "stable":    1.0,
    "saturated": 1.1,
    "declining": 1.3,
}

# ─── Sensitivity weights (how much each factor shifts the score) ───
# These represent the partial derivative magnitude of the final score
# with respect to each input signal, used to rank factor importance.

SENSITIVITY_FACTORS = {
    "trend_direction":    0.25,
    "competition_level":  0.22,
    "domain_authority":   0.18,
    "content_quality":    0.12,
    "backlink_rate":      0.08,
    "content_frequency":  0.07,
    "search_volume":      0.05,
    "budget":             0.03,
}


def _compute_spread(
    feasibility_score: float,
    data_quality: str,
    volatility: str,
    regime: str,
) -> float:
    """
    Compute the standard deviation for the outcome distribution.
    Higher spread = more uncertainty.
    """
    # Base spread scales with distance from extremes (mid-range is most uncertain)
    distance_from_edge = min(feasibility_score, 100 - feasibility_score)
    base_spread = 5 + distance_from_edge * 0.25

    # Apply multipliers
    quality_mult = DATA_QUALITY_SPREAD.get(data_quality, 1.5)
    volatility_mult = VOLATILITY_SPREAD.get(volatility, 1.3)
    regime_mult = REGIME_SPREAD.get(regime, 1.0)

    spread = base_spread * quality_mult * volatility_mult * regime_mult
    return spread


def _generate_pdf_points(mean: float, std: float, num_points: int = 50) -> list[dict[str, float]]:
    """Generate probability density function points for visualization."""
    # Range: mean ± 3 std, clamped to 0-100
    low = max(0, mean - 3 * std)
    high = min(100, mean + 3 * std)

    if high <= low:
        return [{"score": mean, "probability": 1.0}]

    points = []
    x_values = np.linspace(low, high, num_points)

    for x in x_values:
        # Gaussian PDF
        exponent = -0.5 * ((x - mean) / max(std, 0.1)) ** 2
        pdf = math.exp(exponent) / (max(std, 0.1) * math.sqrt(2 * math.pi))
        points.append({
            "score": round(float(x), 1),
            "probability": round(pdf, 6),
        })

    return points


def _compute_percentiles(mean: float, std: float) -> dict[str, float]:
    """Calculate key percentile bands, clamped to 0-100."""
    # z-scores for percentiles
    z_scores = {
        "p10": -1.282,
        "p25": -0.674,
        "p50": 0.0,
        "p75": 0.674,
        "p90": 1.282,
    }

    return {
        key: round(clamp(mean + z * std, 0, 100), 1)
        for key, z in z_scores.items()
    }


def _classify_uncertainty(spread: float) -> str:
    """Classify the overall uncertainty level."""
    if spread < 10:
        return "low"
    if spread < 20:
        return "moderate"
    if spread < 35:
        return "high"
    return "very_high"


def _compute_sensitivity(
    processed_signals: dict[str, Any],
    constraint_data: dict[str, Any],
) -> list[dict[str, Any]]:
    """
    Compute factor sensitivity analysis.
    Returns ranked list of factors with relative impact scores.
    """
    signals = processed_signals.get("signals", {})
    reddit = signals.get("reddit", {})
    serp = signals.get("serp", {})
    trends = signals.get("trends", {})

    # Calculate actual impact by combining base sensitivity with signal magnitude
    factors: list[dict[str, Any]] = []

    # Trend direction — high base weight, amplified if slope is extreme
    trend_vol = trends.get("direction", 50)
    trend_deviation = abs(trend_vol - 50) / 50  # 0 = neutral, 1 = extreme
    factors.append({
        "factor": "Trend direction",
        "impact": round(SENSITIVITY_FACTORS["trend_direction"] * (1 + trend_deviation), 3),
        "current_signal": "favorable" if trend_vol > 55 else "neutral" if trend_vol > 45 else "unfavorable",
    })

    # Competition level
    comp = serp.get("authority", 50)
    comp_strength = comp / 100
    factors.append({
        "factor": "Competition strength",
        "impact": round(SENSITIVITY_FACTORS["competition_level"] * (0.5 + comp_strength), 3),
        "current_signal": "high" if comp > 60 else "moderate" if comp > 35 else "low",
    })

    # Domain authority gap
    factors.append({
        "factor": "Domain authority gap",
        "impact": round(SENSITIVITY_FACTORS["domain_authority"] * (0.5 + comp_strength), 3),
        "current_signal": "large gap" if comp > 60 else "moderate gap" if comp > 35 else "small gap",
    })

    # Content quality
    content_vol = serp.get("content_volume", 0)
    factors.append({
        "factor": "Content quality & depth",
        "impact": round(SENSITIVITY_FACTORS["content_quality"] * (1 + content_vol / 100), 3),
        "current_signal": "high bar" if content_vol > 50 else "moderate bar" if content_vol > 20 else "low bar",
    })

    # Backlink acquisition
    bottlenecks = constraint_data.get("bottlenecks", [])
    backlink_pressure = 1.5 if "backlink_acquisition_rate" in bottlenecks else 1.0
    factors.append({
        "factor": "Backlink acquisition",
        "impact": round(SENSITIVITY_FACTORS["backlink_rate"] * backlink_pressure, 3),
        "current_signal": "critical" if "backlink_acquisition_rate" in bottlenecks else "manageable",
    })

    # Content frequency
    factors.append({
        "factor": "Publishing frequency",
        "impact": SENSITIVITY_FACTORS["content_frequency"],
        "current_signal": "important" if "consistency_requirement" in bottlenecks else "standard",
    })

    # Search volume
    demand_vol = trends.get("volume", 0)
    factors.append({
        "factor": "Search volume",
        "impact": round(SENSITIVITY_FACTORS["search_volume"] * (1 + demand_vol / 100), 3),
        "current_signal": "high" if demand_vol > 60 else "moderate" if demand_vol > 30 else "low",
    })

    # Budget
    factors.append({
        "factor": "Budget allocation",
        "impact": SENSITIVITY_FACTORS["budget"],
        "current_signal": "amplifier",
    })

    # Sort by impact descending
    factors.sort(key=lambda f: f["impact"], reverse=True)

    # Normalize impacts to relative percentages
    total_impact = sum(f["impact"] for f in factors)
    if total_impact > 0:
        for f in factors:
            f["relative_pct"] = round(f["impact"] / total_impact * 100, 1)

    return factors


# ─── Main Entry Point ───

def model(
    feasibility_score: float,
    processed_signals: dict[str, Any],
    constraint_data: dict[str, Any],
    regime_data: dict[str, Any],
) -> dict[str, Any]:
    """
    Generate probabilistic model for a feasibility analysis.

    Args:
        feasibility_score: Final score from scoring_engine (0-100)
        processed_signals: Output from signal_processor.process()
        constraint_data: Output from constraint_engine.evaluate()
        regime_data: Output from regime_detector.detect()

    Returns:
        distribution (PDF points), percentiles, uncertainty level,
        sensitivity analysis.
    """
    data_quality = processed_signals.get("data_quality", "low")
    volatility = regime_data.get("volatility", "moderate")
    regime = regime_data.get("primary_regime", "stable")

    # Compute distribution spread
    spread = _compute_spread(feasibility_score, data_quality, volatility, regime)
    uncertainty = _classify_uncertainty(spread)

    # Generate distribution
    pdf_points = _generate_pdf_points(feasibility_score, spread)
    percentiles = _compute_percentiles(feasibility_score, spread)

    # Sensitivity analysis
    sensitivity = _compute_sensitivity(processed_signals, constraint_data)

    logger.info(
        f"Probabilistic model: score={feasibility_score}, spread={spread:.1f}, "
        f"uncertainty={uncertainty}, p10={percentiles['p10']}, p90={percentiles['p90']}"
    )

    return {
        "distribution": pdf_points,
        "percentiles": percentiles,
        "uncertainty_level": uncertainty,
        "spread": round(spread, 2),
        "sensitivity": sensitivity,
    }
