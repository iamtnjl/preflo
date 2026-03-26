import type { FastifyInstance } from "fastify";
import { compareRequestSchema, compareResponseSchema } from "../schemas/compare.js";
import { errorSchema } from "../schemas/analyze.js";
import type { CompareRequest } from "@preflo/shared";
import { prisma } from "../services/database.js";

export async function compareRoutes(app: FastifyInstance) {
  // ── GET /compare?slugs=slug1,slug2 — Compare existing scored keywords ──
  app.get(
    "/compare",
    {
      schema: {
        tags: ["Comparison"],
        description: "Compare feasibility of multiple already-scored keywords by slug",
        querystring: {
          type: "object",
          required: ["slugs"],
          properties: {
            slugs: {
              type: "string",
              description: "Comma-separated list of keyword slugs (2-5)",
            },
          },
        },
        response: {
          200: compareResponseSchema,
          400: errorSchema,
        },
      },
    },
    async (request, reply) => {
      const { slugs: slugsRaw } = request.query as { slugs: string };
      const slugs = slugsRaw.split(",").map((s) => s.trim()).filter(Boolean);

      if (slugs.length < 2) {
        reply.status(400);
        return { error: "invalid_input", message: "Provide at least 2 comma-separated slugs." };
      }

      if (slugs.length > 5) {
        reply.status(400);
        return { error: "too_many_slugs", message: "Maximum 5 slugs allowed for comparison." };
      }

      // Fetch latest feasibility score for each slug
      const scenarios = [];
      for (const slug of slugs) {
        const keyword = await prisma.keyword.findUnique({
          where: { slug },
          include: {
            feasibilityScores: {
              orderBy: { scoredAt: "desc" },
              take: 1,
            },
          },
        });

        if (!keyword || keyword.feasibilityScores.length === 0) {
          reply.status(400);
          return {
            error: "not_found",
            message: `No scored results found for slug '${slug}'. Run an analysis first.`,
          };
        }

        const score = keyword.feasibilityScores[0];
        const constraints = (score.constraints as Record<string, unknown>[] | null) ?? [];
        const conditions = (score.conditions as string[] | null) ?? [];
        const successBand = (score.successBand as Record<string, number> | null) ?? {
          best_case: 0,
          expected: 0,
          worst_case: 0,
        };

        scenarios.push({
          label: keyword.keyword,
          feasibility_score: score.feasibilityScore,
          demand_score: score.demandScore,
          competition_score: score.competitionScore,
          constraint_pressure: score.constraintPressure,
          difficulty: score.difficulty,
          regime: score.regime ?? "stable",
          regime_adjustment: 0,
          time_range_min: score.timeRangeMin ?? 6,
          time_range_max: score.timeRangeMax ?? 12,
          success_band: successBand,
          constraints,
          conditions,
        });
      }

      // Run comparison logic
      const result = runComparison(scenarios);
      return result;
    }
  );

  // ── POST /compare — Compare hypothetical scenarios ──
  app.post(
    "/compare",
    {
      schema: {
        tags: ["Comparison"],
        description: "Compare multiple hypothetical scenarios side-by-side",
        body: compareRequestSchema,
        response: {
          200: compareResponseSchema,
          400: errorSchema,
        },
      },
    },
    async (request, reply) => {
      const { scenarios: inputs } = request.body as CompareRequest;

      if (inputs.length < 2) {
        reply.status(400);
        return { error: "invalid_input", message: "Provide at least 2 scenarios." };
      }

      // For each scenario, check if we have a scored result in DB
      const scenarios = [];
      const missing: string[] = [];

      for (const input of inputs) {
        const slug = input.niche.toLowerCase().trim().replace(/\s+/g, "-");
        const keyword = await prisma.keyword.findUnique({
          where: { slug },
          include: {
            feasibilityScores: {
              orderBy: { scoredAt: "desc" },
              take: 1,
            },
          },
        });

        if (!keyword || keyword.feasibilityScores.length === 0) {
          missing.push(input.niche);
          continue;
        }

        const score = keyword.feasibilityScores[0];
        const constraints = (score.constraints as Record<string, unknown>[] | null) ?? [];
        const conditions = (score.conditions as string[] | null) ?? [];
        const successBand = (score.successBand as Record<string, number> | null) ?? {
          best_case: 0,
          expected: 0,
          worst_case: 0,
        };

        scenarios.push({
          label: input.label,
          feasibility_score: score.feasibilityScore,
          demand_score: score.demandScore,
          competition_score: score.competitionScore,
          constraint_pressure: score.constraintPressure,
          difficulty: score.difficulty,
          regime: score.regime ?? "stable",
          regime_adjustment: 0,
          time_range_min: score.timeRangeMin ?? 6,
          time_range_max: score.timeRangeMax ?? 12,
          success_band: successBand,
          constraints,
          conditions,
        });
      }

      if (missing.length > 0) {
        reply.status(400);
        return {
          error: "missing_scores",
          message: `The following niches have not been analyzed yet: ${missing.join(", ")}. Run an analysis for each first.`,
        };
      }

      if (scenarios.length < 2) {
        reply.status(400);
        return { error: "insufficient_data", message: "Need at least 2 scored scenarios to compare." };
      }

      const result = runComparison(scenarios);
      return result;
    }
  );
}

