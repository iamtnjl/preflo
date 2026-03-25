import type { FastifyInstance } from "fastify";
import { errorSchema } from "../schemas/analyze.js";

export async function feedbackRoutes(app: FastifyInstance) {
  app.post(
    "/feedback",
    {
      schema: {
        tags: ["Feedback"],
        description: "Submit outcome feedback for a scored keyword",
        body: {
          type: "object",
          required: ["keyword_slug", "actual_result"],
          properties: {
            keyword_slug: { type: "string" },
            actual_result: { type: "string" },
            months_elapsed: { type: "integer" },
            traffic_achieved: { type: "integer" },
            notes: { type: "string" },
          },
        },
        response: {
          201: {
            type: "object",
            properties: {
              message: { type: "string" },
              outcome_id: { type: "integer" },
            },
            required: ["message", "outcome_id"],
          },
          400: errorSchema,
          404: errorSchema,
          501: errorSchema,
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement — store outcome feedback in DB
      reply.status(501);
      return { error: "not_implemented", message: "Feedback endpoint not yet implemented" };
    }
  );
}
