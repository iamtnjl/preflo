import type { FastifyInstance } from "fastify";
import {
  analyzeRequestSchema,
  feasibilityReportSchema,
  processingStatusSchema,
  errorSchema,
} from "../schemas/analyze.js";

export async function analyzeRoutes(app: FastifyInstance) {
  app.post(
    "/analyze",
    {
      schema: {
        tags: ["Analysis"],
        description: "Submit a niche/keyword for feasibility analysis",
        body: analyzeRequestSchema,
        response: {
          200: feasibilityReportSchema,
          202: processingStatusSchema,
          400: errorSchema,
          501: errorSchema,
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement — check cache → DB → queue for processing
      reply.status(501);
      return { error: "not_implemented", message: "Analyze endpoint not yet implemented" };
    }
  );
}
