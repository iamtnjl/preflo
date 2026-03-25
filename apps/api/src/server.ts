import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";

const PORT = Number(process.env.API_PORT) || 3001;
const HOST = process.env.API_HOST || "0.0.0.0";

async function buildServer() {
  const app = Fastify({ logger: true });

  await app.register(cors, {
    origin: true,
  });

  await app.register(rateLimit, {
    max: 30,
    timeWindow: "1 minute",
  });

  app.get("/health", async () => {
    return { status: "ok", timestamp: new Date().toISOString() };
  });

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

start();
