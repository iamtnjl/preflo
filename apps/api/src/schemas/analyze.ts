export const analyzeRequestSchema = {
  type: "object",
  properties: {
    query: { type: "string", description: "Search query or niche keyword" },
    niche: { type: "string", description: "Niche category" },
    domain: {
      type: "string",
      enum: ["SEO", "content", "ecommerce", "saas", "social"],
    },
    effort_level: { type: "string", enum: ["low", "medium", "high"] },
    budget: { type: "number", description: "Budget in USD" },
    time_horizon: { type: "number", description: "Time horizon in months" },
  },
} as const;

export const feasibilityReportSchema = {
  type: "object",
  required: [
    "keyword",
    "slug",
    "domain",
    "feasibility_score",
    "demand_score",
    "competition_score",
    "constraint_pressure",
    "difficulty",
    "time_range_min",
    "time_range_max",
    "regime",
    "success_band",
    "constraints",
    "conditions",
    "scored_at",
  ],
  properties: {
    keyword: { type: "string" },
    slug: { type: "string" },
    domain: {
      type: "string",
      enum: ["SEO", "content", "ecommerce", "saas", "social"],
    },
    feasibility_score: { type: "number" },
    demand_score: { type: "number" },
    competition_score: { type: "number" },
    constraint_pressure: { type: "number" },
    difficulty: {
      type: "string",
      enum: ["easy", "medium", "hard", "very_hard"],
    },
    time_range_min: { type: "number" },
    time_range_max: { type: "number" },
    regime: {
      type: "string",
      enum: ["emerging", "trending", "stable", "saturated", "declining"],
    },
    success_band: {
      type: "object",
      properties: {
        best_case: { type: "number" },
        expected: { type: "number" },
        worst_case: { type: "number" },
      },
      required: ["best_case", "expected", "worst_case"],
    },
    constraints: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: { type: "string" },
          severity: { type: "string", enum: ["high", "medium", "low"] },
          category: { type: "string", enum: ["hard", "soft"] },
          description: { type: "string" },
          implication: { type: "string" },
        },
        required: ["type", "severity", "category", "description", "implication"],
      },
    },
    conditions: { type: "array", items: { type: "string" } },
    scored_at: { type: "string", format: "date-time" },
  },
} as const;

export const processingStatusSchema = {
  type: "object",
  required: ["status", "job_id", "estimated_wait", "poll_url"],
  properties: {
    status: {
      type: "string",
      enum: ["processing", "complete", "failed"],
    },
    job_id: { type: "string" },
    estimated_wait: { type: "string" },
    poll_url: { type: "string" },
  },
} as const;

export const errorSchema = {
  type: "object",
  required: ["error", "message"],
  properties: {
    error: { type: "string" },
    message: { type: "string" },
  },
} as const;
