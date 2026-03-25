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

// ─── API request/response types (built on top of Prisma enums) ───

import type { Domain, Difficulty, Regime, EffortLevel } from "./generated/prisma";

export interface AnalyzeRequest {
  query?: string;
  niche?: string;
  domain?: Domain;
  effort_level?: EffortLevel;
  budget?: number;
  time_horizon?: number;
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

export interface ProcessingStatus {
  status: "processing" | "complete" | "failed";
  job_id: string;
  estimated_wait: string;
  poll_url: string;
}
