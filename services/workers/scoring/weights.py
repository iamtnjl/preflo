WEIGHTS: dict[str, dict[str, float]] = {
    "demand": {"reddit_frequency": 0.3, "reddit_engagement": 0.2, "trend_volume": 0.3, "trend_direction": 0.2},
    "competition": {"serp_authority": 0.4, "content_volume": 0.3, "content_freshness": 0.15, "serp_diversity": 0.15},
}
WEIGHT_VERSION = "1.0.0"
