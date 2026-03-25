import type { FastifyInstance } from "fastify";

export async function nichesRoutes(app: FastifyInstance) {
  app.get(
    "/niches",
    {
      schema: {
        tags: ["Niches"],
        description: "List recently analyzed niches",
        querystring: {
          type: "object",
          properties: {
            domain: {
              type: "string",
              enum: ["SEO", "content", "ecommerce", "saas", "social"],
            },
            limit: { type: "integer", default: 20, minimum: 1, maximum: 100 },
            offset: { type: "integer", default: 0, minimum: 0 },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              niches: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    keyword: { type: "string" },
                    slug: { type: "string" },
                    domain: { type: "string" },
                    feasibility_score: { type: "number" },
                    difficulty: { type: "string" },
                    scored_at: { type: "string", format: "date-time" },
                  },
                },
              },
              total: { type: "integer" },
            },
            required: ["niches", "total"],
          },
          501: {
            type: "object",
            required: ["error", "message"],
            properties: {
              error: { type: "string" },
              message: { type: "string" },
            },
          },
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement — query DB for recent analyses
      reply.status(501);
      return { error: "not_implemented", message: "Niches endpoint not yet implemented" };
    }
  );
}
