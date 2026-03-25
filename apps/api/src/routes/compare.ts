import type { FastifyInstance } from "fastify";
import { feasibilityReportSchema, errorSchema } from "../schemas/analyze.js";

export async function compareRoutes(app: FastifyInstance) {
  app.get(
    "/compare",
    {
      schema: {
        tags: ["Analysis"],
        description: "Compare feasibility of multiple niches",
        querystring: {
          type: "object",
          required: ["slugs"],
          properties: {
            slugs: {
              type: "string",
              description: "Comma-separated list of keyword slugs",
            },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              results: {
                type: "array",
                items: feasibilityReportSchema,
              },
            },
            required: ["results"],
          },
          400: errorSchema,
          501: errorSchema,
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement — fetch and return multiple results for comparison
      reply.status(501);
      return { error: "not_implemented", message: "Compare endpoint not yet implemented" };
    }
  );
}
