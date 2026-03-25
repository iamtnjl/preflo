import type { FastifyInstance } from "fastify";
import { feasibilityReportSchema, errorSchema } from "../schemas/analyze.js";

export async function resultRoutes(app: FastifyInstance) {
  app.get(
    "/result/:slug",
    {
      schema: {
        tags: ["Analysis"],
        description: "Get feasibility result by slug",
        params: {
          type: "object",
          required: ["slug"],
          properties: {
            slug: { type: "string" },
          },
        },
        response: {
          200: feasibilityReportSchema,
          404: errorSchema,
          501: errorSchema,
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement — lookup result by slug from DB/cache
      reply.status(501);
      return { error: "not_implemented", message: "Result endpoint not yet implemented" };
    }
  );
}
