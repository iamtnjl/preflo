# 10 — Result Engine

> PRD Section: 4.10 | Priority: Phase 1 | Location: `apps/api` + `apps/web`

## Purpose

Package all analytical outputs into a clear, actionable Feasibility Report that users can understand, act on, share, and export.

## Tasks

### 10.1 Report Structure
- [ ] **Feasibility score + difficulty badge:** 0-100 with color-coded label (green/easy, amber/medium, red/hard, dark red/very hard)
- [ ] **Regime classification:** Lifecycle state with trend direction indicator
- [ ] **Success band:** Best case, expected, worst case with time horizons
- [ ] **Key constraints:** Top 3-5 binding constraints with severity and explanations
- [ ] **Required conditions:** What user must do for expected case (content volume, quality targets, consistency)
- [ ] **Failure risks:** Top 2-3 failure modes with probabilities and mitigations
- [ ] **Probability distribution:** Visual chart of possible outcomes (Phase 2)
- [ ] **Growth trajectory:** Fan chart with uncertainty bands (Phase 2)

### 10.2 Condition Explainer
- [ ] Translate abstract constraints into concrete requirements
- [ ] e.g., Instead of "authority gap is high" → "You need ~100+ published pages, 50 quality backlinks, and 6 months of weekly publishing"
- [ ] Calibrate conditions to specific niche and difficulty level

### 10.3 Export & Sharing (Phase 2)
- [ ] Export as PNG image (social sharing)
- [ ] Export as PDF document (professional/client use)
- [ ] Export as raw JSON (API users)
- [ ] Generate permanent shareable link (read-only, point-in-time snapshot)

## Dependencies

- Scoring Engine (task 05)
- Constraint Engine (task 03)
- Failure Mode Engine (task 09)
- Visualization System (task 11)

## Files to Create

- `apps/api/src/routes/result.ts`
- `apps/api/src/schemas/result.ts`
- `apps/web/src/components/FeasibilityReport.tsx`
- `apps/web/src/components/ConditionExplainer.tsx`
- `packages/shared/src/types.ts` — FeasibilityReport type
