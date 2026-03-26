# 05 — Scoring Engine

> PRD Section: 4.5 | Priority: Phase 1 | Location: `services/workers/scoring`

## Purpose

Combine all data signals, constraint analysis, and regime classification into a single feasibility score (0-100) and comprehensive result package.

## Tasks

### 5.1 Scoring Formula Pipeline
- [ ] **Step 1 — Demand Score (0-100):** Weighted average of:
  - Reddit frequency (weight 0.3)
  - Reddit engagement (weight 0.2)
  - Trend volume (weight 0.3)
  - Trend direction/slope (weight 0.2)
- [ ] **Step 2 — Competition Score (0-100):** Weighted average of:
  - SERP authority average (weight 0.4)
  - Indexed content volume (weight 0.3)
  - Content freshness (weight 0.15)
  - SERP domain diversity (weight 0.15)
- [ ] **Step 3 — Constraint Pressure:** Apply 1.0-3.0 multiplier from Constraint Engine
- [ ] **Step 4 — Raw Feasibility:** `demand_score / (competition_score * constraint_pressure)`, normalized to 0-100
- [ ] **Step 5 — Regime Adjustment:** Apply modifier (-25 to +30 points) from Regime Detection Engine
- [ ] **Step 6 — Final Score:** Clamp to 0-100, apply difficulty classification

### 5.2 Difficulty Classification
- [ ] 75-100 → Easy
- [ ] 50-74 → Medium
- [ ] 25-49 → Hard
- [ ] 0-24 → Very Hard

### 5.3 Time Range Estimation
- [ ] Estimate min/max months for initial traction (reaching page 1 for at least one keyword)
- [ ] Base on difficulty, regime dynamics, and historical performance data
- [ ] Use deliberately wide ranges to reflect genuine uncertainty

### 5.4 Success Band
- [ ] Calculate **Best case** (top 10-20% of outcomes)
- [ ] Calculate **Expected case** (median outcome)
- [ ] Calculate **Worst case** (bottom 10-20% of outcomes)

### 5.5 Weight Configuration
- [ ] Store all scoring weights in `services/workers/scoring/weights.py` (NEVER hardcode elsewhere)
- [ ] Make weights configurable for calibration system
- [ ] Validate initial weights against 50-keyword benchmark set
- [ ] Log all inputs/outputs for every scoring calculation

## Dependencies

- Demand signals (task 02)
- Competition signals (task 02)
- Constraint Engine (task 03)
- Regime Detection Engine (task 04)

## Files to Create

- `services/workers/scoring/scoring_engine.py`
- `services/workers/scoring/weights.py`
- `services/workers/scoring/models.py` — data classes for results
