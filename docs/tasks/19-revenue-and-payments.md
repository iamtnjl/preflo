# 19 — Revenue Model & Payments

> PRD Section: 7 | Priority: Phase 3 | Location: `apps/api` + `apps/web`

## Purpose

Implement all revenue streams: AdSense, premium subscriptions, and API access.

## Tasks

### 19.1 AdSense Integration
- [ ] Place ads on programmatic SEO landing pages
- [ ] Place ads on feasibility report pages (between sections, sidebar)
- [ ] Place ads on comparison pages
- [ ] Target RPM: $3-5 (month 6), $5-10 (month 12)

### 19.2 Premium Subscription (Lemon Squeezy)
- [ ] Integrate Lemon Squeezy as merchant of record
- [ ] Implement three tiers:

| Feature | Free | Premium ($15/mo) | Pro ($30/mo) |
|---------|------|-----------------|-------------|
| Analyses/month | 10 | 100 | Unlimited |
| Comparisons | 2 | 5 | 5 |
| Monte Carlo | 1,000 | 5,000 | 10,000 |
| Saved analyses | 3 | 50 | Unlimited |
| Export | No | Yes | Yes |
| Historical data | Current | 3 months | 12 months |
| GSC integration | No | Yes | Yes |
| Custom params | No | Limited | Full |
| Priority processing | No | No | Yes |
| API access | No | No | 100 calls/day |

### 19.3 API Access Pricing
- [ ] Starter API: $49/mo, 500 calls, $0.05/extra
- [ ] Growth API: $149/mo, 2,000 calls, $0.04/extra
- [ ] Enterprise: Custom pricing

### 19.4 Usage Tracking
- [ ] Track analyses per user per month
- [ ] Enforce tier limits
- [ ] Usage analytics for billing

## Dependencies

- User Account System (task 15)
- Lemon Squeezy account setup

## Files to Create

- `apps/api/src/routes/subscription.ts`
- `apps/web/src/components/PricingTable.tsx`
- `apps/web/src/app/pricing/page.tsx`
