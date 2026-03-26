"use client";

import AnalysisForm from "@/components/analysis/AnalysisForm";
import { useAnalysis } from "@/hooks/useAnalysis";

export default function AnalyzePage() {
  const { state, submitQuery, confirmParams, runAnalysis, reset } = useAnalysis();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Analyze a Niche
          </h1>
          <p className="text-gray-600">
            Describe your online venture idea or fill in the details below.
            We&apos;ll evaluate its feasibility.
          </p>
        </div>

        <AnalysisForm
          state={state}
          onSubmit={submitQuery}
          onConfirm={confirmParams}
          onRun={runAnalysis}
          onReset={reset}
        />
      </div>
    </main>
  );
}
