"""
Regime Detection Engine — Classifies niche state into one of five regimes.

Regimes:
  emerging  — Rising rapidly, low competition   → +20 to +30
  trending  — Rising, building competition      → +10 to +20
  stable    — Flat demand, moderate competition  → neutral
  saturated — Flat/slow, high competition        → -10 to -20
  declining — Falling demand                     → -15 to -25

Uses: trend slope, competition density, demand stability (variance).
Deterministic for clear cases, probabilistic for border cases.
"""

import logging
from typing import Any

from processors.normalizer import clamp

logger = logging.getLogger(__name__)

# ─── Regime adjustment ranges (applied to feasibility score) ───

REGIME_ADJUSTMENTS: dict[str, tuple[float, float]] = {
    "emerging":  (+20, +30),
    "trending":  (+10, +20),
    "stable":    (-5,  +5),
    "saturated": (-20, -10),
    "declining": (-25, -15),
}

# ─── Detection thresholds ───

# Trend slope (from trends collector linear regression)
SLOPE_RISING_FAST = 1.5     # strong upward trend
SLOPE_RISING = 0.5          # moderate upward
SLOPE_DECLINING = -0.5      # downward
SLOPE_DECLINING_FAST = -1.5 # strong downward

# Competition score (0-100, from signal processor)
COMP_LOW = 30
COMP_MODERATE = 50
COMP_HIGH = 70

# Demand score (0-100, from signal processor)
DEMAND_MODERATE = 40

# Variance (coefficient of variation from trends)
VARIANCE_HIGH = 0.5  # high volatility / seasonality


def _score_regimes(
    trend_slope: float,
    competition_score: float,
    demand_score: float,
    variance: float,
) -> dict[str, float]:
    """
    Score each regime 0-1 based on signal match.
    Higher = stronger match for that regime.
    """
    scores: dict[str, float] = {
        "emerging": 0.0,
        "trending": 0.0,
        "stable": 0.0,
        "saturated": 0.0,
        "declining": 0.0,
    }

    # ── Emerging: rising fast + low competition ──
    if trend_slope > SLOPE_RISING:
        slope_factor = min((trend_slope - SLOPE_RISING) / (SLOPE_RISING_FAST - SLOPE_RISING), 1.0)
        comp_factor = max(1.0 - competition_score / COMP_MODERATE, 0.0)
        scores["emerging"] = slope_factor * 0.6 + comp_factor * 0.4

    # ── Trending: rising + any competition ──
    if trend_slope > 0:
        slope_factor = min(trend_slope / SLOPE_RISING_FAST, 1.0)
        # Stronger signal when competition is building but not yet high
        comp_factor = 1.0 - abs(competition_score - COMP_MODERATE) / 50
        comp_factor = max(comp_factor, 0.0)
        scores["trending"] = slope_factor * 0.5 + comp_factor * 0.3 + 0.2

    # ── Stable: flat trend + moderate competition ──
    flatness = max(1.0 - abs(trend_slope) / SLOPE_RISING, 0.0)
    comp_moderate_factor = max(1.0 - abs(competition_score - COMP_MODERATE) / 40, 0.0)
    scores["stable"] = flatness * 0.6 + comp_moderate_factor * 0.4

    # ── Saturated: flat/slow + high competition + decent demand ──
    if competition_score > COMP_MODERATE:
        comp_high_factor = min((competition_score - COMP_MODERATE) / (COMP_HIGH - COMP_MODERATE), 1.0)
        demand_factor = min(demand_score / 60, 1.0) if demand_score > DEMAND_MODERATE else 0.3
        stagnation = max(1.0 - abs(trend_slope) / SLOPE_RISING, 0.0)
        scores["saturated"] = comp_high_factor * 0.4 + demand_factor * 0.2 + stagnation * 0.4

    # ── Declining: falling trend ──
    if trend_slope < 0:
        decline_factor = min(abs(trend_slope) / abs(SLOPE_DECLINING_FAST), 1.0)
        scores["declining"] = decline_factor * 0.7 + 0.3

    return scores


