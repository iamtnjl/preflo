# 12 — Self-Calibration System

> PRD Section: 4.12 | Priority: Phase 1 (logging), Phase 2 (auto-adjust) | Location: `services/workers` + `apps/api`

## Purpose

Continuously improve scoring accuracy by comparing predictions against actual outcomes. Core requirement from day one — not a nice-to-have.

## Tasks

### 12.1 Calibration Data Pipeline
- [ ] Log every feasibility score with complete input parameters, signal values, and scoring weights
- [ ] Store as prediction records in `feasibility_scores` table with `signal_versions`
- [ ] Create prediction-outcome pairs when users report outcomes

### 12.2 Accuracy Metrics
- [ ] **Directional accuracy:** Did difficulty classification match reality? Target: 75%+ after 100 outcomes
- [ ] **Band accuracy:** Did actual outcome fall within predicted success band? Target: 70%+
- [ ] **Calibration quality:** Does predicted probability match observed frequency? Target: within 10 percentage points

### 12.3 Weight Adjustment Process
- [ ] After every 50 outcome reports: generate calibration report
- [ ] Compare predicted vs. actual outcomes
- [ ] Identify which weights produce largest errors
- [ ] Suggest specific weight adjustments
- [ ] Phase 1: Manual review and approval only
- [ ] Phase 2 (after 500+ outcomes): Enable automated micro-adjustments (max 5% change per cycle)
- [ ] Maintain complete audit log of all weight changes

### 12.4 Feedback Collection
- [ ] `POST /api/v1/feedback` endpoint for outcome reports
- [ ] In-app prompts when returning users revisit previously analyzed keywords (Phase 2)
- [ ] Email follow-up prompts at 3, 6, 12 months after analysis (Phase 3)
- [ ] All feedback is optional

### 12.5 Validation Script
- [ ] Build `scripts/validate_scoring.py` to test against 50-keyword benchmark set
- [ ] Run validation before any weight changes
- [ ] Target 70%+ directional accuracy before launch

## Dependencies

- Scoring Engine (task 05)
- Database (task 16)
- Feedback API endpoint (task 17)

## Files to Create

- `apps/api/src/routes/feedback.ts`
- `apps/api/src/schemas/feedback.ts`
- `services/workers/scoring/calibration.py`
- `scripts/validate_scoring.py`
