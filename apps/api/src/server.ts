import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { healthRoutes } from "./routes/health.js";
import { analyzeRoutes } from "./routes/analyze.js";
import { resultRoutes } from "./routes/result.js";
import { compareRoutes } from "./routes/compare.js";
import { nichesRoutes } from "./routes/niches.js";
import { feedbackRoutes } from "./routes/feedback.js";
import { exportRoutes } from "./routes/export.js";

const PORT = Number(process.env.API_PORT) || 3001;
const HOST = process.env.API_HOST || "0.0.0.0";

export async function buildServer() {
  const app = Fastify({ logger: true });

  // --- Plugins ---
  await app.register(cors, { origin: true });

  await app.register(rateLimit, {
    max: 30,
    timeWindow: "1 minute",
  });

  await app.register(swagger, {
    openapi: {
      openapi: "3.1.0",
      info: {
        title: "Preflo API",
        description: "Internet Feasibility Engine API",
        version: "0.1.0",
      },
      servers: [
        { url: `http://localhost:${PORT}`, description: "Local dev" },
      ],
    },
  });

  await app.register(swaggerUi, {
    routePrefix: "/docs",
  });

  // --- Routes ---
  await app.register(healthRoutes);
  await app.register(analyzeRoutes, { prefix: "/api" });
  await app.register(resultRoutes, { prefix: "/api" });
  await app.register(compareRoutes, { prefix: "/api" });
  await app.register(nichesRoutes, { prefix: "/api" });
  await app.register(feedbackRoutes, { prefix: "/api" });
  await app.register(exportRoutes, { prefix: "/api" });

  return app;
}

async function start() {
  const app = await buildServer();

  try {
    await app.listen({ port: PORT, host: HOST });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

const isMain =
  import.meta.url === `file:///${process.argv[1].replace(/\\/g, "/")}`;
if (isMain) {
  start();
}
