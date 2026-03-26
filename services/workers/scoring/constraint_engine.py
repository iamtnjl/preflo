"""
Constraint Engine — Models hard and soft structural constraints for a niche.

Hard constraints (structural barriers):
  - SERP slot limit: 10 organic positions, exponential difficulty
  - Attention ceiling: finite searches + CTR distribution
  - Authority gap: new site vs. top-ranking domain authority
  - Index saturation: total content volume indexed for the topic

Soft constraints (effort requirements):
  - Content quality threshold: min word count/depth from top content
  - Consistency requirement: publication frequency for topical authority
  - Topical authority depth: number of related topics to cover
  - Backlink acquisition rate: monthly quality backlinks needed

Output:
  - constraint_pressure: float (1.0-3.0)
  - binding_constraints: list of Constraint objects
  - bottlenecks: list of the most limiting factor types
"""

import logging
from typing import Any

from scoring.models import Constraint
from processors.normalizer import clamp

logger = logging.getLogger(__name__)

# ─── Thresholds ───

# Authority: avg_domain_strength thresholds (0-1 scale)
AUTHORITY_HIGH = 0.7
AUTHORITY_MEDIUM = 0.45

# Index saturation thresholds
SATURATION_HIGH = 10_000_000    # 10M+ indexed pages = saturated
SATURATION_MEDIUM = 1_000_000   # 1M+ = moderate saturation

# SERP diversity thresholds
MONOPOLY_THRESHOLD = 5          # <5 unique domains = monopolistic

# Content depth estimates by niche difficulty
TOPICAL_DEPTH_HIGH = 50         # articles needed for very competitive niches
TOPICAL_DEPTH_MEDIUM = 20
TOPICAL_DEPTH_LOW = 8

# Backlink rate estimates (monthly, quality links)
BACKLINK_RATE_HIGH = 15
BACKLINK_RATE_MEDIUM = 5
BACKLINK_RATE_LOW = 1


# ─── Hard Constraint Evaluators ───

def _evaluate_serp_slot_limit(serp_data: dict[str, Any]) -> Constraint | None:
    """Model the 10 organic position limit — difficulty scales with top-slot authority."""
    top_results = serp_data.get("top_results", [])
    if not top_results:
        return None

    # Check authority of top 3 positions specifically
    top3 = top_results[:3]
    top3_authority = sum(r.get("authority_estimate", 0) for r in top3) / max(len(top3), 1)

    if top3_authority >= AUTHORITY_HIGH:
        return Constraint(
            type="serp_slot_limit",
            severity="high",
            category="hard",
            description=f"Top 3 positions held by high-authority domains (avg strength: {top3_authority:.0%})",
            implication="Extremely difficult to displace top-ranking pages; requires exceptional content and authority",
        )

    if top3_authority >= AUTHORITY_MEDIUM:
        return Constraint(
            type="serp_slot_limit",
            severity="medium",
            category="hard",
            description=f"Top 3 positions held by moderate-authority domains (avg strength: {top3_authority:.0%})",
            implication="Can compete for positions 4-10 within 6-12 months with consistent effort",
        )

    return None


def _evaluate_attention_ceiling(trends_data: dict[str, Any]) -> Constraint | None:
    """Model finite search volume — even #1 only captures 25-35% of clicks."""
    interest = trends_data.get("interest_data", [])
    if not interest:
        return None

    values = [pt["value"] for pt in interest]
    avg_interest = sum(values) / len(values)

    if avg_interest < 15:
        return Constraint(
            type="attention_ceiling",
            severity="high",
            category="hard",
            description=f"Very low search interest (avg Google Trends score: {avg_interest:.0f}/100)",
            implication="Limited organic demand; even ranking #1 may yield insufficient traffic to sustain a business",
        )

    if avg_interest < 35:
        return Constraint(
            type="attention_ceiling",
            severity="medium",
            category="hard",
            description=f"Moderate search interest (avg Google Trends score: {avg_interest:.0f}/100)",
            implication="Traffic ceiling exists; plan to target multiple related keywords to build cumulative volume",
        )

    return None


