// Re-export Prisma-generated enums as the single source of truth
export { Domain, Difficulty, Regime, EffortLevel } from "./generated/prisma";

// Re-export Prisma model types for direct DB usage
export type {
  Keyword,
  DemandSignal,
  CompetitionSignal,
  TrendSignal,
  FeasibilityScore,
  Outcome,
  SeoPage,
} from "./generated/prisma";

// ─── Intent Interpretation Engine types ───

import type { Domain, Difficulty, Regime, EffortLevel } from "./generated/prisma";

export type ContentFrequency = "daily" | "weekly" | "biweekly" | "monthly";

/** Standardized parameters produced by intent parsing */
export interface AnalysisParams {
  domain: Domain;
  niche: string;
  effort_level: EffortLevel;
  budget: number;
  time_horizon: number;
  content_frequency: ContentFrequency;
}

/** Result of intent interpretation — returned to frontend for confirmation */
export interface IntentResult {
  params: AnalysisParams;
  parsed_from: "natural_language" | "structured_form";
  confidence: number;
  raw_query?: string;
  needs_clarification: boolean;
  clarification_prompt?: string;
}

// ─── API request/response types (built on top of Prisma enums) ───

export interface AnalyzeRequest {
  query?: string;
  niche?: string;
  domain?: Domain;
  effort_level?: EffortLevel;
  budget?: number;
  time_horizon?: number;
  content_frequency?: ContentFrequency;
}

export interface FeasibilityReport {
  keyword: string;
  slug: string;
  domain: Domain;
  feasibility_score: number;
  demand_score: number;
  competition_score: number;
  constraint_pressure: number;
  difficulty: Difficulty;
  time_range_min: number;
  time_range_max: number;
  regime: Regime;
  success_band: SuccessBand;
  constraints: Constraint[];
  conditions: string[];
  failure_modes: FailureMode[];
  concrete_requirements: ConcreteRequirement[];
  scored_at: string;
}

export interface SuccessBand {
  best_case: number;
  expected: number;
  worst_case: number;
}

export interface Constraint {
  type: string;
  severity: "high" | "medium" | "low";
  category: "hard" | "soft";
  description: string;
  implication: string;
}

export interface FailureMode {
  mode: string;
  probability: number;
  severity: "high" | "medium" | "low";
  description: string;
  mitigation: string[];
}

export interface ConcreteRequirement {
  area: string;
  target: string;
  rationale: string;
}

export interface ProcessingStatus {
  status: "processing" | "complete" | "failed";
  job_id: string;
  estimated_wait: string;
  poll_url: string;
}

// ─── Scenario Comparison types ───

export interface CompareRequest {
  scenarios: CompareScenarioInput[];
}

export interface CompareScenarioInput {
  label: string;
  niche: string;
  domain?: Domain;
  effort_level?: EffortLevel;
  budget?: number;
  time_horizon?: number;
}

export interface ComparisonTableRow {
  index: number;
  label: string;
  feasibility_score: number;
  difficulty: string;
  demand_score: number;
  competition_score: number;
  constraint_pressure: number;
  regime: string;
  regime_adjustment: number;
  time_range: string;
  success_band: SuccessBand;
  top_constraints: string[];
  conditions_count: number;
  composite_rank: number;
}

export interface CompareRecommendation {
  recommended_index: number | null;
  explanation: string;
}

export interface CompareTradeoff {
  index: number;
  label: string;
  advantages_over_recommended: string[];
}

export interface CompareResponse {
  scenario_count: number;
  tier: string;
  comparison_table: ComparisonTableRow[];
  recommendation: CompareRecommendation;
  tradeoffs: CompareTradeoff[];
}
