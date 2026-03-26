import type { FastifyInstance } from "fastify";
import { errorSchema } from "../schemas/analyze.js";
import { prisma } from "../services/database.js";

export async function resultRoutes(app: FastifyInstance) {
  app.get(
    "/result/:slug",
    {
      schema: {
        tags: ["Analysis"],
        description: "Get full feasibility report by keyword slug",
        params: {
          type: "object",
          required: ["slug"],
          properties: {
            slug: { type: "string" },
          },
        },
        response: {
          404: errorSchema,
        },
      },
    },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };

      const keyword = await prisma.keyword.findUnique({
        where: { slug },
        include: {
          feasibilityScores: {
            orderBy: { scoredAt: "desc" },
            take: 1,
          },
        },
      });

      if (!keyword) {
        reply.status(404);
        return { error: "not_found", message: `No keyword found for slug '${slug}'.` };
      }

      if (keyword.feasibilityScores.length === 0) {
        reply.status(404);
        return { error: "not_scored", message: `Keyword '${slug}' has not been scored yet.` };
      }

      const score = keyword.feasibilityScores[0];
      const constraints = (score.constraints as Record<string, unknown>[] | null) ?? [];
      const conditions = (score.conditions as string[] | null) ?? [];
      const successBand = (score.successBand as Record<string, number> | null) ?? {
        best_case: 0,
        expected: 0,
        worst_case: 0,
      };

      // Generate concrete requirements from constraints + score
      const concreteRequirements = generateConcreteRequirements(
        score.feasibilityScore,
        score.difficulty,
        score.constraintPressure,
        constraints,
      );

      return {
        keyword: keyword.keyword,
        slug: keyword.slug,
        domain: keyword.domain ?? "SEO",
        feasibility_score: score.feasibilityScore,
        demand_score: score.demandScore,
        competition_score: score.competitionScore,
        constraint_pressure: score.constraintPressure,
        difficulty: score.difficulty,
        time_range_min: score.timeRangeMin ?? 6,
        time_range_max: score.timeRangeMax ?? 12,
        regime: score.regime ?? "stable",
        success_band: successBand,
        constraints,
        conditions,
        failure_modes: [],  // Populated by worker; stored in signalVersions or separate field
        concrete_requirements: concreteRequirements,
        scored_at: score.scoredAt.toISOString(),
      };
    }
  );
}

// ─── Condition Explainer: translate constraints into concrete requirements ───

interface ConcreteReq {
  area: string;
  target: string;
  rationale: string;
}

function generateConcreteRequirements(
  feasibilityScore: number,
  difficulty: string,
  pressure: number,
  constraints: Record<string, unknown>[],
): ConcreteReq[] {
  const reqs: ConcreteReq[] = [];

  // Content volume based on difficulty
  const contentTargets: Record<string, string> = {
    easy: "20-30 high-quality articles in your first 3 months",
    medium: "40-60 articles over 6 months, covering your topic cluster thoroughly",
    hard: "80-120 articles over 9-12 months with deep topical coverage",
    very_hard: "150+ articles over 12-18 months, plus supporting tools/resources",
  };
  reqs.push({
    area: "Content Volume",
    target: contentTargets[difficulty] ?? contentTargets.medium,
    rationale: "Establishes topical authority and covers enough keywords to rank",
  });

  // Publishing frequency
  const freqTargets: Record<string, string> = {
    easy: "2-3 articles per week",
    medium: "3-4 articles per week",
    hard: "4-5 articles per week",
    very_hard: "5+ articles per week with daily consistency",
  };
  reqs.push({
    area: "Publishing Frequency",
    target: freqTargets[difficulty] ?? freqTargets.medium,
    rationale: "Signals freshness to search engines and accelerates authority building",
  });

  // Backlinks — based on constraint types
  const hasAuthorityGap = constraints.some(
    (c) => c.type === "authority_gap" || c.type === "backlink_acquisition_rate"
  );
  if (hasAuthorityGap || pressure > 1.5) {
    const linkTargets: Record<string, string> = {
      easy: "1-3 quality backlinks per month",
      medium: "5-10 quality backlinks per month",
      hard: "10-20 quality backlinks per month via outreach and guest posting",
      very_hard: "20+ quality backlinks per month, requires dedicated link building strategy or agency",
    };
    reqs.push({
      area: "Backlink Building",
      target: linkTargets[difficulty] ?? linkTargets.medium,
      rationale: "Closes the authority gap with established competitors",
    });
  }

  // Budget recommendation
  if (difficulty === "hard" || difficulty === "very_hard") {
    reqs.push({
      area: "Monthly Budget",
      target: difficulty === "very_hard"
        ? "$500-1000+/month for tools, content, and link building"
        : "$200-500/month for SEO tools and occasional freelance content",
      rationale: "Competitive niches require investment in tools, quality content, and outreach",
    });
  }

  // Time commitment
  const timeTargets: Record<string, string> = {
    easy: "5-10 hours per week for 3-6 months",
    medium: "10-20 hours per week for 6-12 months",
    hard: "20-30 hours per week for 9-18 months",
    very_hard: "30-40+ hours per week (near full-time) for 12-24 months",
  };
  reqs.push({
    area: "Time Commitment",
    target: timeTargets[difficulty] ?? timeTargets.medium,
    rationale: "Consistent effort over time is the primary driver of organic growth",
  });

  return reqs;
}
