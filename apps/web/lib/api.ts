import createClient from "openapi-fetch";
import type { paths } from "./api-types";

const API_BASE = process.env.API_URL || "http://localhost:3001";

export const api = createClient<paths>({
  baseUrl: API_BASE,
});
