import type { FastifyInstance } from "fastify";
import { errorSchema } from "../schemas/analyze.js";

export async function exportRoutes(app: FastifyInstance) {
  app.get(
    "/export/:slug",
    {
      schema: {
        tags: ["Export"],
        description: "Export feasibility report as JSON",
        params: {
          type: "object",
          required: ["slug"],
          properties: {
            slug: { type: "string" },
          },
        },
        querystring: {
          type: "object",
          properties: {
            format: {
              type: "string",
              enum: ["json", "csv"],
              default: "json",
            },
          },
        },
        response: {
          200: {
            type: "object",
            description: "Exported report data",
          },
          404: errorSchema,
          501: errorSchema,
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement — fetch and format report for export
      reply.status(501);
      return { error: "not_implemented", message: "Export endpoint not yet implemented" };
    }
  );
}