// ─── Inline comparison logic (mirrors Python scenario_comparator) ───

interface ScenarioData {
  label: string;
  feasibility_score: number;
  demand_score: number;
  competition_score: number;
  constraint_pressure: number;
  difficulty: string;
  regime: string;
  regime_adjustment: number;
  time_range_min: number;
  time_range_max: number;
  success_band: Record<string, number>;
  constraints: Record<string, unknown>[];
  conditions: string[];
  _original_index?: number;
  _composite_rank?: number;
}

function computeCompositeRank(s: ScenarioData): number {
  const normScore = s.feasibility_score / 100;
  const normDemand = s.demand_score / 100;
  const normTime = Math.max(0, 1 - s.time_range_min / 36);
  const normRisk = Math.max(0, 1 - (s.constraint_pressure - 1) / 2);
  const normGrowth = (s.regime_adjustment + 25) / 55;

  return +(
    0.35 * normScore +
    0.20 * normDemand +
    0.20 * normTime +
    0.15 * normRisk +
    0.10 * normGrowth
  ).toFixed(4);
}

function runComparison(scenarios: ScenarioData[]) {
  // Tag and rank
  for (let i = 0; i < scenarios.length; i++) {
    scenarios[i]._original_index = i;
    scenarios[i]._composite_rank = computeCompositeRank(scenarios[i]);
  }

  const ranked = [...scenarios].sort(
    (a, b) => (b._composite_rank ?? 0) - (a._composite_rank ?? 0)
  );

  // Build comparison table
  const comparison_table = ranked.map((s) => ({
    index: s._original_index!,
    label: s.label,
    feasibility_score: s.feasibility_score,
    difficulty: s.difficulty,
    demand_score: s.demand_score,
    competition_score: s.competition_score,
    constraint_pressure: s.constraint_pressure,
    regime: s.regime,
    regime_adjustment: s.regime_adjustment,
    time_range: `${s.time_range_min}-${s.time_range_max} months`,
    success_band: s.success_band,
    top_constraints: s.constraints
      .filter((c: Record<string, unknown>) => c.severity === "high")
      .map((c: Record<string, unknown>) => c.type as string)
      .slice(0, 3),
    conditions_count: s.conditions.length,
    composite_rank: s._composite_rank!,
  }));

  // Recommendation
  const best = ranked[0];
  const reasons: string[] = [];

  if (best.feasibility_score >= 70) {
    reasons.push(`highest feasibility score (${best.feasibility_score})`);
  } else if (best.feasibility_score >= 50) {
    reasons.push(`best feasibility score among options (${best.feasibility_score})`);
  } else {
    reasons.push(`least difficult option (score: ${best.feasibility_score})`);
  }

  if (best.regime === "emerging" || best.regime === "trending") {
    reasons.push(`${best.regime} market with growth potential`);
  }

  if (best.constraint_pressure < 1.5) {
    reasons.push("low structural barriers");
  }

  if (best.time_range_min <= 4) {
    reasons.push(`fast time to traction (${best.time_range_min}-${best.time_range_max} months)`);
  }

  const recommendation = {
    recommended_index: best._original_index!,
    explanation: reasons.length
      ? "Recommended because: " + reasons.join("; ") + "."
      : "Best available option.",
  };

  // Tradeoffs
  const tradeoffs = ranked.slice(1).map((alt) => {
    const advantages: string[] = [];

    if (alt.demand_score > best.demand_score + 10) {
      advantages.push(`higher demand (${alt.demand_score} vs ${best.demand_score})`);
    }
    if (alt.constraint_pressure < best.constraint_pressure - 0.3) {
      advantages.push(`fewer structural barriers (pressure ${alt.constraint_pressure} vs ${best.constraint_pressure})`);
    }
    if (alt.time_range_min < best.time_range_min) {
      advantages.push(`potentially faster results (${alt.time_range_min}-${alt.time_range_max}mo vs ${best.time_range_min}-${best.time_range_max}mo)`);
    }
    if (alt.regime === "emerging" && best.regime !== "emerging") {
      advantages.push("emerging market with early-mover opportunity");
    }

    return {
      index: alt._original_index!,
      label: alt.label,
      advantages_over_recommended: advantages,
    };
  }).filter((t) => t.advantages_over_recommended.length > 0);

  // Cleanup
  for (const s of scenarios) {
    delete s._original_index;
    delete s._composite_rank;
  }

  return {
    scenario_count: scenarios.length,
    tier: "free",
    comparison_table,
    recommendation,
    tradeoffs,
  };
}
