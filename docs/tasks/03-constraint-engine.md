# 03 — Constraint Engine

> PRD Section: 4.3 | Priority: Phase 1 | Location: `services/workers/scoring`

## Purpose

Model the hard and soft constraints that structurally limit what is achievable in any given niche. This is the product's primary intellectual moat.

## Tasks

### 3.1 Hard Constraints Implementation
- [ ] **SERP slot limit** — Model the 10 organic positions; difficulty increases exponentially as top slots are held by high-authority domains
- [ ] **Attention ceiling** — Model finite monthly searches and click-through distribution (even #1 only captures 25-35%)
- [ ] **Authority gap** — Calculate difference between estimated new site authority and average top-ranking domain authority
- [ ] **Index saturation** — Measure total content volume indexed for the topic; flag when beyond saturation threshold

### 3.2 Soft Constraints Implementation
- [ ] **Content quality threshold** — Determine minimum quality standard from top-ranking content (word count, depth)
- [ ] **Consistency requirement** — Determine required publication frequency for topical authority
- [ ] **Topical authority depth** — Estimate how many related topics must be covered (some niches need 50+ articles)
- [ ] **Backlink acquisition rate** — Estimate monthly quality backlinks needed to match competitors

### 3.3 Constraint Pressure Score
- [ ] Calculate composite Constraint Pressure Score (1.0–3.0)
- [ ] Weight hard constraints more heavily than soft constraints
- [ ] 1.0 = minimal structural resistance, 3.0 = severe structural barriers

### 3.4 Constraint Output
- [ ] Output `constraint_pressure` float
- [ ] Output `binding_constraints` array with type, severity, description, implication, category
- [ ] Output `bottlenecks` array identifying the most limiting factors

## Output Format

```json
{
  "constraint_pressure": 2.1,
  "binding_constraints": [
    {
      "type": "authority_dominance",
      "severity": "high",
      "description": "Top 3 results have very high domain authority",
      "implication": "Requires 12+ months of consistent backlink building",
      "category": "hard"
    }
  ],
  "bottlenecks": ["authority_gap", "content_volume"]
}
```

## Dependencies

- Competition signals from SERP scraper (task 02)
- Trend signals from Trends collector (task 02)

## Files to Create

- `services/workers/scoring/constraint_engine.py`
