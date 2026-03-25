"use server";

import { api } from "@/lib/api";

type Domain = "SEO" | "content" | "ecommerce" | "saas" | "social";
type EffortLevel = "low" | "medium" | "high";

type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: unknown };

const VALID_DOMAINS: Domain[] = ["SEO", "content", "ecommerce", "saas", "social"];
const VALID_EFFORTS: EffortLevel[] = ["low", "medium", "high"];

export async function analyzeNiche(formData: FormData): Promise<ActionResult<Record<string, unknown>>> {
  const query = formData.get("query") as string;
  const rawDomain = formData.get("domain") as string | null;
  const rawEffort = formData.get("effort_level") as string | null;

  const domain = VALID_DOMAINS.includes(rawDomain as Domain) ? (rawDomain as Domain) : undefined;
  const effort_level = VALID_EFFORTS.includes(rawEffort as EffortLevel) ? (rawEffort as EffortLevel) : undefined;

  const { data, error } = await api.POST("/api/analyze", {
    body: {
      query,
      ...(domain && { domain }),
      ...(effort_level && { effort_level }),
    },
  });

  if (error) {
    return { success: false, error };
  }

  return { success: true, data: data as Record<string, unknown> };
}

export async function getResult(slug: string): Promise<ActionResult<Record<string, unknown>>> {
  const { data, error } = await api.GET("/api/result/{slug}", {
    params: { path: { slug } },
  });

  if (error) {
    return { success: false, error };
  }

  return { success: true, data: data as Record<string, unknown> };
}

export async function compareNiches(slugs: string[]): Promise<ActionResult<Record<string, unknown>>> {
  const { data, error } = await api.GET("/api/compare", {
    params: { query: { slugs: slugs.join(",") } },
  });

  if (error) {
    return { success: false, error };
  }

  return { success: true, data: data as Record<string, unknown> };
}
