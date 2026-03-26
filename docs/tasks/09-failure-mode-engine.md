# 09 — Failure Mode Engine

> PRD Section: 4.9 | Priority: Phase 1 | Location: `services/workers/scoring`

## Purpose

Identify and communicate the most likely reasons for failure based on constraint analysis. Transforms output from "here's your score" to "here's what you need to watch out for."

## Tasks

### 9.1 Failure Mode Catalog
- [ ] Implement the following failure modes with trigger patterns:

| Failure Mode | Trigger Pattern | Description |
|-------------|----------------|-------------|
| Authority wall | Authority gap > 60 points | Top sites too established to compete with |
| Content treadmill | Freshness decay < 60 days | Content outdated quickly, requires constant updates |
| Saturation ceiling | Index volume > 500K + competition > 80 | Too much content, even high-quality entries struggle |
| Demand collapse | Trend slope < -0.3 sustained | Interest declining structurally |
| Monopoly lock | < 3 unique domains in top 10 | Few dominant players control the SERP |
| Quality bar escalation | Avg content > 5000 words + high engagement | Extremely high quality standard to compete |

### 9.2 Failure Probability
- [ ] Estimate probability of each failure mode based on trigger severity
- [ ] Provide mitigation strategies for each failure mode
- [ ] e.g., authority wall → "Focus on long-tail keywords while building domain authority gradually"

### 9.3 Output Format
- [ ] Return top 2-3 most likely failure modes per analysis
- [ ] Include probability, description, and mitigation for each

## Dependencies

- Constraint Engine (task 03)
- Competition signals (task 02)

## Files to Create

- `services/workers/scoring/failure_modes.py`
