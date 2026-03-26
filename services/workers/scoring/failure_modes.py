"""
Failure Mode Engine — Identifies the most likely reasons for failure.

Catalog:
  authority_wall        — Authority gap > 60 points
  content_treadmill     — Content outdated quickly, constant updates needed
  saturation_ceiling    — Too much content, high competition
  demand_collapse       — Interest declining structurally
  monopoly_lock         — Few dominant players control the SERP
  quality_bar_escalation — Extremely high quality standard to compete

Each mode has: trigger check, probability estimate, description, mitigation.
Returns top 2-3 most likely failure modes per analysis.
"""

import logging
from typing import Any

from processors.normalizer import clamp

logger = logging.getLogger(__name__)


# ─── Failure mode definitions ───

def _check_authority_wall(
    serp_data: dict[str, Any],
    trends_data: dict[str, Any],
) -> dict[str, Any] | None:
    """Authority gap > 60 points — top sites too established."""
    avg_strength = serp_data.get("avg_domain_strength") or 0
    NEW_SITE_AUTHORITY = 0.1
    gap = avg_strength - NEW_SITE_AUTHORITY

    if gap < 0.5:
        return None

    # Probability scales with gap severity
    probability = clamp(gap / 0.9, 0.3, 0.95)

    # Higher probability if top 3 are all very strong
    top_results = serp_data.get("top_results", [])
    if top_results:
        top3_strength = sum(
            r.get("authority_estimate", 0) for r in top_results[:3]
        ) / min(len(top_results), 3)
        if top3_strength > 0.8:
            probability = min(probability + 0.15, 0.95)

    return {
        "mode": "authority_wall",
        "probability": round(probability, 2),
        "severity": "high" if gap > 0.7 else "medium",
        "description": (
            f"Top-ranking domains have very high authority (avg {avg_strength:.0%}). "
            f"A new site starting at ~{NEW_SITE_AUTHORITY:.0%} faces a {gap:.0%} authority gap "
            f"that takes 12-24 months of sustained link building to close."
        ),
        "mitigation": [
            "Target long-tail keyword variants where authority matters less",
            "Build topical authority in a narrow sub-niche before expanding",
            "Focus on link-worthy content (original research, data, tools) to accelerate backlink acquisition",
            "Consider guest posting and digital PR to bootstrap authority",
        ],
        "trigger_value": round(gap, 3),
    }


def _check_content_treadmill(
    serp_data: dict[str, Any],
    trends_data: dict[str, Any],
) -> dict[str, Any] | None:
    """Content freshness decay — needs constant updates to stay relevant."""
    avg_content_age = serp_data.get("avg_content_age_days")
    variance = trends_data.get("variance") or 0
    trend_direction = trends_data.get("trend_direction")

    # Trigger if content ages fast or niche is highly volatile
    is_volatile = variance > 0.4 or trend_direction in ("rising", "seasonal")

    # If we have age data and it's fresh
    if avg_content_age is not None and avg_content_age < 60:
        probability = clamp(0.4 + (60 - avg_content_age) / 100, 0.3, 0.85)
    elif is_volatile:
        probability = 0.45
    else:
        return None

    if is_volatile:
        probability = min(probability + 0.15, 0.90)

    return {
        "mode": "content_treadmill",
        "probability": round(probability, 2),
        "severity": "medium",
        "description": (
            "This niche requires frequent content updates to stay competitive. "
            "Top-ranking content is refreshed regularly, and search engines favor "
            "recently updated pages. Falling behind on updates leads to ranking decay."
        ),
        "mitigation": [
            "Build systems for efficient content updates (templates, update schedules)",
            "Focus on evergreen subtopics within the niche that require less maintenance",
            "Create tools or calculators that provide ongoing value without constant rewriting",
            "Batch content production to maintain consistency without burnout",
        ],
        "trigger_value": avg_content_age or variance,
    }


def _check_saturation_ceiling(
    serp_data: dict[str, Any],
    processed_signals: dict[str, Any],
) -> dict[str, Any] | None:
    """Index volume > 500K + competition > 80 — too much content already."""
    indexed = serp_data.get("indexed_pages_estimate") or 0
    competition = processed_signals.get("competition_score", 0)

    if indexed < 500_000 or competition < 60:
        return None

    # Probability increases with both volume and competition
    vol_factor = min(indexed / 50_000_000, 1.0)
    comp_factor = competition / 100
    probability = clamp(vol_factor * 0.5 + comp_factor * 0.5, 0.3, 0.90)

    if indexed > 10_000_000 and competition > 80:
        probability = min(probability + 0.15, 0.95)

    severity = "high" if (indexed > 10_000_000 and competition > 70) else "medium"

    return {
        "mode": "saturation_ceiling",
        "probability": round(probability, 2),
        "severity": severity,
        "description": (
            f"Approximately {indexed:,} pages already target this topic with a competition "
            f"score of {competition:.0f}/100. New content struggles to stand out in such "
            f"a crowded space, even with high quality."
        ),
        "mitigation": [
            "Find underserved sub-topics or angles within the broader niche",
            "Differentiate with original data, unique perspectives, or superior UX",
            "Target question-based and comparison keywords that larger sites overlook",
            "Build a content moat through depth rather than breadth",
        ],
        "trigger_value": {"indexed_pages": indexed, "competition": competition},
    }


