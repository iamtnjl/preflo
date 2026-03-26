"use client";

import { useState } from "react";
import type { AnalysisParams, IntentResult } from "@/app/actions/analyze";
import type { AnalysisState } from "@/hooks/useAnalysis";

interface AnalysisFormProps {
  state: AnalysisState;
  onSubmit: (formData: FormData) => void;
  onConfirm: (params: AnalysisParams) => void;
  onRun: (params: AnalysisParams) => void;
  onReset: () => void;
}

const DOMAINS = [
  { value: "SEO", label: "SEO / Blogging" },
  { value: "content", label: "Content / YouTube" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "saas", label: "SaaS / Software" },
  { value: "social", label: "Social Media" },
] as const;

const EFFORT_LEVELS = [
  { value: "low", label: "Low", desc: "Side project, a few hours/week" },
  { value: "medium", label: "Medium", desc: "Part-time, 10-20 hours/week" },
  { value: "high", label: "High", desc: "Full-time, dedicated effort" },
] as const;

const FREQUENCIES = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "biweekly", label: "Biweekly" },
  { value: "monthly", label: "Monthly" },
] as const;

export default function AnalysisForm({
  state,
  onSubmit,
  onConfirm,
  onRun,
  onReset,
}: AnalysisFormProps) {
  const [mode, setMode] = useState<"nl" | "form">("nl");

  const isLoading = state.step === "parsing";

  // Show clarification UI
  if (state.step === "clarifying") {
    return (
      <ClarificationView
        result={state.result}
        onSubmit={onSubmit}
        onConfirm={onConfirm}
        onReset={onReset}
      />
    );
  }

  // Show confirmed parameters
  if (state.step === "confirmed") {
    return (
      <ConfirmedView params={state.params} onRun={onRun} onReset={onReset} />
    );
  }

  // Show submitting/processing state
  if (state.step === "submitting" || state.step === "processing") {
    return <ProcessingView state={state} />;
  }

  // Show complete — redirect link
  if (state.step === "complete") {
    return (
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Analysis Complete</h3>
          <p className="text-sm text-green-700 mb-4">Your feasibility report is ready.</p>
          <a
            href={`/result/${state.slug}`}
            className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Full Report
          </a>
          <button
            type="button"
            onClick={onReset}
            className="block mx-auto mt-3 text-sm text-gray-500 hover:text-gray-700"
          >
            Analyze Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Mode toggle */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setMode("nl")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "nl"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Describe your idea
        </button>
        <button
          type="button"
          onClick={() => setMode("form")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "form"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Use form
        </button>
      </div>

      {/* Error display */}
      {state.step === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {state.message}
        </div>
      )}

      {mode === "nl" ? (
        <NaturalLanguageInput onSubmit={onSubmit} isLoading={isLoading} />
      ) : (
        <StructuredFormInput onSubmit={onSubmit} isLoading={isLoading} />
      )}
    </div>
  );
}

// ─── Natural Language Input ───

function NaturalLanguageInput({
  onSubmit,
  isLoading,
}: {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
}) {
  return (
    <form action={onSubmit}>
      <div className="relative">
        <input
          name="query"
          type="text"
          required
          placeholder='e.g., "Start an AI tools blog with $500/month budget"'
          className="w-full px-4 py-4 pr-28 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Parsing..." : "Analyze"}
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Describe your online venture idea in plain English. We&apos;ll extract the key parameters.
      </p>
    </form>
  );
}

// ─── Structured Form Input ───

