# 14 — Domain Engines

> PRD Section: 4.14 | Priority: Phase 2 | Location: `services/workers/scoring`

## Purpose

Specialized feasibility analysis for different types of online ventures. Each extends the core scoring framework with domain-specific signals, constraints, and output metrics.

## Tasks

### 14.1 SEO Engine
- [ ] Keyword difficulty proxies
- [ ] SERP feature analysis
- [ ] Content gap identification
- [ ] Backlink requirement estimation
- [ ] Output: time to page 1, required content volume, keyword clustering recommendations

### 14.2 Content Engine
- [ ] Platform-specific competition metrics (YouTube, blogs, newsletters, podcasts)
- [ ] Content format preferences per niche
- [ ] Audience engagement patterns
- [ ] Creator supply/demand ratios
- [ ] Output: subscriber growth curve, content production requirements, platform strategy

### 14.3 Monetization Engine
- [ ] RPM estimates by niche
- [ ] Conversion rate benchmarks
- [ ] Affiliate program availability
- [ ] Sponsorship rate ranges
- [ ] Product-market fit indicators
- [ ] Output: monthly revenue range at traffic levels, optimal monetization strategy, revenue timeline

### 14.4 Startup Engine
- [ ] Market size estimation
- [ ] Competitive product landscape
- [ ] Pricing sensitivity analysis
- [ ] Feature comparison matrices
- [ ] Technology barrier assessment
- [ ] Output: time to first revenue, CAC estimates, market entry strategy

## Dependencies

- Core Scoring Engine (task 05)
- Data Collection System (task 02)

## Files to Create

- `services/workers/scoring/engines/seo_engine.py`
- `services/workers/scoring/engines/content_engine.py`
- `services/workers/scoring/engines/monetization_engine.py`
- `services/workers/scoring/engines/startup_engine.py`
