"""
Monte Carlo Simulation Engine — Runs thousands of simulated scenarios.

For each run, randomly varies:
  - Competition intensity (Normal, ±20%)
  - Demand growth (trend slope + noise, ±15%)
  - Content quality (mapped from effort level)
  - Algorithm volatility (5% chance/month binary shock)
  - Backlink acquisition (Poisson, based on effort + budget)
  - Competitor entry rate (Poisson, based on regime + trend)

Produces month-by-month trajectories for traffic, ranking, and revenue.
Aggregates into percentile bands, success probability, and time-to-traction.

Tier limits: free=1000, premium=5000, enterprise=10000 runs.
"""

import logging
import math
from typing import Any

import numpy as np

from processors.normalizer import clamp

logger = logging.getLogger(__name__)

# ─── Tier configuration ───

TIER_RUNS = {
    "free":       1_000,
    "premium":    5_000,
    "enterprise": 10_000,
}

# ─── Content quality ranges by effort level ───

CONTENT_QUALITY_RANGES = {
    "low":    (30, 50),
    "medium": (45, 70),
    "high":   (65, 90),
}

# ─── Backlink monthly rates by effort + budget tier ───

BACKLINK_BASE_RATES = {
    "low":    0.5,    # ~0.5 quality links/month
    "medium": 2.0,
    "high":   5.0,
}

# Budget bonus: every $200/mo adds ~1 link/month
BUDGET_LINK_FACTOR = 1 / 200

# ─── Competitor entry rates by regime (new competitors / month) ───

COMPETITOR_ENTRY_RATES = {
    "emerging":  0.8,
    "trending":  1.5,
    "stable":    0.5,
    "saturated": 0.3,
    "declining": 0.1,
}

# ─── Algorithm volatility ───

ALGO_SHOCK_PROBABILITY = 0.05       # 5% chance per month
ALGO_SHOCK_IMPACT = (-30, -10)      # traffic drop range on shock


def _simulate_single_run(
    rng: np.random.Generator,
    base_demand: float,
    base_competition: float,
    constraint_pressure: float,
    regime_adjustment: float,
    trend_slope: float,
    effort_level: str,
    budget: float,
    time_horizon: int,
    regime: str,
) -> dict[str, Any]:
    """
    Run a single Monte Carlo simulation across the time horizon.

    Returns month-by-month trajectory and final outcome metrics.
    """
    # ── Sample parameters for this run ──

    # Competition: normal distribution ±20%
    comp_variation = rng.normal(1.0, 0.20)
    effective_competition = clamp(base_competition * comp_variation, 1, 100)

    # Demand growth: trend + noise ±15%
    demand_noise = rng.normal(1.0, 0.15)

    # Content quality: uniform within effort band
    cq_low, cq_high = CONTENT_QUALITY_RANGES.get(effort_level, (45, 70))
    content_quality = rng.uniform(cq_low, cq_high) / 100  # 0-1 scale

    # Backlink rate: Poisson
    base_rate = BACKLINK_BASE_RATES.get(effort_level, 2.0)
    budget_bonus = budget * BUDGET_LINK_FACTOR
    monthly_backlinks = rng.poisson(base_rate + budget_bonus)

    # Competitor entry: Poisson
    entry_rate = COMPETITOR_ENTRY_RATES.get(regime, 0.5)

    # ── Month-by-month simulation ──

    traffic_trajectory: list[float] = []
    ranking_trajectory: list[float] = []
    revenue_trajectory: list[float] = []

    cumulative_authority = 0.0
    cumulative_content = 0.0
    current_traffic = 0.0

    for month in range(1, time_horizon + 1):
        # Authority builds from backlinks + content
        new_links = rng.poisson(max(0, monthly_backlinks))
        cumulative_authority += new_links * 0.02 + content_quality * 0.01
        cumulative_content += content_quality

        # Demand evolves with trend
        monthly_demand = base_demand * demand_noise * (1 + trend_slope * 0.01 * month)
        monthly_demand = clamp(monthly_demand, 0, 100)

        # New competitors enter
        new_competitors = rng.poisson(entry_rate)
        effective_competition += new_competitors * 0.5

        # Algorithm shock
        if rng.random() < ALGO_SHOCK_PROBABILITY:
            shock = rng.uniform(*ALGO_SHOCK_IMPACT)
            current_traffic = max(0, current_traffic + shock)

        # Ranking estimate (lower = better, 1-100)
        # Authority helps, competition hurts
        authority_factor = min(cumulative_authority, 1.0)
        ranking = 100 - (authority_factor * 80) + (effective_competition * 0.3)
        ranking = clamp(ranking, 1, 100)

        # Traffic: function of demand, ranking position, and content quality
        # Top 3 gets ~60% of clicks, position 10 gets ~2%
        ctr = max(0.02, 0.35 * math.exp(-0.15 * (ranking - 1)))
        traffic_growth = monthly_demand * ctr * (1 + cumulative_content * 0.005)
        current_traffic = max(0, current_traffic * 0.85 + traffic_growth * 15)

        # Revenue: simple estimate based on traffic (RPM model)
        # ~$15-30 RPM for most niches
        rpm = rng.uniform(15, 30)
        monthly_revenue = current_traffic * rpm / 1000

        traffic_trajectory.append(round(current_traffic, 1))
        ranking_trajectory.append(round(ranking, 1))
        revenue_trajectory.append(round(monthly_revenue, 2))

    # ── Compute final feasibility for this run ──
    # Same formula as scoring_engine but with varied inputs
    denominator = max(effective_competition * constraint_pressure, 0.1)
    raw = (monthly_demand / denominator) * 50
    final = clamp(raw + regime_adjustment, 0, 100)

    # Time to traction: first month where traffic > 100 visits
    traction_month = None
    for i, t in enumerate(traffic_trajectory):
        if t >= 100:
            traction_month = i + 1
            break

    return {
        "final_score": round(final, 1),
        "final_traffic": traffic_trajectory[-1] if traffic_trajectory else 0,
        "final_revenue": revenue_trajectory[-1] if revenue_trajectory else 0,
        "traction_month": traction_month,
        "traffic_trajectory": traffic_trajectory,
        "ranking_trajectory": ranking_trajectory,
        "revenue_trajectory": revenue_trajectory,
    }


