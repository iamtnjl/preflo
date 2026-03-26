export const compareRequestSchema = {
  type: "object",
  required: ["scenarios"],
  properties: {
    scenarios: {
      type: "array",
      minItems: 2,
      maxItems: 5,
      items: {
        type: "object",
        required: ["label", "niche"],
        properties: {
          label: { type: "string" },
          niche: { type: "string" },
          domain: {
            type: "string",
            enum: ["SEO", "content", "ecommerce", "saas", "social"],
          },
          effort_level: { type: "string", enum: ["low", "medium", "high"] },
          budget: { type: "number", minimum: 0 },
          time_horizon: { type: "number", minimum: 1, maximum: 36 },
        },
      },
    },
  },
} as const;

const comparisonRowSchema = {
  type: "object",
  properties: {
    index: { type: "number" },
    label: { type: "string" },
    feasibility_score: { type: "number" },
    difficulty: { type: "string" },
    demand_score: { type: "number" },
    competition_score: { type: "number" },
    constraint_pressure: { type: "number" },
    regime: { type: "string" },
    regime_adjustment: { type: "number" },
    time_range: { type: "string" },
    success_band: {
      type: "object",
      properties: {
        best_case: { type: "number" },
        expected: { type: "number" },
        worst_case: { type: "number" },
      },
    },
    top_constraints: { type: "array", items: { type: "string" } },
    conditions_count: { type: "number" },
    composite_rank: { type: "number" },
  },
} as const;

export const compareResponseSchema = {
  type: "object",
  required: ["scenario_count", "tier", "comparison_table", "recommendation", "tradeoffs"],
  properties: {
    scenario_count: { type: "number" },
    tier: { type: "string" },
    comparison_table: { type: "array", items: comparisonRowSchema },
    recommendation: {
      type: "object",
      properties: {
        recommended_index: { type: ["number", "null"] },
        explanation: { type: "string" },
      },
    },
    tradeoffs: {
      type: "array",
      items: {
        type: "object",
        properties: {
          index: { type: "number" },
          label: { type: "string" },
          advantages_over_recommended: { type: "array", items: { type: "string" } },
        },
      },
    },
  },
} as const;
