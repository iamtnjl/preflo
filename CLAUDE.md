# CLAUDE.md — Project Intelligence for Claude Code

## Project
Internet Feasibility Engine (IFE) — evaluates feasibility of online ventures using demand signals, competition density, and structural constraints.

## Architecture
- **Monorepo**: npm workspaces + Turborepo
- **apps/web**: Next.js 14 (TypeScript) → Vercel
- **apps/api**: Fastify (TypeScript) → AWS EC2
- **services/workers**: Python 3.11+ scrapers + scoring → AWS EC2/Lambda
- **packages/shared**: Shared TypeScript types (web + api import from here)

## Commands
```bash
npm run dev:web          # Frontend (port 3000)
npm run dev:api          # API (port 3001)
npm run workers:start    # Python workers (polls SQS)
npm run workers:test     # pytest
npm run validate         # 50-keyword scoring validation
npm run db:migrate       # Database migrations
```

## Data Flow
```
User → Next.js proxy → Fastify API → Redis cache check
  → [MISS] PostgreSQL check → [NO DATA] Push SQS
    → Python workers: reddit_scraper + serp_scraper + trends_collector
    → signal_processor normalizes → scoring_engine calculates
    → Result → PostgreSQL + Redis cache → Return to user
```

## Key Rules
- Shared types live in `packages/shared/src/types.ts` — never duplicate
- Scoring weights live in `services/workers/scoring/weights.py` — never hardcode elsewhere
- API checks Redis BEFORE PostgreSQL — always
- All DB queries use parameterized statements — NEVER string concatenation
- Every scoring calculation logs inputs/outputs for calibration
- All env vars in `.env` — NEVER hardcode credentials

## Rate Limits (CRITICAL)
- Reddit API: 60/min — 1s delay between requests
- Google SERP: 1 request per 8-12s (random delay)
- Google Trends: 1 per 5s, max 50/hr
- IFE API: 30/min per IP (free users)

## Scoring Formula
```
feasibility = demand_score / (competition_score × constraint_pressure)
+ regime_adjustment (-20 to +25)
→ clamped to 0-100
```
- Weights in: `services/workers/scoring/weights.py`
- Formula in: `services/workers/scoring/scoring_engine.py`

## File Conventions
- TypeScript: camelCase files, PascalCase components
- Python: snake_case everything
- Migrations: numbered (001_create_tables.sql)

## When Adding Features
1. Types in `packages/shared/src/types.ts`
2. API route in `apps/api/src/routes/`
3. Schema in `apps/api/src/schemas/`
4. Frontend component in `apps/web/src/components/`
5. If scoring-related, update weights.py and run validate
6. Write tests