def _aggregate_trajectories(
    runs: list[dict[str, Any]],
    time_horizon: int,
) -> dict[str, Any]:
    """Aggregate all runs into percentile bands."""
    n = len(runs)

    # Collect per-month values
    traffic_matrix = np.zeros((n, time_horizon))
    ranking_matrix = np.zeros((n, time_horizon))
    revenue_matrix = np.zeros((n, time_horizon))

    for i, run in enumerate(runs):
        t_len = min(len(run["traffic_trajectory"]), time_horizon)
        traffic_matrix[i, :t_len] = run["traffic_trajectory"][:t_len]
        ranking_matrix[i, :t_len] = run["ranking_trajectory"][:t_len]
        revenue_matrix[i, :t_len] = run["revenue_trajectory"][:t_len]

    def percentile_series(matrix: np.ndarray, pcts: list[int]) -> dict[str, list[float]]:
        result = {}
        for p in pcts:
            values = np.percentile(matrix, p, axis=0)
            result[f"p{p}"] = [round(float(v), 1) for v in values]
        return result

    pcts = [10, 25, 50, 75, 90]

    return {
        "traffic": percentile_series(traffic_matrix, pcts),
        "ranking": percentile_series(ranking_matrix, pcts),
        "revenue": percentile_series(revenue_matrix, pcts),
    }


def _compute_success_probability(
    runs: list[dict[str, Any]],
    traffic_goal: float = 1000,
) -> float:
    """Percentage of scenarios achieving the traffic goal."""
    successes = sum(1 for r in runs if r["final_traffic"] >= traffic_goal)
    return round(successes / len(runs) * 100, 1)


def _compute_traction_distribution(
    runs: list[dict[str, Any]],
    time_horizon: int,
) -> list[dict[str, Any]]:
    """Histogram of time-to-traction (month when traffic first hits 100)."""
    buckets: dict[int, int] = {}
    never_count = 0

    for r in runs:
        month = r["traction_month"]
        if month is None:
            never_count += 1
        else:
            buckets[month] = buckets.get(month, 0) + 1

    n = len(runs)
    histogram = []
    for m in range(1, time_horizon + 1):
        count = buckets.get(m, 0)
        histogram.append({"month": m, "count": count, "pct": round(count / n * 100, 1)})

    if never_count > 0:
        histogram.append({"month": None, "count": never_count, "pct": round(never_count / n * 100, 1), "label": "never"})

    return histogram


