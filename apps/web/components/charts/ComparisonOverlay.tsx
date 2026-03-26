"use client";

import type {
  ComparisonTableRow,
  CompareRecommendation,
  CompareTradeoff,
} from "@preflo/shared";

interface ComparisonOverlayProps {
  table: ComparisonTableRow[];
  recommendation: CompareRecommendation;
  tradeoffs: CompareTradeoff[];
}

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "text-green-700 bg-green-100",
  medium: "text-yellow-700 bg-yellow-100",
  hard: "text-red-700 bg-red-100",
  very_hard: "text-purple-700 bg-purple-100",
};

const REGIME_COLORS: Record<string, string> = {
  emerging: "text-blue-700 bg-blue-100",
  trending: "text-green-700 bg-green-100",
  stable: "text-gray-700 bg-gray-100",
  saturated: "text-yellow-700 bg-yellow-100",
  declining: "text-red-700 bg-red-100",
};

export default function ComparisonOverlay({
  table,
  recommendation,
  tradeoffs,
}: ComparisonOverlayProps) {
  return (
    <div className="w-full space-y-6">
      {/* Recommendation banner */}
      {recommendation.recommended_index !== null && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm font-medium text-blue-800 mb-1">Recommended</p>
          <p className="text-lg font-semibold text-blue-900">
            {table.find((r) => r.index === recommendation.recommended_index)?.label}
          </p>
          <p className="text-sm text-blue-700 mt-1">{recommendation.explanation}</p>
        </div>
      )}

      {/* Comparison table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-3 text-gray-500 font-medium">Scenario</th>
              <th className="text-center py-3 px-3 text-gray-500 font-medium">Score</th>
              <th className="text-center py-3 px-3 text-gray-500 font-medium">Difficulty</th>
              <th className="text-center py-3 px-3 text-gray-500 font-medium">Regime</th>
              <th className="text-center py-3 px-3 text-gray-500 font-medium">Demand</th>
              <th className="text-center py-3 px-3 text-gray-500 font-medium">Competition</th>
              <th className="text-center py-3 px-3 text-gray-500 font-medium">Pressure</th>
              <th className="text-center py-3 px-3 text-gray-500 font-medium">Timeline</th>
              <th className="text-center py-3 px-3 text-gray-500 font-medium">Barriers</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row) => {
              const isRecommended = row.index === recommendation.recommended_index;
              return (
                <tr
                  key={row.index}
                  className={`border-b border-gray-100 ${isRecommended ? "bg-blue-50/50" : ""}`}
                >
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      {isRecommended && (
                        <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      )}
                      <span className="font-medium text-gray-900">{row.label}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-3">
                    <span className="text-lg font-bold text-gray-900">{row.feasibility_score}</span>
                  </td>
                  <td className="text-center py-3 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        DIFFICULTY_COLORS[row.difficulty] ?? "text-gray-700 bg-gray-100"
                      }`}
                    >
                      {row.difficulty.replace("_", " ")}
                    </span>
                  </td>
                  <td className="text-center py-3 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        REGIME_COLORS[row.regime] ?? "text-gray-700 bg-gray-100"
                      }`}
                    >
                      {row.regime}
                    </span>
                  </td>
                  <td className="text-center py-3 px-3 text-gray-700">{row.demand_score}</td>
                  <td className="text-center py-3 px-3 text-gray-700">{row.competition_score}</td>
                  <td className="text-center py-3 px-3 text-gray-700">{row.constraint_pressure}</td>
                  <td className="text-center py-3 px-3 text-gray-700">{row.time_range}</td>
                  <td className="text-center py-3 px-3">
                    {row.top_constraints.length > 0 ? (
                      <div className="flex flex-wrap gap-1 justify-center">
                        {row.top_constraints.map((c) => (
                          <span
                            key={c}
                            className="text-xs bg-red-50 text-red-700 px-1.5 py-0.5 rounded"
                          >
                            {c.replace(/_/g, " ")}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">none</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Score bar visualization */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-500">Score Comparison</h4>
        {table.map((row) => {
          const isRecommended = row.index === recommendation.recommended_index;
          return (
            <div key={row.index} className="flex items-center gap-3">
              <span className="w-32 text-sm text-gray-700 truncate">{row.label}</span>
              <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    isRecommended ? "bg-blue-500" : "bg-gray-400"
                  }`}
                  style={{ width: `${row.feasibility_score}%` }}
                />
              </div>
              <span className="w-10 text-right text-sm font-medium text-gray-900">
                {row.feasibility_score}
              </span>
            </div>
          );
        })}
      </div>

      {/* Tradeoffs */}
      {tradeoffs.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-500">Trade-offs to Consider</h4>
          {tradeoffs.map((t) => (
            <div key={t.index} className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-medium text-amber-800">{t.label}</p>
              <ul className="mt-1 space-y-0.5">
                {t.advantages_over_recommended.map((adv, i) => (
                  <li key={i} className="text-sm text-amber-700">
                    + {adv}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
