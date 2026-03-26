# 04 — Regime Detection Engine

> PRD Section: 4.4 | Priority: Phase 1 | Location: `services/workers/scoring`

## Purpose

Classify the current state of any niche into one of five distinct regimes that fundamentally change the feasibility calculation and strategic advice.

## Tasks

### 4.1 Regime Classification
- [ ] Implement decision matrix combining trend slope, competition density, and demand stability
- [ ] Classify into five regimes:

| Regime | Demand Trend | Competition | Score Impact |
|--------|-------------|-------------|-------------|
| Emerging | Rising rapidly | Low | +20 to +30 |
| Trending | Rising | Building | +10 to +20 |
| Stable | Flat | Moderate | Neutral |
| Saturated | Flat/slow growth | High | -10 to -20 |
| Declining | Falling | Varies | -15 to -25 |

### 4.2 Detection Logic
- [ ] Use trend slope from Google Trends data
- [ ] Use competition density from SERP analysis
- [ ] Use demand stability (variance in search interest over 12-month window)
- [ ] Deterministic classification for clear cases
- [ ] Probabilistic classification for border cases (report two most likely regimes with confidence %)

### 4.3 Regime Output
- [ ] Output `primary_regime` with `confidence`
- [ ] Output `secondary_regime` with `secondary_confidence` for border cases
- [ ] Output `volatility` level
- [ ] Output `trend_slope` value
- [ ] Output `entry_difficulty` assessment

## Detection Thresholds

```python
if trend_slope > 0.3 and competition < 40:
    return "emerging"
elif trend_slope > 0.1 and competition >= 40:
    return "trending"
elif trend_slope < -0.1:
    return "declining"
elif competition > 70 and demand > 50:
    return "saturated"
else:
    return "stable"
```

## Dependencies

- Trend signals (task 02)
- Competition signals (task 02)

## Files to Create

- `services/workers/scoring/regime_detector.py`
