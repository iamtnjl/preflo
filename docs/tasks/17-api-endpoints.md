# 17 — API Endpoints

> PRD Section: 5.4 | Priority: Phase 1 | Location: `apps/api`

## Purpose

Fastify API server exposing all IFE functionality.

## Tasks

### 17.1 Phase 1 Endpoints

| Method | Endpoint | Purpose | Auth |
|--------|----------|---------|------|
| POST | `/api/v1/analyze` | Submit feasibility analysis query | No (rate limited) |
| GET | `/api/v1/result/:slug` | Retrieve feasibility report by slug | No |
| GET | `/api/v1/niches` | List analyzed niches with summary scores | No |
| GET | `/api/v1/niches/:domain` | List niches filtered by domain | No |
| POST | `/api/v1/feedback` | Submit actual outcome data | Yes |
| GET | `/api/v1/health` | System health check | No |
| POST | `/api/v1/scrape/trigger` | Manually trigger scraping (internal) | API key |

### 17.2 Phase 2 Endpoints

| Method | Endpoint | Purpose | Auth |
|--------|----------|---------|------|
| POST | `/api/v1/compare` | Compare 2-5 scenarios | Yes (free: 2, premium: 5) |
| POST | `/api/v1/simulate` | Run Monte Carlo simulation | Yes (premium only) |
| GET | `/api/v1/user/analyses` | Get saved analyses | Yes |
| POST | `/api/v1/user/analyses/:id/save` | Save analysis to account | Yes |
| GET | `/api/v1/export/:slug` | Export report as PDF/JSON | Yes (premium only) |

### 17.3 API Implementation
- [ ] Fastify schema validation on all endpoints
- [ ] Redis-based rate limiting (30 req/min per IP for free users)
- [ ] Cache check flow: Redis → PostgreSQL → SQS (if no fresh data)
- [ ] Return `{ status: "processing" }` for new keywords (first query triggers scraping)
- [ ] Parameterized queries only (no SQL string concatenation)

### 17.4 Request Flow (Analyze)
1. Parse input (NL or structured)
2. Check Redis cache → HIT: return immediately
3. Check PostgreSQL for fresh data (< 48 hours)
4. FRESH: run scoring → cache → return
5. NO FRESH DATA: push SQS messages → return "processing" status
6. Workers process → store results → cache in Redis

## Dependencies

- Database (task 16)
- Scoring Engine (task 05) — called from workers
- SQS queue (task 18)

## Files to Create

- `apps/api/src/server.ts` — Fastify server setup
- `apps/api/src/routes/analyze.ts`
- `apps/api/src/routes/result.ts`
- `apps/api/src/routes/health.ts`
- `apps/api/src/routes/feedback.ts`
- `apps/api/src/routes/niches.ts`
- `apps/api/src/services/queue.ts` — SQS operations
- `apps/api/src/schemas/analyze.ts`
- `apps/api/src/schemas/result.ts`
