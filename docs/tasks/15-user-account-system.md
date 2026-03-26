# 15 — User Account System

> PRD Section: 4.15 | Priority: Phase 2 | Location: `apps/api` + `apps/web`

## Purpose

Persistent user identity for saving analyses, tracking history, reporting outcomes, managing subscriptions, and connecting data sources.

## Tasks

### 15.1 Authentication
- [ ] Email/password registration via Supabase Auth
- [ ] OAuth login: Google, GitHub
- [ ] Anonymous usage for basic single-query analyses
- [ ] Auth required for: saving results, comparisons, feedback, premium features, GSC integration

### 15.2 User Dashboard
- [ ] Saved analyses with current scores and changes since last viewed
- [ ] Analysis history with trend tracking
- [ ] Outcome tracking (reported vs. predicted)
- [ ] Active comparisons
- [ ] Subscription status and usage limits
- [ ] Connected data sources

### 15.3 Data Privacy
- [ ] Users can delete accounts and all associated data
- [ ] GSC data fetched on-demand only, never stored permanently
- [ ] GDPR compliance

## Dependencies

- Supabase Auth setup
- Database `users` and `saved_analyses` tables (task 16)

## Files to Create

- `apps/api/src/routes/user.ts`
- `apps/web/src/app/dashboard/page.tsx`
- `apps/web/src/components/AuthProvider.tsx`
- `apps/web/src/components/SavedAnalyses.tsx`