def _evaluate_authority_gap(serp_data: dict[str, Any]) -> Constraint | None:
    """Calculate gap between a new site (authority ~0.1) and top-ranking domains."""
    avg_strength = serp_data.get("avg_domain_strength")
    if avg_strength is None:
        return None

    NEW_SITE_AUTHORITY = 0.1
    gap = avg_strength - NEW_SITE_AUTHORITY

    if gap >= 0.6:
        return Constraint(
            type="authority_gap",
            severity="high",
            category="hard",
            description=f"Large authority gap: top results avg {avg_strength:.0%} vs new site ~{NEW_SITE_AUTHORITY:.0%}",
            implication="Requires 12+ months of consistent backlink building and topical authority development",
        )

    if gap >= 0.3:
        return Constraint(
            type="authority_gap",
            severity="medium",
            category="hard",
            description=f"Moderate authority gap: top results avg {avg_strength:.0%} vs new site ~{NEW_SITE_AUTHORITY:.0%}",
            implication="Achievable within 6-12 months with focused link building strategy",
        )

    return None


def _evaluate_index_saturation(serp_data: dict[str, Any]) -> Constraint | None:
    """Measure total indexed content volume for the topic."""
    indexed = serp_data.get("indexed_pages_estimate")
    if indexed is None:
        return None

    if indexed >= SATURATION_HIGH:
        return Constraint(
            type="index_saturation",
            severity="high",
            category="hard",
            description=f"Extremely saturated: ~{indexed:,} indexed pages targeting this topic",
            implication="New content will struggle to stand out; requires unique angle, superior depth, or fresh data",
        )

    if indexed >= SATURATION_MEDIUM:
        return Constraint(
            type="index_saturation",
            severity="medium",
            category="hard",
            description=f"Moderately saturated: ~{indexed:,} indexed pages targeting this topic",
            implication="Differentiation is important; long-tail keyword strategy recommended",
        )

    return None


# ─── Soft Constraint Evaluators ───

def _evaluate_content_quality(serp_data: dict[str, Any]) -> Constraint | None:
    """Determine minimum content quality from top-ranking content."""
    avg_length = serp_data.get("avg_content_length")
    if avg_length is None:
        return None

    # avg_content_length is snippet length proxy; real content is ~10x longer
    estimated_word_count = avg_length * 10

    if estimated_word_count > 3000:
        return Constraint(
            type="content_quality_threshold",
            severity="high",
            category="soft",
            description=f"Top-ranking content is long-form (estimated {estimated_word_count:,}+ words)",
            implication="Each piece of content requires significant research and writing investment",
        )

    if estimated_word_count > 1500:
        return Constraint(
            type="content_quality_threshold",
            severity="medium",
            category="soft",
            description=f"Top-ranking content is moderate length (estimated {estimated_word_count:,}+ words)",
            implication="Standard blog-length content should be competitive",
        )

    return None


def _evaluate_consistency_requirement(
    trends_data: dict[str, Any],
    serp_data: dict[str, Any],
) -> Constraint | None:
    """Determine required publication frequency for topical authority."""
    avg_strength = serp_data.get("avg_domain_strength") or 0
    trend_direction = trends_data.get("trend_direction")

    # Rising trends with strong competition need aggressive publishing
    if avg_strength >= AUTHORITY_MEDIUM and trend_direction == "rising":
        return Constraint(
            type="consistency_requirement",
            severity="high",
            category="soft",
            description="Competitive rising niche requires frequent publishing to establish authority",
            implication="Recommend 3-5 articles per week minimum for first 6 months",
        )

    if avg_strength >= AUTHORITY_MEDIUM:
        return Constraint(
            type="consistency_requirement",
            severity="medium",
            category="soft",
            description="Competitive niche requires regular publishing cadence",
            implication="Recommend 1-3 articles per week to build topical authority over 6-12 months",
        )

    return None


def _evaluate_topical_depth(serp_data: dict[str, Any]) -> Constraint | None:
    """Estimate how many related topics must be covered."""
    avg_strength = serp_data.get("avg_domain_strength") or 0
    is_monopolistic = serp_data.get("is_monopolistic", False)

    if avg_strength >= AUTHORITY_HIGH or is_monopolistic:
        return Constraint(
            type="topical_authority_depth",
            severity="high",
            category="soft",
            description=f"Need to cover {TOPICAL_DEPTH_HIGH}+ related topics to build sufficient topical authority",
            implication="Significant content planning required; consider building a topic cluster strategy",
        )

    if avg_strength >= AUTHORITY_MEDIUM:
        return Constraint(
            type="topical_authority_depth",
            severity="medium",
            category="soft",
            description=f"Need to cover {TOPICAL_DEPTH_MEDIUM}+ related topics for topical authority",
            implication="Build a content silo covering the main topic and supporting subtopics",
        )

    return Constraint(
        type="topical_authority_depth",
        severity="low",
        category="soft",
        description=f"Approximately {TOPICAL_DEPTH_LOW}+ articles needed for basic topical coverage",
        implication="Manageable content scope; focus on quality over quantity",
    )


