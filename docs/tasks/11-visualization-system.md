# 11 — Visualization System

> PRD Section: 4.11 | Priority: Phase 1 | Location: `apps/web`

## Purpose

Transform numerical outputs into intuitive, interactive visual representations. Critical for engagement, session duration, and shareability.

## Tasks

### 11.1 Visualization Components

| Component | Type | Library | Phase |
|-----------|------|---------|-------|
| Feasibility gauge | Radial gauge | Recharts / custom SVG | Phase 1 |
| Growth trajectory | Fan chart (line + area) | D3.js | Phase 2 |
| Probability distribution | Density plot | D3.js | Phase 2 |
| Constraint breakdown | Horizontal bar chart | Recharts | Phase 1 |
| Regime indicator | Status badge + trend arrow | Custom React | Phase 1 |
| Comparison overlay | Multi-line chart | Recharts | Phase 2 |
| Scenario sliders | Interactive sliders | Custom React | Phase 2 |
| Heatmap | Grid heatmap | D3.js | Phase 2 |

### 11.2 Phase 1 Components
- [ ] `FeasibilityGauge.tsx` — radial gauge showing 0-100 score with color zones, hover for breakdown
- [ ] `ConstraintList.tsx` — horizontal bar chart of constraint severity, click for details
- [ ] `RegimeBadge.tsx` — status badge with trend direction arrow, click for explanation

### 11.3 Phase 2 Components
- [ ] `GrowthChart.tsx` — fan chart with expected growth + best/worst bands
- [ ] `ProbabilityDistribution.tsx` — density plot with hover for percentile values
- [ ] `ComparisonOverlay.tsx` — multi-line chart with toggle scenarios
- [ ] `ScenarioSliders.tsx` — interactive sliders with real-time score recalculation
- [ ] `NicheHeatmap.tsx` — grid heatmap of sub-niche opportunities

### 11.4 Interactivity Requirements
- [ ] Responsive: render correctly on mobile (min 320px)
- [ ] Charts load within 1 second
- [ ] Animate at 60fps
- [ ] Interactive elements respond within 100ms
- [ ] Scenario sliders trigger real-time recalculation (no page reload)

### 11.5 Accessibility
- [ ] WCAG 2.1 Level AA compliance
- [ ] Accessible alternatives for charts (data tables, text descriptions)
- [ ] Sufficient contrast ratios
- [ ] Keyboard-navigable interactive elements
- [ ] Screen reader support for key metrics

## Dependencies

- Result Engine (task 10) for data
- Recharts + D3.js libraries

## Files to Create

- `apps/web/src/components/FeasibilityGauge.tsx`
- `apps/web/src/components/GrowthChart.tsx`
- `apps/web/src/components/ConstraintList.tsx`
- `apps/web/src/components/RegimeBadge.tsx`
- `apps/web/src/components/ProbabilityDistribution.tsx`
- `apps/web/src/components/ComparisonOverlay.tsx`
- `apps/web/src/components/ScenarioSliders.tsx`
