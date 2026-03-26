import type { FastifyInstance } from "fastify";
import {
  analyzeRequestSchema,
  intentResultSchema,
  errorSchema,
} from "../schemas/analyze.js";
import { parseIntent } from "../services/intentParser.js";
import type { AnalyzeRequest } from "@preflo/shared";
import { prisma } from "../services/database.js";

const WORKER_URL = process.env.WORKER_URL || "http://localhost:5001";

export async function analyzeRoutes(app: FastifyInstance) {
  // ── POST /analyze — Parse intent (step 1) ──
  app.post(
    "/analyze",
    {
      schema: {
        tags: ["Analysis"],
        description:
          "Parse user input into standardized analysis parameters.",
        body: analyzeRequestSchema,
        response: {
          200: intentResultSchema,
          400: errorSchema,
        },
      },
    },
    async (request, reply) => {
      const input = request.body as AnalyzeRequest;

      if (!input.query && !input.niche) {
        reply.status(400);
        return {
          error: "missing_input",
          message:
            "Provide either a 'query' (natural language) or 'niche' (structured) parameter.",
        };
      }

      const result = parseIntent(input);
      return result;
    }
  );

  // ── POST /analyze/run — Submit confirmed params to worker (step 2) ──
  app.post(
    "/analyze/run",
    {
      schema: {
        tags: ["Analysis"],
        description: "Submit confirmed parameters to the worker for full analysis pipeline.",
        body: {
          type: "object",
          required: ["niche", "domain"],
          properties: {
            niche: { type: "string" },
            domain: { type: "string", enum: ["SEO", "content", "ecommerce", "saas", "social"] },
            effort_level: { type: "string", enum: ["low", "medium", "high"] },
          },
        },
      },
    },
    async (request, reply) => {
      const { niche, domain, effort_level } = request.body as {
        niche: string;
        domain: string;
        effort_level?: string;
      };
      const slug = niche.toLowerCase().trim().replace(/\s+/g, "-");

      try {
        // Submit job to worker
        const workerResp = await fetch(`${WORKER_URL}/jobs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            keyword: niche,
            domain,
            effort_level: effort_level ?? "medium",
          }),
        });

        if (!workerResp.ok) {
          reply.status(502);
          return { error: "worker_error", message: "Failed to submit job to worker." };
        }

        return { status: "accepted", slug, keyword: niche };
      } catch {
        reply.status(502);
        return {
          error: "worker_unavailable",
          message: "Worker service is not reachable. Make sure it is running.",
        };
      }
    }
  );

  // ── GET /analyze/status/:slug — Poll for scoring completion (step 3) ──
  app.get(
    "/analyze/status/:slug",
    {
      schema: {
        tags: ["Analysis"],
        description: "Check if a keyword has been fully scored.",
        params: {
          type: "object",
          required: ["slug"],
          properties: { slug: { type: "string" } },
        },
      },
    },
    async (request, _reply) => {
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
        return { status: "not_found", slug };
      }

      if (keyword.feasibilityScores.length === 0) {
        return { status: "processing", slug, keyword: keyword.keyword };
      }

      return { status: "complete", slug, keyword: keyword.keyword };
    }
  );
}
