"""
Scenario Comparison Engine — Side-by-side comparison of multiple strategic options.

Comparison types:
  - Niche vs. niche (different keywords, same params)
  - Channel vs. channel (same niche, different domains)
  - Effort level comparison (same niche, different effort)
  - Budget comparison (same niche, different budgets)
  - Timeline comparison (same niche, different horizons)

Produces: ranked scenarios with recommendation + trade-off notes.

Tier limits: free=2, premium=5, api=unlimited.
"""

import logging
from typing import Any

logger = logging.getLogger(__name__)

TIER_LIMITS = {
    "free":       2,
    "premium":    5,
    "enterprise": 10,
}

# ─── Scoring dimension weights for recommendation ranking ───

RANKING_WEIGHTS = {
    "feasibility_score": 0.35,
    "demand_score":      0.20,
    "time_efficiency":   0.20,  # inverse of time_range_min
    "low_risk":          0.15,  # inverse of constraint_pressure
    "growth_potential":  0.10,  # regime adjustment
}


def _compute_composite_rank(scenario: dict[str, Any]) -> float:
    """Compute weighted ranking score for recommendation."""
    score = scenario.get("feasibility_score", 0)
    demand = scenario.get("demand_score", 0)
    time_min = scenario.get("time_range_min", 12)
    pressure = scenario.get("constraint_pressure", 2.0)
    regime_adj = scenario.get("regime_adjustment", 0)

    # Normalize each dimension to 0-1
    norm_score = score / 100
    norm_demand = demand / 100
    norm_time = max(0, 1 - time_min / 36)       # shorter = better
    norm_risk = max(0, 1 - (pressure - 1) / 2)  # lower pressure = better
    norm_growth = (regime_adj + 25) / 55         # -25 to +30 → 0 to 1

    composite = (
        RANKING_WEIGHTS["feasibility_score"] * norm_score
        + RANKING_WEIGHTS["demand_score"] * norm_demand
        + RANKING_WEIGHTS["time_efficiency"] * norm_time
        + RANKING_WEIGHTS["low_risk"] * norm_risk
        + RANKING_WEIGHTS["growth_potential"] * norm_growth
    )

    return round(composite, 4)


def _generate_recommendation(ranked: list[dict[str, Any]]) -> dict[str, Any]:
    """Generate recommendation with explanation."""
    if not ranked:
        return {"recommended_index": None, "explanation": "No scenarios to compare."}

    best = ranked[0]
    idx = best["_original_index"]

    reasons: list[str] = []

    if best["feasibility_score"] >= 70:
        reasons.append(f"highest feasibility score ({best['feasibility_score']})")
    elif best["feasibility_score"] >= 50:
        reasons.append(f"best feasibility score among options ({best['feasibility_score']})")
    else:
        reasons.append(f"least difficult option (score: {best['feasibility_score']})")

    if best.get("regime") in ("emerging", "trending"):
        reasons.append(f"{best['regime']} market with growth potential")

    if best.get("constraint_pressure", 3) < 1.5:
        reasons.append("low structural barriers")

    if best.get("time_range_min", 99) <= 4:
        reasons.append(f"fast time to traction ({best['time_range_min']}-{best['time_range_max']} months)")

    explanation = "Recommended because: " + "; ".join(reasons) + "." if reasons else "Best available option."

    return {
        "recommended_index": idx,
        "explanation": explanation,
    }


