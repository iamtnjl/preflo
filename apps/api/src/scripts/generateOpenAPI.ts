import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { buildServer } from "../server.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generate() {
  const app = await buildServer();
  await app.ready();

  const spec = app.swagger();
  const outPath = resolve(__dirname, "../../../../packages/shared/src/openapi.json");

  writeFileSync(outPath, JSON.stringify(spec, null, 2));
  console.log(`OpenAPI spec written to ${outPath}`);

  await app.close();
  process.exit(0);
}

generate();
