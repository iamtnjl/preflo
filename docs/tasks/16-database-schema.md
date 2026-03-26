# 16 — Database Schema & Data Architecture

> PRD Section: 5.3, 6 | Priority: Phase 1 | Location: `infra/`

## Purpose

PostgreSQL schema design and Redis cache structure for all IFE data.

## Tasks

### 16.1 PostgreSQL Tables
- [ ] `keywords` — canonical keyword registry (id, keyword, slug, domain, last_analyzed)
- [ ] `demand_signals` — Reddit/Trends/GSC raw data (keyword_id, source, post_count, sentiment, raw_data JSONB)
- [ ] `competition_signals` — SERP analysis data (keyword_id, top_results JSONB, avg_domain_strength, unique_domains_top10)
- [ ] `trend_signals` — Google Trends data (keyword_id, interest_data JSONB, slope, variance, related_queries)
- [ ] `feasibility_scores` — computed results (keyword_id, scores, difficulty, regime, constraints JSONB, signal_versions JSONB)
- [ ] `outcomes` — user-reported results (keyword_id, score_id, actual_result, months_elapsed)
- [ ] `seo_pages` — programmatic page metadata (keyword_id, page_type, slug, title, indexed)
- [ ] `users` — via Supabase (id, email, plan, created_at)
- [ ] `saved_analyses` — bookmarked reports (user_id, score_id, notes)

### 16.2 Indexes
- [ ] `idx_keywords_slug` ON keywords(slug)
- [ ] `idx_keywords_domain` ON keywords(domain)
- [ ] `idx_demand_keyword` ON demand_signals(keyword_id)
- [ ] `idx_demand_collected` ON demand_signals(collected_at)
- [ ] `idx_competition_keyword` ON competition_signals(keyword_id)
- [ ] `idx_trend_keyword` ON trend_signals(keyword_id)
- [ ] `idx_feasibility_keyword` ON feasibility_scores(keyword_id)
- [ ] `idx_feasibility_scored` ON feasibility_scores(scored_at)
- [ ] `idx_seo_pages_slug` ON seo_pages(slug)

### 16.3 Redis Key Structure
- [ ] `cache:result:{keyword_slug}` → feasibility result JSON (TTL: 24hrs)
- [ ] `cache:serp:{keyword_hash}` → SERP data JSON (TTL: 48hrs)
- [ ] `cache:trend:{keyword_hash}` → trend data JSON (TTL: 24hrs)
- [ ] `ratelimit:{ip}` → counter (TTL: 60 seconds)
- [ ] `queue:depth` → SQS approximate depth (TTL: 5min)

### 16.4 Migration
- [ ] Create initial migration `001_create_tables.sql`
- [ ] Follow numbered migration convention
- [ ] All queries use parameterized statements (NEVER string concatenation)

### 16.5 Data Quality Rules
- [ ] No signal older than 48 hours used in active scoring
- [ ] Minimum 2 of 3 signal sources must have data
- [ ] All scores normalized to 0-100 before calculations
- [ ] Every score traceable to source signals via signal_versions

## Dependencies

- RDS PostgreSQL instance (task 18)
- ElastiCache Redis instance (task 18)

## Files to Create

- `infra/setup-rds.sql` — full schema
- `apps/api/src/services/db.ts` — PostgreSQL operations
- `apps/api/src/services/cache.ts` — Redis operations
