"""
Scoring Engine — Combines all signals into a final feasibility score (0-100).

Pipeline:
  Step 1: Demand Score (0-100) — from signal_processor
  Step 2: Competition Score (0-100) — from signal_processor
  Step 3: Constraint Pressure (1.0-3.0) — from constraint_engine
  Step 4: Raw Feasibility = demand / (competition * constraint_pressure), normalized 0-100
  Step 5: Regime Adjustment (-25 to +30) — from regime_detector
  Step 6: Final Score — clamped 0-100, difficulty classification

Also produces: difficulty, time range, success band, conditions.
"""

import logging
from typing import Any

from processors.normalizer import clamp
from scoring.models import Constraint, FeasibilityResult
from scoring.weights import WEIGHTS, WEIGHT_VERSION

logger = logging.getLogger(__name__)

# ─── Difficulty thresholds ───

DIFFICULTY_THRESHOLDS = [
    (75, "easy"),
    (50, "medium"),
    (25, "hard"),
    (0,  "very_hard"),
]

# ─── Time range estimates (months) by difficulty + regime ───

TIME_RANGES: dict[str, dict[str, tuple[int, int]]] = {
    "easy":      {"emerging": (1, 3),  "trending": (2, 4),  "stable": (2, 5),  "saturated": (3, 6),  "declining": (3, 7)},
    "medium":    {"emerging": (2, 5),  "trending": (3, 7),  "stable": (4, 9),  "saturated": (6, 12), "declining": (6, 14)},
    "hard":      {"emerging": (4, 8),  "trending": (6, 12), "stable": (8, 16), "saturated": (10, 20),"declining": (12, 24)},
    "very_hard": {"emerging": (6, 14), "trending": (10, 18),"stable": (12, 24),"saturated": (18, 30),"declining": (18, 36)},
}

# ─── Success band multipliers (relative to feasibility score) ───

SUCCESS_BAND_MULTIPLIERS = {
    "best_case":  1.3,   # top 10-20% outcome
    "expected":   1.0,   # median
    "worst_case": 0.55,  # bottom 10-20% outcome
}


def _classify_difficulty(score: float) -> str:
    for threshold, label in DIFFICULTY_THRESHOLDS:
        if score >= threshold:
            return label
    return "very_hard"


def _estimate_time_range(difficulty: str, regime: str) -> tuple[int, int]:
    regime_ranges = TIME_RANGES.get(difficulty, TIME_RANGES["medium"])
    return regime_ranges.get(regime, regime_ranges["stable"])


def _calculate_success_band(feasibility: float) -> dict[str, float]:
    return {
        key: round(clamp(feasibility * mult, 0, 100), 1)
        for key, mult in SUCCESS_BAND_MULTIPLIERS.items()
    }


def _generate_conditions(
    difficulty: str,
    regime: str,
    constraint_data: dict[str, Any],
    demand_score: float,
    competition_score: float,
) -> list[str]:
    """Generate human-readable conditions/advice based on the analysis."""
    conditions: list[str] = []

    # Regime-based conditions
    if regime == "emerging":
        conditions.append("Early mover advantage — act quickly before competition builds")
    elif regime == "trending":
        conditions.append("Growing market — consistent effort will compound over time")
    elif regime == "saturated":
        conditions.append("Differentiation is critical — find an underserved angle or audience")
    elif regime == "declining":
        conditions.append("Consider adjacent niches with better trajectory")

    # Demand-based
    if demand_score < 30:
        conditions.append("Low demand detected — validate with additional keyword research")
    elif demand_score > 70:
        conditions.append("Strong demand signals — audience is actively seeking solutions")

    # Competition-based
    if competition_score > 70:
        conditions.append("High competition — long-tail keyword strategy recommended")
    elif competition_score < 25:
        conditions.append("Low competition — opportunity to establish authority quickly")

    # Constraint-based
    bottlenecks = constraint_data.get("bottlenecks", [])
    if "authority_gap" in bottlenecks:
        conditions.append("Significant authority gap — prioritize backlink acquisition from day one")
    if "attention_ceiling" in bottlenecks:
        conditions.append("Limited search volume — plan for multiple revenue streams beyond organic traffic")
    if "index_saturation" in bottlenecks:
        conditions.append("Content saturation — focus on unique data, perspectives, or formats")

    # Difficulty-based
    if difficulty == "easy":
        conditions.append("Achievable with consistent part-time effort")
    elif difficulty == "very_hard":
        conditions.append("Requires full-time dedication, budget for tools/links, and 12+ month commitment")

    return conditions


def score(
    processed_signals: dict[str, Any],
    constraint_data: dict[str, Any],
    regime_data: dict[str, Any],
) -> FeasibilityResult:
    """
    Run the full scoring pipeline and produce a FeasibilityResult.

    Args:
        processed_signals: Output from signal_processor.process()
        constraint_data: Output from constraint_engine.evaluate()
        regime_data: Output from regime_detector.detect()

    Returns:
        FeasibilityResult with all scoring outputs.
    """
    demand_score = processed_signals.get("demand_score", 0)
    competition_score = processed_signals.get("competition_score", 0)
    constraint_pressure = constraint_data.get("constraint_pressure", 1.0)
    regime_adjustment = regime_data.get("regime_adjustment", 0)
    regime = regime_data.get("primary_regime", "stable")

    # ── Step 4: Raw feasibility ──
    # demand / (competition * constraint_pressure), normalized to 0-100
    # Guard against division by zero
    denominator = max(competition_score * constraint_pressure, 0.1)
    raw_ratio = demand_score / denominator

    # Normalize: ratio of 1.0 maps to ~50, >2.0 maps to ~80+, <0.3 maps to ~15
    raw_feasibility = clamp(raw_ratio * 50, 0, 100)

    # ── Step 5: Regime adjustment ──
    adjusted = raw_feasibility + regime_adjustment

    # ── Step 6: Final score ──
    final_score = round(clamp(adjusted, 0, 100), 1)

    # ── Derived outputs ──
    difficulty = _classify_difficulty(final_score)
    time_min, time_max = _estimate_time_range(difficulty, regime)
    success_band = _calculate_success_band(final_score)
    conditions = _generate_conditions(
        difficulty, regime, constraint_data, demand_score, competition_score,
    )

    # Build constraints list from constraint_data
    binding = constraint_data.get("binding_constraints", [])
    constraints = [
        Constraint(
            type=c["type"],
            severity=c["severity"],
            category=c["category"],
            description=c["description"],
            implication=c["implication"],
        )
        for c in binding
    ]

    result = FeasibilityResult(
        feasibility_score=final_score,
        demand_score=round(demand_score, 1),
        competition_score=round(competition_score, 1),
        constraint_pressure=round(constraint_pressure, 2),
        difficulty=difficulty,
        time_range_min=time_min,
        time_range_max=time_max,
        regime=regime,
        success_band=success_band,
        constraints=constraints,
        conditions=conditions,
    )

    # ── Logging for calibration ──
    logger.info(
        f"Scoring complete: "
        f"demand={demand_score:.1f}, competition={competition_score:.1f}, "
        f"pressure={constraint_pressure:.2f}, regime={regime}({regime_adjustment:+.1f}), "
        f"raw={raw_feasibility:.1f}, final={final_score}, difficulty={difficulty}, "
        f"time={time_min}-{time_max}mo, weights_v={WEIGHT_VERSION}"
    )

    return result
