# 13 — Programmatic SEO Page System

> PRD Section: 4.13 | Priority: Phase 2 | Location: `apps/web`

## Purpose

Auto-generate thousands of landing pages targeting "uncertainty queries" — primary organic traffic acquisition channel.

## Tasks

### 13.1 Page Templates

| Template | URL Pattern | Target Query | Content |
|----------|-----------|-------------|---------|
| Worth it? | `/is-[niche]-worth-it` | "is [niche] worth it 2026" | Score + constraints + conditions + verdict |
| How hard? | `/how-hard-is-[niche]` | "how hard is [niche]" | Difficulty + constraints + timeline + comparison |
| Can succeed? | `/can-you-succeed-in-[niche]` | "can I succeed in [niche]" | Probability + conditions + failure risks |
| Saturated? | `/is-[niche]-saturated` | "is [niche] saturated" | Regime + competition + trend + alternatives |
| Future of | `/future-of-[niche]` | "future of [niche]" | Trend + sub-niches + trajectory + forecast |
| Comparison | `/[niche-a]-vs-[niche-b]` | "[niche a] vs [niche b]" | Side-by-side comparison + verdict |

### 13.2 Page Generation
- [ ] Generate unique data-driven content per page (not keyword-swapped templates)
- [ ] Use actual feasibility data: real constraints, real trend charts, real scores
- [ ] Server-side render for SEO
- [ ] Add proper meta tags (title, description, OG tags)
- [ ] Add structured data (FAQ schema, HowTo schema where applicable)
- [ ] Internal links to related niche analyses

### 13.3 Page Management
- [ ] Maintain keyword universe (curated list of 500-5000 niche terms)
- [ ] Generate pages with ISR (Incremental Static Regeneration)
- [ ] Revalidate every 24 hours with fresh data
- [ ] Auto-generate and submit XML sitemaps
- [ ] Monitor indexing status via GSC
- [ ] Quality gate: hold pages with insufficient data

### 13.4 Internal Linking
- [ ] Link to similar niches (by domain)
- [ ] Link to parent/child niche relationships
- [ ] Link to comparison pages between competing niches
- [ ] Algorithmically generate links based on niche similarity and topical clustering

## Dependencies

- Scoring Engine validated (task 05)
- Result Engine (task 10)
- Database with keyword data (task 16)

## Files to Create

- `apps/web/src/app/is-[niche]-worth-it/page.tsx`
- `apps/web/src/app/how-hard-is-[niche]/page.tsx`
- `apps/web/src/app/can-you-succeed-in-[niche]/page.tsx`
- `apps/web/src/app/is-[niche]-saturated/page.tsx`
- `apps/web/src/app/future-of-[niche]/page.tsx`
- `apps/web/src/app/[niche-a]-vs-[niche-b]/page.tsx`
- `apps/web/src/app/sitemap.ts`
- `scripts/seed_data.py` — initial keyword seeding