function StructuredFormInput({
  onSubmit,
  isLoading,
}: {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
}) {
  return (
    <form action={onSubmit} className="space-y-5">
      {/* Niche */}
      <div>
        <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-1">
          Niche / Topic <span className="text-red-500">*</span>
        </label>
        <input
          id="niche"
          name="niche"
          type="text"
          required
          placeholder="e.g., AI tools, home fitness, pet care"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <p className="mt-1 text-xs text-gray-500">The topic or market you want to analyze</p>
      </div>

      {/* Domain */}
      <div>
        <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
          Domain
        </label>
        <select
          id="domain"
          name="domain"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="SEO"
          disabled={isLoading}
        >
          {DOMAINS.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-gray-500">The type of online venture</p>
      </div>

      {/* Effort Level */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Effort Level</label>
        <div className="grid grid-cols-3 gap-3">
          {EFFORT_LEVELS.map((e) => (
            <label
              key={e.value}
              className="flex flex-col items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 transition-colors"
            >
              <input
                type="radio"
                name="effort_level"
                value={e.value}
                defaultChecked={e.value === "medium"}
                className="sr-only"
                disabled={isLoading}
              />
              <span className="font-medium text-sm">{e.label}</span>
              <span className="text-xs text-gray-500 text-center mt-1">{e.desc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget & Time Horizon */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget ($/month)
          </label>
          <input
            id="budget"
            name="budget"
            type="number"
            min={0}
            defaultValue={0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <p className="mt-1 text-xs text-gray-500">Monthly budget in USD</p>
        </div>
        <div>
          <label htmlFor="time_horizon" className="block text-sm font-medium text-gray-700 mb-1">
            Time Horizon (months)
          </label>
          <input
            id="time_horizon"
            name="time_horizon"
            type="number"
            min={1}
            max={36}
            defaultValue={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <p className="mt-1 text-xs text-gray-500">How long you plan to commit</p>
        </div>
      </div>

      {/* Content Frequency */}
      <div>
        <label htmlFor="content_frequency" className="block text-sm font-medium text-gray-700 mb-1">
          Content Frequency
        </label>
        <select
          id="content_frequency"
          name="content_frequency"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="weekly"
          disabled={isLoading}
        >
          {FREQUENCIES.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-gray-500">How often you plan to publish content</p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Analyzing..." : "Analyze Feasibility"}
      </button>
    </form>
  );
}

// ─── Clarification View ───

function ClarificationView({
  result,
  onSubmit,
  onConfirm,
  onReset,
}: {
  result: IntentResult;
  onSubmit: (formData: FormData) => void;
  onConfirm: (params: AnalysisParams) => void;
  onReset: () => void;
}) {
  const [editedParams, setEditedParams] = useState<AnalysisParams>(result.params);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Clarification prompt */}
      {result.clarification_prompt && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800 font-medium text-sm mb-1">Needs clarification</p>
          <p className="text-amber-700 text-sm">{result.clarification_prompt}</p>
        </div>
      )}

      {/* If niche is missing, show quick re-entry */}
      {!result.params.niche && (
        <form action={onSubmit} className="mb-6">
          <label htmlFor="clarify-niche" className="block text-sm font-medium text-gray-700 mb-1">
            What niche do you want to explore?
          </label>
          <div className="flex gap-2">
            <input
              id="clarify-niche"
              name="niche"
              type="text"
              required
              placeholder="e.g., AI tools, home fitness"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Carry forward detected params */}
            <input type="hidden" name="domain" value={result.params.domain} />
            <input type="hidden" name="effort_level" value={result.params.effort_level} />
            <input type="hidden" name="budget" value={result.params.budget} />
            <input type="hidden" name="time_horizon" value={result.params.time_horizon} />
            <input type="hidden" name="content_frequency" value={result.params.content_frequency} />
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Re-analyze
            </button>
          </div>
        </form>
      )}

      {/* Show parsed parameters for editing */}
      {result.params.niche && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Parsed Parameters</h3>
          <p className="text-sm text-gray-500">
            Confidence: {Math.round(result.confidence * 100)}% — Review and adjust if needed.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Niche</label>
              <input
                type="text"
                value={editedParams.niche}
                onChange={(e) => setEditedParams((p) => ({ ...p, niche: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Domain</label>
              <select
                value={editedParams.domain}
                onChange={(e) => setEditedParams((p) => ({ ...p, domain: e.target.value as AnalysisParams["domain"] }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                {DOMAINS.map((d) => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Effort</label>
              <select
                value={editedParams.effort_level}
                onChange={(e) => setEditedParams((p) => ({ ...p, effort_level: e.target.value as AnalysisParams["effort_level"] }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                {EFFORT_LEVELS.map((e) => (
                  <option key={e.value} value={e.value}>{e.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Budget ($/mo)</label>
              <input
                type="number"
                min={0}
                value={editedParams.budget}
                onChange={(e) => setEditedParams((p) => ({ ...p, budget: parseInt(e.target.value, 10) || 0 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Time Horizon (months)</label>
              <input
                type="number"
                min={1}
                max={36}
                value={editedParams.time_horizon}
                onChange={(e) => setEditedParams((p) => ({ ...p, time_horizon: parseInt(e.target.value, 10) || 6 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Frequency</label>
              <select
                value={editedParams.content_frequency}
                onChange={(e) => setEditedParams((p) => ({ ...p, content_frequency: e.target.value as AnalysisParams["content_frequency"] }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                {FREQUENCIES.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => onConfirm(editedParams)}
              className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Confirm &amp; Analyze
            </button>
            <button
              type="button"
              onClick={onReset}
              className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Confirmed View ───

function ConfirmedView({
  params,
  onRun,
  onReset,
}: {
  params: AnalysisParams;
  onRun: (params: AnalysisParams) => void;
  onReset: () => void;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Parameters</h3>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <div>
            <dt className="text-gray-500">Niche</dt>
            <dd className="font-medium text-gray-900">{params.niche}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Domain</dt>
            <dd className="font-medium text-gray-900">{params.domain}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Effort</dt>
            <dd className="font-medium text-gray-900 capitalize">{params.effort_level}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Budget</dt>
            <dd className="font-medium text-gray-900">${params.budget}/mo</dd>
          </div>
          <div>
            <dt className="text-gray-500">Time Horizon</dt>
            <dd className="font-medium text-gray-900">{params.time_horizon} months</dd>
          </div>
          <div>
            <dt className="text-gray-500">Content Frequency</dt>
            <dd className="font-medium text-gray-900 capitalize">{params.content_frequency}</dd>
          </div>
        </dl>
        <div className="flex gap-3 mt-5">
          <button
            type="button"
            onClick={() => onRun(params)}
            className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Run Full Analysis
          </button>
          <button
            type="button"
            onClick={onReset}
            className="px-5 py-2.5 bg-white text-gray-600 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Processing View ───

function ProcessingView({ state }: { state: AnalysisState }) {
  const isSubmitting = state.step === "submitting";
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <div className="p-8 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="inline-block w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4" />
        <h3 className="text-lg font-semibold text-blue-800 mb-1">
          {isSubmitting ? "Submitting..." : "Analyzing..."}
        </h3>
        <p className="text-sm text-blue-600">
          {isSubmitting
            ? "Sending your parameters to the analysis engine."
            : "Collecting data from Reddit, Google SERP, and Trends. This may take a minute."}
        </p>
        {"params" in state && state.params && (
          <p className="text-xs text-blue-500 mt-3">
            Niche: {state.params.niche} &middot; Domain: {state.params.domain}
          </p>
        )}
      </div>
    </div>
  );
}
