"use client";

import type {
  FeasibilityReport as ReportType,
  Constraint,
  FailureMode,
  ConcreteRequirement,
} from "@preflo/shared";
import DifficultyBadge from "@/components/shared/DifficultyBadge";
import RegimeBadge from "@/components/shared/RegimeBadge";
import {
  formatScore,
  formatPressure,
  formatTimeRange,
  scoreColor,
  humanize,
  SEVERITY_STYLES,
} from "@/lib/formatting";

interface FeasibilityReportProps {
  report: ReportType;
}

export default function FeasibilityReport({ report }: FeasibilityReportProps) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* ── Hero: Score + Badges ── */}
      <ScoreHero report={report} />

      {/* ── Success Band ── */}
      <SuccessBandSection report={report} />

      {/* ── Key Constraints ── */}
      {report.constraints.length > 0 && (
        <ConstraintsSection constraints={report.constraints} />
      )}

      {/* ── Concrete Requirements ── */}
      {report.concrete_requirements.length > 0 && (
        <RequirementsSection requirements={report.concrete_requirements} />
      )}

      {/* ── Failure Risks ── */}
      {report.failure_modes.length > 0 && (
        <FailureModesSection modes={report.failure_modes} />
      )}

      {/* ── Conditions ── */}
      {report.conditions.length > 0 && (
        <ConditionsSection conditions={report.conditions} />
      )}

      {/* ── Metadata ── */}
      <div className="text-xs text-gray-400 text-center pt-4 border-t border-gray-100">
        Scored at {new Date(report.scored_at).toISOString().replace("T", " ").slice(0, 19)} UTC &middot; {report.keyword}
      </div>
    </div>
  );
}

// ─── Score Hero ───

function ScoreHero({ report }: { report: ReportType }) {
  const colorClass = scoreColor(report.feasibility_score);

  return (
    <div className="text-center">
      <h2 className="text-lg text-gray-500 mb-1">{report.keyword}</h2>
      <div className={`text-7xl font-extrabold ${colorClass}`}>
        {formatScore(report.feasibility_score)}
      </div>
      <p className="text-sm text-gray-500 mt-1">out of 100</p>

      <div className="flex items-center justify-center gap-3 mt-4">
        <DifficultyBadge difficulty={report.difficulty} />
        <RegimeBadge regime={report.regime} />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 max-w-md mx-auto text-center">
        <div>
          <p className="text-2xl font-bold text-gray-800">{report.demand_score}</p>
          <p className="text-xs text-gray-500">Demand</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">{report.competition_score}</p>
          <p className="text-xs text-gray-500">Competition</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">{formatPressure(report.constraint_pressure)}</p>
          <p className="text-xs text-gray-500">Pressure</p>
        </div>
      </div>
    </div>
  );
}

// ─── Success Band ───

function SuccessBandSection({ report }: { report: ReportType }) {
  const band = report.success_band;
  return (
    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Outcome Range
      </h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs text-gray-400 mb-1">Worst Case</p>
          <p className="text-xl font-bold text-red-500">{band.worst_case}</p>
        </div>
        <div className="border-x border-gray-200">
          <p className="text-xs text-gray-400 mb-1">Expected</p>
          <p className="text-xl font-bold text-gray-800">{band.expected}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Best Case</p>
          <p className="text-xl font-bold text-green-600">{band.best_case}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400 text-center mt-3">
        Estimated time to traction: {formatTimeRange(report.time_range_min, report.time_range_max)}
      </p>
    </div>
  );
}

// ─── Key Constraints ───

function ConstraintsSection({ constraints }: { constraints: Constraint[] }) {
  // Show top 5 sorted by severity
  const severityOrder = { high: 0, medium: 1, low: 2 };
  const sorted = [...constraints]
    .sort((a, b) => (severityOrder[a.severity] ?? 1) - (severityOrder[b.severity] ?? 1))
    .slice(0, 5);

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Key Constraints
      </h3>
      <div className="space-y-3">
        {sorted.map((c, i) => {
          const sev = SEVERITY_STYLES[c.severity] ?? SEVERITY_STYLES.medium;
          return (
            <div key={i} className="flex gap-3 items-start">
              <span className={`shrink-0 mt-0.5 inline-block px-2 py-0.5 rounded text-xs font-medium ${sev.bg} ${sev.text}`}>
                {c.severity}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800">
                  {humanize(c.type)}
                  <span className="ml-2 text-xs text-gray-400">{c.category}</span>
                </p>
                <p className="text-sm text-gray-600">{c.description}</p>
                <p className="text-xs text-gray-400 mt-0.5">{c.implication}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Concrete Requirements ───

function RequirementsSection({ requirements }: { requirements: ConcreteRequirement[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        What You Need to Do
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {requirements.map((req, i) => (
          <div key={i} className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
            <p className="text-xs font-medium text-blue-500 uppercase">{req.area}</p>
            <p className="text-sm font-semibold text-gray-900 mt-1">{req.target}</p>
            <p className="text-xs text-gray-500 mt-1">{req.rationale}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Failure Modes ───

function FailureModesSection({ modes }: { modes: FailureMode[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Failure Risks
      </h3>
      <div className="space-y-4">
        {modes.map((fm, i) => {
          const sev = SEVERITY_STYLES[fm.severity] ?? SEVERITY_STYLES.medium;
          return (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="px-4 py-3 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${sev.bg} ${sev.text}`}>
                    {fm.severity}
                  </span>
                  <span className="text-sm font-medium text-gray-800">{humanize(fm.mode)}</span>
                </div>
                <span className="text-sm font-bold text-gray-600">
                  {Math.round(fm.probability * 100)}% likely
                </span>
              </div>
              <div className="px-4 py-3">
                <p className="text-sm text-gray-600">{fm.description}</p>
                <div className="mt-2">
                  <p className="text-xs font-medium text-gray-500 mb-1">Mitigation</p>
                  <ul className="space-y-0.5">
                    {fm.mitigation.slice(0, 2).map((m, j) => (
                      <li key={j} className="text-xs text-gray-500 flex gap-1.5">
                        <span className="text-green-500 mt-px shrink-0">&#10003;</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Conditions ───

function ConditionsSection({ conditions }: { conditions: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Conditions for Success
      </h3>
      <ul className="space-y-2">
        {conditions.map((c, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-700">
            <span className="text-blue-500 mt-0.5 shrink-0">&#8226;</span>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
