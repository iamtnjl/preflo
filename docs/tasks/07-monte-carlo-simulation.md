# 07 — Monte Carlo Simulation Engine

> PRD Section: 4.7 | Priority: Phase 2 | Location: `services/workers/scoring`

## Purpose

Run thousands of simulated scenarios to generate statistically robust outcome distributions. Foundation for premium-tier features.

## Tasks

### 7.1 Simulation Methodology
- [ ] Run 1,000-10,000 simulated scenarios per analysis
- [ ] Randomly vary parameters within realistic bounds per run:

| Parameter | Variation Model | Range |
|-----------|----------------|-------|
| Competition intensity | Normal distribution | ±20% of current |
| Demand growth | Trend slope + noise | ±15% of trend |
| Content quality | Mapped from effort | Low: 30-50, Med: 45-70, High: 65-90 |
| Algorithm volatility | Binary event | 5% chance/month |
| Backlink acquisition | Poisson distribution | Based on effort + budget |
| Competitor entry rate | Poisson distribution | Based on regime + trend |

### 7.2 Trajectory Generation
- [ ] Produce month-by-month traffic growth per simulation
- [ ] Produce ranking progression per simulation
- [ ] Produce revenue potential over time horizon

### 7.3 Output Aggregation
- [ ] Median trajectory (50th percentile)
- [ ] Optimistic trajectory (90th percentile)
- [ ] Pessimistic trajectory (10th percentile)
- [ ] Success probability (% of scenarios achieving goal)
- [ ] Time-to-traction distribution (histogram)
- [ ] Visualize as fan charts

### 7.4 Tier-Based Limits
- [ ] Free: 1,000 runs, basic distribution, 3 output metrics
- [ ] Premium ($15/mo): 5,000 runs, full distribution, sensitivity, export
- [ ] Enterprise ($30/mo): 10,000 runs, custom parameters, API, white-label

## Dependencies

- Scoring Engine (task 05)
- Probabilistic Modeling (task 06)

## Files to Create

- `services/workers/scoring/monte_carlo.py`
