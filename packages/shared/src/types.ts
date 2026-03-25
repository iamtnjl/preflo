export interface AnalyzeRequest { query?: string; niche?: string; domain?: Domain; effort_level?: EffortLevel; budget?: number; time_horizon?: number; }
export interface FeasibilityReport { keyword: string; slug: string; domain: Domain; feasibility_score: number; demand_score: number; competition_score: number; constraint_pressure: number; difficulty: Difficulty; time_range_min: number; time_range_max: number; regime: Regime; success_band: SuccessBand; constraints: Constraint[]; conditions: string[]; scored_at: string; }
export interface SuccessBand { best_case: number; expected: number; worst_case: number; }
export interface Constraint { type: string; severity: 'high' | 'medium' | 'low'; category: 'hard' | 'soft'; description: string; implication: string; }
export interface ProcessingStatus { status: 'processing' | 'complete' | 'failed'; job_id: string; estimated_wait: string; poll_url: string; }
export type Domain = 'SEO' | 'content' | 'ecommerce' | 'saas' | 'social';
export type Difficulty = 'easy' | 'medium' | 'hard' | 'very_hard';
export type Regime = 'emerging' | 'trending' | 'stable' | 'saturated' | 'declining';
export type EffortLevel = 'low' | 'medium' | 'high';