def _generate_tradeoffs(ranked: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Note what non-recommended options offer that the top choice doesn't."""
    if len(ranked) < 2:
        return []

    best = ranked[0]
    tradeoffs: list[dict[str, Any]] = []

    for alt in ranked[1:]:
        advantages: list[str] = []

        if alt.get("demand_score", 0) > best.get("demand_score", 0) + 10:
            advantages.append(f"higher demand ({alt['demand_score']} vs {best['demand_score']})")

        if alt.get("constraint_pressure", 3) < best.get("constraint_pressure", 3) - 0.3:
            advantages.append(f"fewer structural barriers (pressure {alt['constraint_pressure']} vs {best['constraint_pressure']})")

        if (alt.get("time_range_min", 99) < best.get("time_range_min", 99)):
            advantages.append(f"potentially faster results ({alt['time_range_min']}-{alt['time_range_max']}mo vs {best['time_range_min']}-{best['time_range_max']}mo)")

        alt_regime = alt.get("regime", "")
        best_regime = best.get("regime", "")
        if alt_regime == "emerging" and best_regime != "emerging":
            advantages.append("emerging market with early-mover opportunity")

        if advantages:
            tradeoffs.append({
                "index": alt["_original_index"],
                "label": alt.get("label", f"Scenario {alt['_original_index'] + 1}"),
                "advantages_over_recommended": advantages,
            })

    return tradeoffs


def _build_comparison_table(scenarios: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Build a flat comparison table with key metrics per scenario."""
    table = []
    for s in scenarios:
        table.append({
            "index": s["_original_index"],
            "label": s.get("label", f"Scenario {s['_original_index'] + 1}"),
            "feasibility_score": s.get("feasibility_score", 0),
            "difficulty": s.get("difficulty", "unknown"),
            "demand_score": s.get("demand_score", 0),
            "competition_score": s.get("competition_score", 0),
            "constraint_pressure": s.get("constraint_pressure", 0),
            "regime": s.get("regime", "unknown"),
            "regime_adjustment": s.get("regime_adjustment", 0),
            "time_range": f"{s.get('time_range_min', '?')}-{s.get('time_range_max', '?')} months",
            "success_band": s.get("success_band", {}),
            "top_constraints": [
                c["type"] for c in s.get("constraints", [])
                if c.get("severity") == "high"
            ][:3],
            "conditions_count": len(s.get("conditions", [])),
            "composite_rank": s.get("_composite_rank", 0),
        })
    return table


# ─── Main Entry Point ───

def compare(
    scenarios: list[dict[str, Any]],
    tier: str = "free",
) -> dict[str, Any]:
    """
    Compare multiple scenario results side-by-side.

    Args:
        scenarios: List of dicts, each containing:
            - label (str): Display name for the scenario
            - feasibility_score, demand_score, competition_score,
              constraint_pressure, difficulty, regime, regime_adjustment,
              time_range_min, time_range_max, success_band,
              constraints (list), conditions (list)
            - Optional: probabilistic (dict), monte_carlo (dict)
        tier: free / premium / enterprise

    Returns:
        comparison_table, recommendation, tradeoffs, scenario_count.
    """
    max_scenarios = TIER_LIMITS.get(tier, 2)

    if len(scenarios) > max_scenarios:
        return {
            "error": "tier_limit_exceeded",
            "message": f"Your plan allows comparing up to {max_scenarios} scenarios. You submitted {len(scenarios)}.",
            "limit": max_scenarios,
        }

    if len(scenarios) < 2:
        return {
            "error": "insufficient_scenarios",
            "message": "At least 2 scenarios are required for comparison.",
        }

    logger.info(f"Comparing {len(scenarios)} scenarios (tier={tier})")

    # Tag each scenario with its original index and compute rank
    for i, s in enumerate(scenarios):
        s["_original_index"] = i
        s["_composite_rank"] = _compute_composite_rank(s)

    # Rank by composite score
    ranked = sorted(scenarios, key=lambda s: s["_composite_rank"], reverse=True)

    # Generate outputs
    table = _build_comparison_table(ranked)
    recommendation = _generate_recommendation(ranked)
    tradeoffs = _generate_tradeoffs(ranked)

    # Clean up internal keys
    for s in scenarios:
        s.pop("_original_index", None)
        s.pop("_composite_rank", None)

    return {
        "scenario_count": len(scenarios),
        "tier": tier,
        "comparison_table": table,
        "recommendation": recommendation,
        "tradeoffs": tradeoffs,
    }
