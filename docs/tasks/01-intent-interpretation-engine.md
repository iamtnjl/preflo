# 01 — Intent Interpretation Engine

> PRD Section: 4.1 | Priority: Phase 1 | Location: `apps/api` + `apps/web`

## Purpose

Convert any user input — natural language or structured form data — into a standardized set of simulation parameters for downstream processing.

## Tasks

### 1.1 Natural Language Parser
- [ ] Build keyword extraction from free-text queries (e.g., "start an AI tools blog")
- [ ] Extract `domain` from context clues: "blog" → SEO, "YouTube" → content, "store" → ecommerce
- [ ] Extract `niche` as the primary subject noun
- [ ] Extract `effort_level` from effort indicators: "side project" → low, "full-time" → high
- [ ] Extract `budget` from dollar amounts mentioned
- [ ] Extract `time_horizon` from time references: "6 months", "this year"
- [ ] Extract `content_frequency` from frequency mentions
- [ ] Apply defaults for missing parameters (domain=SEO, effort=medium, budget=0, time_horizon=6, frequency=weekly)
- [ ] Prompt user for clarification on ambiguous queries rather than guessing
- [ ] Phase 1: simple keyword extraction + phrase mapping (no LLM needed)

### 1.2 Structured Form Input
- [ ] Build form UI with dropdowns/sliders for each parameter
- [ ] Add tooltips explaining each parameter and its effect on analysis
- [ ] Validate all inputs and prevent invalid parameter combinations
- [ ] Map form fields to the same parameter object as natural language output

### 1.3 Output Format
- [ ] Produce standardized JSON output with all parameters
- [ ] Include `parsed_from` field (natural_language or structured_form)
- [ ] Include `confidence` score for NL parsing
- [ ] Include `raw_query` for NL inputs

## Acceptance Criteria

- NL parser correctly identifies domain and niche for 80%+ of common query patterns
- Ambiguous queries prompt clarification
- Structured form validates all inputs
- Response time for intent parsing < 200ms

## Parameters Reference

| Parameter | Type | Default |
|-----------|------|---------|
| domain | enum: SEO, content, ecommerce, saas, social | SEO |
| niche | string | Required |
| effort_level | enum: low, medium, high | medium |
| budget | integer (USD/month) | 0 |
| time_horizon | integer (months) | 6 |
| content_frequency | enum: daily, weekly, biweekly, monthly | weekly |

## Dependencies

- None (entry point of the system)

## Files to Create/Modify

- `apps/api/src/routes/analyze.ts` — parse input
- `apps/api/src/schemas/analyze.ts` — validation schemas
- `apps/web/src/components/AnalysisForm.tsx` — structured form UI
- `packages/shared/src/types.ts` — AnalysisParams type
