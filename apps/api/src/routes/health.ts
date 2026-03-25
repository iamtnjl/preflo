import type { FastifyInstance } from "fastify";

export async function healthRoutes(app: FastifyInstance) {
  app.get(
    "/health",
    {
      schema: {
        tags: ["System"],
        description: "Health check endpoint",
        response: {
          200: {
            type: "object",
            properties: {
              status: { type: "string", enum: ["ok"] },
              timestamp: { type: "string", format: "date-time" },
            },
            required: ["status", "timestamp"],
          },
        },
      },
    },
    async () => {
      return { status: "ok" as const, timestamp: new Date().toISOString() };
    }
  );
}
