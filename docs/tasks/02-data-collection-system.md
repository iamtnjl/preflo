# 02 — Data Collection System

> PRD Section: 4.2 | Priority: Phase 1 | Location: `services/workers`

## Purpose

Gather real-time signals from multiple internet sources to build an accurate picture of demand, competition, and trend dynamics for any niche/keyword.

## Tasks

### 2.1 Reddit Scraper (Demand Signals)
- [ ] Set up PRAW (Reddit API wrapper) with credentials
- [ ] Search relevant subreddits per domain:
  - SEO: r/SEO, r/blogging, r/juststart
  - SaaS: r/SaaS, r/startups, r/SideProject
  - Ecommerce: r/ecommerce, r/dropshipping
- [ ] Extract post frequency (how often topic is discussed)
- [ ] Extract comment density (depth of engagement)
- [ ] Extract sentiment patterns (excited, frustrated, indifferent)
- [ ] Extract pain signal intensity (problems needing solutions)
- [ ] Extract temporal distribution (increasing or decreasing discussion)
- [ ] Enforce rate limit: 60 requests/min, 1s delay between requests
- [ ] Store raw data in S3, processed signals in PostgreSQL `demand_signals` table
- [ ] Schedule: every 6 hours for tracked keywords, on-demand for new queries

### 2.2 SERP Scraper (Competition Signals)
- [ ] Fetch and parse top 10 Google search results per keyword
- [ ] Extract domain names and estimated authority strength
- [ ] Extract page title optimization patterns
- [ ] Extract content length indicators
- [ ] Extract content freshness (publication and update dates)
- [ ] Detect SERP features (featured snippets, knowledge panels, PAA)
- [ ] Calculate diversity of unique domains in top 10
- [ ] Flag monopolistic SERP structures (< 5 unique domains in top 10)
- [ ] Enforce rate limit: 1 request per 8-12s (random delay)
- [ ] Rotate user agents
- [ ] Store in PostgreSQL `competition_signals` table
- [ ] Cache for 48 hours

### 2.3 Content Volume Estimation
- [ ] Estimate total indexed pages targeting similar keywords
- [ ] Use as proxy for content saturation

### 2.4 Authority Proxy Estimation
- [ ] Estimate domain strength via WHOIS lookups (domain age)
- [ ] Detect presence across multiple keywords in same niche
- [ ] Identify backlink indicators from SERP co-occurrence patterns
- [ ] Check brand recognition signals from search suggest data

### 2.5 Google Trends Collector
- [ ] Fetch 12-month interest-over-time data via pytrends
- [ ] Calculate trend slope (rising, stable, declining)
- [ ] Detect seasonal patterns (cyclical vs. consistent demand)
- [ ] Determine geographic concentration (global vs. regional)
- [ ] Identify related rising queries
- [ ] Enforce rate limit: 1 per 5s, max 50/hr
- [ ] Store in PostgreSQL `trend_signals` table
- [ ] Cache for 24 hours

### 2.6 Performance Signal Collector (Phase 2)
- [ ] Track IFE's own programmatic pages performance
- [ ] Curate case data from public sources (Reddit reports, Indie Hackers)
- [ ] Accept user-reported outcomes via feedback endpoint

### 2.7 GSC Integration (Phase 2 — Premium)
- [ ] OAuth integration for user GSC accounts
- [ ] Ingest real impressions, CTR, ranking positions
- [ ] Enhance scoring with ground-truth demand data

### 2.8 Signal Processor
- [ ] Normalize all scores to 0-100 scale
- [ ] Deduplicate keywords
- [ ] Calculate composite demand score
- [ ] Calculate composite competition score
- [ ] Validate data quality (min 2 of 3 sources must have data)

## Data Freshness Policy

| Signal Type | Cache Duration | Update Trigger |
|-------------|---------------|----------------|
| Reddit demand | 6 hours | New query or scheduled refresh |
| SERP competition | 48 hours | New query or cache expiry |
| Google Trends | 24 hours | Daily batch job |
| GSC data | 24 hours | Daily sync |
| Performance data | N/A | Continuous |

## Dependencies

- PostgreSQL database (task 16)
- SQS queue setup (task 18)
- Redis cache (task 18)

## Files to Create

- `services/workers/scrapers/reddit_scraper.py`
- `services/workers/scrapers/serp_scraper.py`
- `services/workers/scrapers/trends_collector.py`
- `services/workers/processors/signal_processor.py`
- `services/workers/processors/normalizer.py`
- `services/workers/config.py`
- `services/workers/run_workers.py`