# ─── Main Entry Point ───

def simulate(
    processed_signals: dict[str, Any],
    constraint_data: dict[str, Any],
    regime_data: dict[str, Any],
    effort_level: str = "medium",
    budget: float = 0,
    time_horizon: int = 6,
    tier: str = "free",
    seed: int | None = None,
) -> dict[str, Any]:
    """
    Run Monte Carlo simulation.

    Args:
        processed_signals: From signal_processor.process()
        constraint_data: From constraint_engine.evaluate()
        regime_data: From regime_detector.detect()
        effort_level: low / medium / high
        budget: Monthly budget in USD
        time_horizon: Months to simulate
        tier: free / premium / enterprise (controls run count)
        seed: Optional RNG seed for reproducibility

    Returns:
        Trajectories (percentile bands), success probability,
        traction distribution, summary statistics.
    """
    num_runs = TIER_RUNS.get(tier, 1_000)
    rng = np.random.default_rng(seed)

    demand_score = processed_signals.get("demand_score", 0)
    competition_score = processed_signals.get("competition_score", 0)
    constraint_pressure = constraint_data.get("constraint_pressure", 1.0)
    regime_adjustment = regime_data.get("regime_adjustment", 0)
    trend_slope = regime_data.get("trend_slope", 0)
    regime = regime_data.get("primary_regime", "stable")

    logger.info(
        f"Monte Carlo: {num_runs} runs, {time_horizon}mo, tier={tier}, "
        f"effort={effort_level}, budget=${budget}"
    )

    # Run simulations
    runs: list[dict[str, Any]] = []
    for _ in range(num_runs):
        run = _simulate_single_run(
            rng=rng,
            base_demand=demand_score,
            base_competition=competition_score,
            constraint_pressure=constraint_pressure,
            regime_adjustment=regime_adjustment,
            trend_slope=trend_slope,
            effort_level=effort_level,
            budget=budget,
            time_horizon=time_horizon,
            regime=regime,
        )
        runs.append(run)

    # Aggregate
    trajectories = _aggregate_trajectories(runs, time_horizon)
    success_prob = _compute_success_probability(runs, traffic_goal=1000)
    traction_dist = _compute_traction_distribution(runs, time_horizon)

    # Summary stats
    final_scores = [r["final_score"] for r in runs]
    final_traffic = [r["final_traffic"] for r in runs]
    final_revenue = [r["final_revenue"] for r in runs]

    summary = {
        "score": {
            "mean": round(float(np.mean(final_scores)), 1),
            "median": round(float(np.median(final_scores)), 1),
            "std": round(float(np.std(final_scores)), 1),
            "p10": round(float(np.percentile(final_scores, 10)), 1),
            "p90": round(float(np.percentile(final_scores, 90)), 1),
        },
        "traffic_at_end": {
            "mean": round(float(np.mean(final_traffic)), 0),
            "median": round(float(np.median(final_traffic)), 0),
            "p10": round(float(np.percentile(final_traffic, 10)), 0),
            "p90": round(float(np.percentile(final_traffic, 90)), 0),
        },
        "revenue_at_end": {
            "mean": round(float(np.mean(final_revenue)), 2),
            "median": round(float(np.median(final_revenue)), 2),
            "p10": round(float(np.percentile(final_revenue, 10)), 2),
            "p90": round(float(np.percentile(final_revenue, 90)), 2),
        },
    }

    logger.info(
        f"Monte Carlo complete: success_prob={success_prob}%, "
        f"median_traffic={summary['traffic_at_end']['median']}, "
        f"median_revenue=${summary['revenue_at_end']['median']}"
    )

    return {
        "num_runs": num_runs,
        "time_horizon": time_horizon,
        "tier": tier,
        "trajectories": trajectories,
        "success_probability": success_prob,
        "traction_distribution": traction_dist,
        "summary": summary,
    }