def _evaluate_backlink_rate(serp_data: dict[str, Any]) -> Constraint | None:
    """Estimate monthly quality backlinks needed to match competitors."""
    avg_strength = serp_data.get("avg_domain_strength") or 0

    if avg_strength >= AUTHORITY_HIGH:
        return Constraint(
            type="backlink_acquisition_rate",
            severity="high",
            category="soft",
            description=f"Estimated {BACKLINK_RATE_HIGH}+ quality backlinks/month needed to compete",
            implication="Requires dedicated outreach, guest posting, or digital PR strategy",
        )

    if avg_strength >= AUTHORITY_MEDIUM:
        return Constraint(
            type="backlink_acquisition_rate",
            severity="medium",
            category="soft",
            description=f"Estimated {BACKLINK_RATE_MEDIUM}+ quality backlinks/month needed",
            implication="Regular outreach and relationship building recommended",
        )

    return Constraint(
        type="backlink_acquisition_rate",
        severity="low",
        category="soft",
        description=f"Estimated {BACKLINK_RATE_LOW}+ quality backlinks/month sufficient",
        implication="Minimal link building needed; focus on creating linkable content",
    )


# ─── Constraint Pressure Calculation ───

SEVERITY_WEIGHTS = {"high": 1.0, "medium": 0.5, "low": 0.15}
CATEGORY_MULTIPLIER = {"hard": 1.5, "soft": 1.0}


def _calculate_pressure(constraints: list[Constraint]) -> float:
    """
    Calculate composite constraint pressure (1.0–3.0).

    Hard constraints weighted 1.5x more than soft.
    """
    if not constraints:
        return 1.0

    total_weight = 0.0
    for c in constraints:
        severity_w = SEVERITY_WEIGHTS.get(c.severity, 0.5)
        category_m = CATEGORY_MULTIPLIER.get(c.category, 1.0)
        total_weight += severity_w * category_m

    # Normalize: assume max ~8 constraints at high severity = 12.0 raw weight
    # Map to 1.0-3.0 range
    pressure = 1.0 + (total_weight / 6.0) * 2.0
    return round(clamp(pressure, 1.0, 3.0), 2)


def _identify_bottlenecks(constraints: list[Constraint]) -> list[str]:
    """Identify the top limiting factors (high severity constraints)."""
    high = [c for c in constraints if c.severity == "high"]
    if high:
        return [c.type for c in high]

    medium = [c for c in constraints if c.severity == "medium"]
    if medium:
        return [c.type for c in medium[:2]]

    return []


# ─── Main Entry Point ───

def evaluate(
    serp_data: dict[str, Any],
    trends_data: dict[str, Any],
) -> dict[str, Any]:
    """
    Evaluate all hard and soft constraints for a keyword.

    Args:
        serp_data: Raw SERP scraper output
        trends_data: Raw Trends collector output

    Returns:
        constraint_pressure (1.0-3.0), binding_constraints, bottlenecks
    """
    logger.info("Evaluating constraints")

    constraints: list[Constraint] = []

    # Hard constraints
    for evaluator in [
        lambda: _evaluate_serp_slot_limit(serp_data),
        lambda: _evaluate_attention_ceiling(trends_data),
        lambda: _evaluate_authority_gap(serp_data),
        lambda: _evaluate_index_saturation(serp_data),
    ]:
        result = evaluator()
        if result:
            constraints.append(result)

    # Soft constraints
    for evaluator in [
        lambda: _evaluate_content_quality(serp_data),
        lambda: _evaluate_consistency_requirement(trends_data, serp_data),
        lambda: _evaluate_topical_depth(serp_data),
        lambda: _evaluate_backlink_rate(serp_data),
    ]:
        result = evaluator()
        if result:
            constraints.append(result)

    pressure = _calculate_pressure(constraints)
    bottlenecks = _identify_bottlenecks(constraints)

    logger.info(
        f"Constraint evaluation: pressure={pressure}, "
        f"{len(constraints)} constraints, bottlenecks={bottlenecks}"
    )

    return {
        "constraint_pressure": pressure,
        "binding_constraints": [c.to_dict() for c in constraints],
        "bottlenecks": bottlenecks,
    }
