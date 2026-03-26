"use client";

import { useState, useCallback, useRef } from "react";
import { analyzeNiche, submitJob, checkStatus } from "@/app/actions/analyze";
import type { IntentResult, AnalysisParams } from "@/app/actions/analyze";

export type AnalysisState =
  | { step: "idle" }
  | { step: "parsing" }
  | { step: "clarifying"; result: IntentResult }
  | { step: "confirmed"; params: AnalysisParams }
  | { step: "submitting"; params: AnalysisParams }
  | { step: "processing"; slug: string; params: AnalysisParams }
  | { step: "complete"; slug: string }
  | { step: "error"; message: string };

const POLL_INTERVAL = 3000; // 3 seconds
const MAX_POLLS = 60;       // 3 minutes max

export function useAnalysis() {
  const [state, setState] = useState<AnalysisState>({ step: "idle" });
  const pollRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const submitQuery = useCallback(async (formData: FormData) => {
    setState({ step: "parsing" });

    const result = await analyzeNiche(formData);

    if (!result.success) {
      setState({ step: "error", message: result.error });
      return;
    }

    const intent = result.data;

    if (intent.needs_clarification) {
      setState({ step: "clarifying", result: intent });
      return;
    }

    setState({ step: "confirmed", params: intent.params });
  }, []);

  const runAnalysis = useCallback(async (params: AnalysisParams) => {
    setState({ step: "submitting", params });

    const jobResult = await submitJob(params);
    if (!jobResult.success) {
      setState({ step: "error", message: jobResult.error });
      return;
    }

    const { slug } = jobResult.data;
    setState({ step: "processing", slug, params });

    // Start polling
    let pollCount = 0;
    const poll = async () => {
      pollCount++;
      const statusResult = await checkStatus(slug);

      if (statusResult.success && statusResult.data.status === "complete") {
        setState({ step: "complete", slug });
        return;
      }

      if (pollCount >= MAX_POLLS) {
        setState({
          step: "error",
          message: "Analysis is taking longer than expected. Check /result/" + slug + " later.",
        });
        return;
      }

      pollRef.current = setTimeout(poll, POLL_INTERVAL);
    };

    pollRef.current = setTimeout(poll, POLL_INTERVAL);
  }, []);

  const confirmParams = useCallback((params: AnalysisParams) => {
    setState({ step: "confirmed", params });
  }, []);

  const reset = useCallback(() => {
    if (pollRef.current) clearTimeout(pollRef.current);
    setState({ step: "idle" });
  }, []);

  return { state, submitQuery, confirmParams, runAnalysis, reset };
}
