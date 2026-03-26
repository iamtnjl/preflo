# 08 — Scenario Comparison System

> PRD Section: 4.8 | Priority: Phase 2 | Location: `apps/api` + `apps/web`

## Purpose

Enable side-by-side comparison of multiple strategic options. Transitions IFE from analytical tool to decision-support system.

## Tasks

### 8.1 Comparison Types
- [ ] **Niche vs. niche:** e.g., "AI tools blog" vs. "fitness blog"
- [ ] **Channel vs. channel:** SEO blog vs. YouTube vs. Newsletter (same niche)
- [ ] **Effort level comparison:** 10 hrs/week vs. 20 vs. 40
- [ ] **Budget comparison:** $0/mo vs. $100/mo vs. $500/mo
- [ ] **Timeline comparison:** 3 months vs. 6 vs. 12

### 8.2 Comparison Output
- [ ] Side-by-side table: score, difficulty, time range, constraints, conditions, regime
- [ ] Visual overlay of probability distributions on same chart
- [ ] Highlight recommended option with explanation
- [ ] Note what other options offer that the top choice does not

### 8.3 Comparison Limits
- [ ] Free tier: compare up to 2 scenarios
- [ ] Premium: compare up to 5 scenarios
- [ ] API provides raw data for bulk comparisons beyond 5

### 8.4 API Endpoint
- [ ] `POST /api/v1/compare` — accepts array of 2-5 scenario parameters
- [ ] Requires authentication
- [ ] Returns side-by-side comparison data

## Dependencies

- Scoring Engine (task 05)
- User Account System for tier enforcement (task 15)

## Files to Create

- `apps/api/src/routes/compare.ts`
- `apps/api/src/schemas/compare.ts`
- `apps/web/src/components/ComparisonTable.tsx`
- `apps/web/src/components/ComparisonChart.tsx`
