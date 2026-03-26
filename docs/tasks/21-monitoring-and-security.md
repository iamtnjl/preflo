# 21 — Monitoring, Security & Non-Functional Requirements

> PRD Section: 12 | Priority: Phase 1 | Location: `infra/` + `apps/api`

## Purpose

Implement monitoring, security, performance, reliability, and accessibility requirements.

## Tasks

### 21.1 Performance Requirements
- [ ] Cache hit response time < 100ms
- [ ] Fresh analysis response time < 3 minutes
- [ ] SSR page load time < 2 seconds
- [ ] Chart render time < 1 second
- [ ] Support 100 simultaneous users on free tier
- [ ] API throughput: 30 requests/second at peak

### 21.2 Monitoring (CloudWatch Free Tier)
- [ ] EC2 CPU utilization (alert if >80% sustained)
- [ ] RDS connections (alert if >80 of 66 max)
- [ ] RDS storage (alert if >16GB of 20GB)
- [ ] SQS queue depth (alert if >100 messages)
- [ ] SQS dead letter queue (alert if >0 messages)
- [ ] Set up UptimeRobot (free) to ping `/api/v1/health` every 5 minutes

### 21.3 Application Logging
- [ ] PM2 manages API logs with rotation
- [ ] Python workers log to `/var/log/ife-workers.log` with logrotate
- [ ] Log every scoring calculation with input/output for calibration
- [ ] Log every scraping failure with error type

### 21.4 Security
- [ ] **Input validation:** Fastify schema validation on all endpoints
- [ ] **SQL injection prevention:** Parameterized queries only (NEVER string concatenation)
- [ ] **Rate limiting:** Redis-based, 30 req/min per IP for free users
- [ ] **Authentication:** Supabase Auth with JWT for protected endpoints (Phase 2)
- [ ] **Data encryption:** HTTPS (TLS 1.3) for all traffic, RDS encryption at rest
- [ ] **Network isolation:** RDS and ElastiCache in private subnet
- [ ] **Credential management:** Environment variables, IAM roles for AWS (no hardcoded secrets)

### 21.5 Reliability
- [ ] 99.5% monthly uptime target
- [ ] PostgreSQL automated backups (7-day retention)
- [ ] PM2 auto-restart on crash
- [ ] SQS dead-letter queue for failed jobs
- [ ] Graceful degradation: return partial results with confidence flag if one source unavailable

### 21.6 Accessibility
- [ ] WCAG 2.1 Level AA compliance
- [ ] Chart accessible alternatives (data tables, text descriptions)
- [ ] Sufficient contrast ratios
- [ ] Keyboard-navigable interactive elements
- [ ] Screen reader support for results and key metrics

## Dependencies

- Infrastructure setup (task 18)

## Files to Create

- `infra/cloudwatch-alarms.json`
- `apps/api/src/middleware/rateLimit.ts`
- `apps/api/src/middleware/validation.ts`
