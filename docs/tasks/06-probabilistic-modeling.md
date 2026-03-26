# 06 — Probabilistic Modeling Layer

> PRD Section: 4.6 | Priority: Phase 2 | Location: `services/workers/scoring`

## Purpose

Generate probability distributions instead of single-point scores, representing the full range of possible outcomes. Transforms IFE from a scoring tool into a true feasibility modeling system.

## Tasks

### 6.1 Distribution Generation
- [ ] Generate probability distribution across outcomes for each analysis
- [ ] Narrow distribution for highly predictable niches
- [ ] Wide distribution for volatile niches
- [ ] Visualize as bell curve / probability density function

### 6.2 Uncertainty Quantification
- [ ] Calculate 50th percentile (median expected outcome)
- [ ] Calculate 25th-75th percentile band (likely outcome range)
- [ ] Calculate 10th-90th percentile band (extended possibility range)
- [ ] Widen bands when less data is available or niche is volatile
- [ ] Explicitly communicate uncertainty levels to user

### 6.3 Factor Sensitivity Analysis
- [ ] Identify which input factors have the most influence on outcome
- [ ] Present as ranked list with relative impact scores
- [ ] Help users prioritize efforts (e.g., "content quality has 3x more impact than frequency")

## Dependencies

- Scoring Engine (task 05)
- Sufficient historical data for distribution modeling

## Files to Create

- `services/workers/scoring/probabilistic_layer.py`
