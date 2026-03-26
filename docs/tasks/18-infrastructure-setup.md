# 18 — AWS Infrastructure & Deployment

> PRD Section: 5.1, 5.2, System Design | Priority: Phase 1 | Location: `infra/`

## Purpose

Set up all AWS free tier infrastructure and deployment pipeline.

## Tasks

### 18.1 VPC & Network
- [ ] Create VPC (10.0.0.0/16)
- [ ] Public subnet (10.0.1.0/24) for EC2
- [ ] Private subnet (10.0.2.0/24) for RDS + ElastiCache
- [ ] Security groups:
  - EC2: allow 443, 80 inbound
  - RDS: allow 5432 from EC2 SG only
  - ElastiCache: allow 6379 from EC2 SG only

### 18.2 EC2 Setup (Single t2.micro — Phase 1)
- [ ] Amazon Linux 2023, 30GB gp3 storage
- [ ] Install Node.js 20+ (for Fastify API)
- [ ] Install Python 3.11+ (for workers)
- [ ] Install PM2 for process management
- [ ] Elastic IP (free with running instance)
- [ ] Caddy as reverse proxy (auto Let's Encrypt SSL)
- [ ] Workers run via cron every 6 hours

### 18.3 RDS PostgreSQL
- [ ] Engine: PostgreSQL 15
- [ ] Instance: db.t3.micro (free tier)
- [ ] Storage: 20GB gp2
- [ ] No Multi-AZ (free tier)
- [ ] 7-day automated backup
- [ ] No public access

### 18.4 ElastiCache Redis
- [ ] Node type: cache.t3.micro (free tier)
- [ ] Engine: Redis 7
- [ ] Single node, no Multi-AZ

### 18.5 SQS Queues
- [ ] `ife-scrape-jobs` — standard queue, visibility timeout 300s
- [ ] `ife-scrape-jobs-dlq` — dead letter queue, max receives 3

### 18.6 S3 Bucket
- [ ] `ife-raw-data/` with folders: reddit/, serp/, trends/, exports/

### 18.7 Deployment Pipeline
- [ ] **Frontend:** GitHub push to main → Vercel auto-deploys
- [ ] **Backend Phase 1:** SSH → git pull → pm2 restart
- [ ] **Backend Phase 2:** GitHub Actions workflow → SSH deploy → git pull → npm install → pm2 restart

### 18.8 Domain & SSL
- [ ] Domain registration ($10-15/year)
- [ ] Vercel: auto SSL for frontend
- [ ] EC2: Caddy reverse proxy with auto Let's Encrypt

### 18.9 Environment Variables
- [ ] Create `.env.example` with all required vars
- [ ] RDS credentials, Redis endpoint, SQS URLs, Reddit API keys, API keys
- [ ] IAM role on EC2 for SQS and S3 access (no hardcoded AWS credentials)

## Free Tier Limits to Monitor

| Service | Free Tier Limit | Alert Threshold |
|---------|----------------|----------------|
| EC2 | 750 hrs/month | N/A (single instance) |
| RDS | 750 hrs, 20GB | 16GB storage |
| ElastiCache | 750 hrs | Evictions occurring |
| SQS | 1M requests/month | 800K requests |
| S3 | 5GB | 4GB |

## Files to Create

- `infra/setup-ec2.sh`
- `infra/setup-rds.sql`
- `infra/cloudwatch-alarms.json`
- `.github/workflows/deploy.yml` (Phase 2)
- `.env.example`