def _check_demand_collapse(
    trends_data: dict[str, Any],
) -> dict[str, Any] | None:
    """Trend slope < -0.3 sustained — interest declining structurally."""
    slope = trends_data.get("slope") or 0
    interest_data = trends_data.get("interest_data", [])

    if slope >= -0.3:
        return None

    # Check if decline is sustained (not just a dip)
    if interest_data and len(interest_data) >= 6:
        recent_half = interest_data[len(interest_data) // 2:]
        recent_avg = sum(pt["value"] for pt in recent_half) / len(recent_half)
        older_half = interest_data[:len(interest_data) // 2]
        older_avg = sum(pt["value"] for pt in older_half) / len(older_half) if older_half else 0

        # Sustained decline: recent avg significantly lower than older avg
        if older_avg > 0 and recent_avg / older_avg < 0.7:
            probability = clamp(0.5 + abs(slope) / 5, 0.5, 0.95)
        else:
            probability = clamp(0.3 + abs(slope) / 5, 0.3, 0.7)
    else:
        probability = clamp(0.35 + abs(slope) / 5, 0.35, 0.8)

    return {
        "mode": "demand_collapse",
        "probability": round(probability, 2),
        "severity": "high" if slope < -1.0 else "medium",
        "description": (
            f"Search interest is declining (slope: {slope:.2f}). "
            f"This indicates structural demand erosion, not a temporary dip. "
            f"Building in a declining market means shrinking returns over time."
        ),
        "mitigation": [
            "Pivot to adjacent, growing niches where your expertise transfers",
            "Focus on capturing remaining demand quickly before further decline",
            "Diversify traffic sources — don't rely solely on organic search",
            "Consider the niche as a stepping stone to build authority for a broader pivot",
        ],
        "trigger_value": round(slope, 4),
    }


def _check_monopoly_lock(
    serp_data: dict[str, Any],
) -> dict[str, Any] | None:
    """< 3 unique domains in top 10 — few dominant players control the SERP."""
    unique_domains = serp_data.get("unique_domains_top10")
    is_monopolistic = serp_data.get("is_monopolistic", False)

    if unique_domains is None:
        return None

    if unique_domains >= 5 and not is_monopolistic:
        return None

    probability = clamp(1.0 - unique_domains / 10, 0.3, 0.90)
    if unique_domains <= 3:
        probability = max(probability, 0.75)

    return {
        "mode": "monopoly_lock",
        "probability": round(probability, 2),
        "severity": "high" if unique_domains <= 3 else "medium",
        "description": (
            f"Only {unique_domains} unique domains appear in the top 10 results. "
            f"This SERP is dominated by a few major players, making it extremely "
            f"difficult for new entrants to break through."
        ),
        "mitigation": [
            "Target informational queries adjacent to the monopolized commercial terms",
            "Build brand recognition through non-search channels first (social, communities)",
            "Look for SERP features (People Also Ask, videos) as alternative entry points",
            "Consider a different content format that incumbents don't cover well",
        ],
        "trigger_value": unique_domains,
    }


def _check_quality_bar_escalation(
    serp_data: dict[str, Any],
) -> dict[str, Any] | None:
    """Avg content > 5000 words + high engagement — extremely high quality bar."""
    avg_length = serp_data.get("avg_content_length") or 0
    # avg_content_length is snippet length proxy; estimate real content at ~10x
    estimated_words = avg_length * 10

    avg_strength = serp_data.get("avg_domain_strength") or 0

    if estimated_words < 3000 or avg_strength < 0.5:
        return None

    probability = clamp(
        (estimated_words / 8000) * 0.5 + avg_strength * 0.5,
        0.3, 0.85,
    )

    if estimated_words > 5000 and avg_strength > 0.7:
        probability = min(probability + 0.1, 0.90)

    return {
        "mode": "quality_bar_escalation",
        "probability": round(probability, 2),
        "severity": "high" if estimated_words > 5000 else "medium",
        "description": (
            f"Top-ranking content averages ~{estimated_words:,} words with high-authority "
            f"domains (avg strength {avg_strength:.0%}). Meeting this quality bar requires "
            f"significant time, expertise, and often budget per article."
        ),
        "mitigation": [
            "Focus on fewer, higher-quality pieces rather than high volume",
            "Invest in subject matter expertise or hire domain specialists",
            "Differentiate through format (interactive tools, video, original data) rather than competing on word count",
            "Start with less competitive subtopics where the quality bar is lower",
        ],
        "trigger_value": {"estimated_words": estimated_words, "avg_strength": round(avg_strength, 3)},
    }


# ─── Main Entry Point ───

def analyze(
    serp_data: dict[str, Any],
    trends_data: dict[str, Any],
    processed_signals: dict[str, Any],
) -> dict[str, Any]:
    """
    Analyze all potential failure modes for a niche.

    Returns top 2-3 most likely failure modes with probability,
    description, and mitigation strategies.
    """
    logger.info("Analyzing failure modes")

    candidates: list[dict[str, Any]] = []

    for checker in [
        lambda: _check_authority_wall(serp_data, trends_data),
        lambda: _check_content_treadmill(serp_data, trends_data),
        lambda: _check_saturation_ceiling(serp_data, processed_signals),
        lambda: _check_demand_collapse(trends_data),
        lambda: _check_monopoly_lock(serp_data),
        lambda: _check_quality_bar_escalation(serp_data),
    ]:
        result = checker()
        if result:
            candidates.append(result)

    # Sort by probability descending, take top 3
    candidates.sort(key=lambda c: c["probability"], reverse=True)
    top_modes = candidates[:3]

    # Overall risk assessment
    if not top_modes:
        risk_level = "low"
    elif top_modes[0]["probability"] >= 0.7:
        risk_level = "high"
    elif top_modes[0]["probability"] >= 0.45:
        risk_level = "moderate"
    else:
        risk_level = "low"

    logger.info(
        f"Failure modes: {len(candidates)} detected, top {len(top_modes)} reported, "
        f"risk_level={risk_level}"
    )

    return {
        "failure_modes": top_modes,
        "total_detected": len(candidates),
        "risk_level": risk_level,
    }
