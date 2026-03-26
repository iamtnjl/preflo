"use server";

import { api } from "@/lib/api";

type Domain = "SEO" | "content" | "ecommerce" | "saas" | "social";
type EffortLevel = "low" | "medium" | "high";
type ContentFrequency = "daily" | "weekly" | "biweekly" | "monthly";

export interface AnalysisParams {
  domain: Domain;
  niche: string;
  effort_level: EffortLevel;
  budget: number;
  time_horizon: number;
  content_frequency: ContentFrequency;
}

export interface IntentResult {
  params: AnalysisParams;
  parsed_from: "natural_language" | "structured_form";
  confidence: number;
  raw_query?: string;
  needs_clarification: boolean;
  clarification_prompt?: string;
}

type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

const VALID_DOMAINS: Domain[] = ["SEO", "content", "ecommerce", "saas", "social"];
const VALID_EFFORTS: EffortLevel[] = ["low", "medium", "high"];
const VALID_FREQUENCIES: ContentFrequency[] = ["daily", "weekly", "biweekly", "monthly"];

export async function analyzeNiche(formData: FormData): Promise<ActionResult<IntentResult>> {
  const query = formData.get("query") as string | null;
  const niche = formData.get("niche") as string | null;
  const rawDomain = formData.get("domain") as string | null;
  const rawEffort = formData.get("effort_level") as string | null;
  const rawFrequency = formData.get("content_frequency") as string | null;
  const rawBudget = formData.get("budget") as string | null;
  const rawTimeHorizon = formData.get("time_horizon") as string | null;

  const domain = VALID_DOMAINS.includes(rawDomain as Domain) ? (rawDomain as Domain) : undefined;
  const effort_level = VALID_EFFORTS.includes(rawEffort as EffortLevel) ? (rawEffort as EffortLevel) : undefined;
  const content_frequency = VALID_FREQUENCIES.includes(rawFrequency as ContentFrequency) ? (rawFrequency as ContentFrequency) : undefined;
  const budget = rawBudget ? parseInt(rawBudget, 10) : undefined;
  const time_horizon = rawTimeHorizon ? parseInt(rawTimeHorizon, 10) : undefined;

  const { data, error } = await api.POST("/api/analyze", {
    body: {
      ...(query && { query }),
      ...(niche && { niche }),
      ...(domain && { domain }),
      ...(effort_level && { effort_level }),
      ...(content_frequency && { content_frequency }),
      ...(budget !== undefined && !isNaN(budget) && { budget }),
      ...(time_horizon !== undefined && !isNaN(time_horizon) && { time_horizon }),
    },
  });

  if (error) {
    const errMsg = typeof error === "object" && error !== null && "message" in error
      ? (error as { message: string }).message
      : "Analysis request failed";
    return { success: false, error: errMsg };
  }

  return { success: true, data: data as unknown as IntentResult };
}

export async function submitJob(params: AnalysisParams): Promise<ActionResult<{ slug: string }>> {
  const API_BASE = process.env.API_URL || "http://localhost:5000";
  try {
    const resp = await fetch(`${API_BASE}/api/analyze/run`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        niche: params.niche,
        domain: params.domain,
        effort_level: params.effort_level,
      }),
    });

    if (!resp.ok) {
      const body = await resp.json().catch(() => ({}));
      return { success: false, error: (body as { message?: string }).message ?? "Job submission failed" };
    }

    const data = await resp.json() as { slug: string };
    return { success: true, data };
  } catch {
    return { success: false, error: "Could not reach the API server" };
  }
}

export async function checkStatus(slug: string): Promise<ActionResult<{ status: string }>> {
  const API_BASE = process.env.API_URL || "http://localhost:5000";
  try {
    const resp = await fetch(`${API_BASE}/api/analyze/status/${encodeURIComponent(slug)}`);
    const data = await resp.json() as { status: string };
    return { success: true, data };
  } catch {
    return { success: false, error: "Status check failed" };
  }
}

export async function getResult(slug: string): Promise<ActionResult<Record<string, unknown>>> {
  const { data, error } = await api.GET("/api/result/{slug}", {
    params: { path: { slug } },
  });

  if (error) {
    return { success: false, error: "Failed to fetch result" };
  }

  return { success: true, data: data as Record<string, unknown> };
}

export async function compareNiches(slugs: string[]): Promise<ActionResult<Record<string, unknown>>> {
  const { data, error } = await api.GET("/api/compare", {
    params: { query: { slugs: slugs.join(",") } },
  });

  if (error) {
    return { success: false, error: "Failed to compare niches" };
  }

  return { success: true, data: data as Record<string, unknown> };
}