def _pick_regimes(scores: dict[str, float]) -> tuple[str, float, str | None, float | None]:
    """Pick primary and optional secondary regime from scores."""
    sorted_regimes = sorted(scores.items(), key=lambda x: x[1], reverse=True)

    primary, primary_score = sorted_regimes[0]
    secondary, secondary_score = sorted_regimes[1]

    # Normalize confidence
    total = sum(s for _, s in sorted_regimes if s > 0) or 1.0
    primary_conf = round(primary_score / total, 2)
    secondary_conf = round(secondary_score / total, 2)

    # Only report secondary if it's reasonably close (within 60% of primary)
    if secondary_score > 0 and secondary_score >= primary_score * 0.4:
        return primary, primary_conf, secondary, secondary_conf

    return primary, min(primary_conf + 0.1, 1.0), None, None


def _calculate_adjustment(regime: str, confidence: float) -> float:
    """Calculate regime adjustment score, scaled by confidence."""
    low, high = REGIME_ADJUSTMENTS.get(regime, (-5, 5))
    mid = (low + high) / 2
    return round(mid * confidence, 2)


def _assess_entry_difficulty(
    regime: str,
    competition_score: float,
    constraint_pressure: float | None,
) -> str:
    """Assess how hard it is to enter this niche given regime + signals."""
    if regime == "emerging" and competition_score < COMP_LOW:
        return "low"
    if regime in ("declining", "saturated") and competition_score > COMP_HIGH:
        return "very_high"
    if regime == "saturated" or competition_score > COMP_HIGH:
        return "high"
    if competition_score > COMP_MODERATE:
        return "moderate"
    return "low"


def _assess_volatility(variance: float, trend_slope: float) -> str:
    """Assess how volatile/unpredictable the niche is."""
    if variance > VARIANCE_HIGH or abs(trend_slope) > SLOPE_RISING_FAST:
        return "high"
    if variance > 0.3 or abs(trend_slope) > SLOPE_RISING:
        return "moderate"
    return "low"


# ─── Main Entry Point ───

def detect(
    trends_data: dict[str, Any],
    processed_signals: dict[str, Any],
    constraint_pressure: float | None = None,
) -> dict[str, Any]:
    """
    Detect the regime for a niche based on trend + competition + demand signals.

    Args:
        trends_data: Raw trends collector output (for slope, variance)
        processed_signals: Output from signal_processor.process()
        constraint_pressure: Optional, from constraint_engine.evaluate()

    Returns:
        primary_regime, confidence, secondary_regime (if border case),
        regime_adjustment, volatility, trend_slope, entry_difficulty
    """
    trend_slope = trends_data.get("slope") or 0.0
    variance = trends_data.get("variance") or 0.0
    demand_score = processed_signals.get("demand_score", 0)
    competition_score = processed_signals.get("competition_score", 0)

    logger.info(
        f"Regime detection: slope={trend_slope}, variance={variance}, "
        f"demand={demand_score}, competition={competition_score}"
    )

    # Score all regimes
    regime_scores = _score_regimes(trend_slope, competition_score, demand_score, variance)

    # Pick primary + optional secondary
    primary, primary_conf, secondary, secondary_conf = _pick_regimes(regime_scores)

    # Calculate adjustment
    adjustment = _calculate_adjustment(primary, primary_conf)

    # Assess entry difficulty and volatility
    entry_difficulty = _assess_entry_difficulty(primary, competition_score, constraint_pressure)
    volatility = _assess_volatility(variance, trend_slope)

    result: dict[str, Any] = {
        "primary_regime": primary,
        "confidence": primary_conf,
        "regime_adjustment": adjustment,
        "trend_slope": round(trend_slope, 4),
        "volatility": volatility,
        "entry_difficulty": entry_difficulty,
    }

    if secondary:
        result["secondary_regime"] = secondary
        result["secondary_confidence"] = secondary_conf

    logger.info(
        f"Regime detected: {primary} ({primary_conf:.0%})"
        + (f", secondary={secondary} ({secondary_conf:.0%})" if secondary else "")
        + f", adjustment={adjustment}"
    )

    return result
