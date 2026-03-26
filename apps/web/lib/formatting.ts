/** Format a number as a percentage string */
export function pct(value: number): string {
  return `${Math.round(value)}%`;
}

/** Format a feasibility score with one decimal */
export function formatScore(score: number): string {
  return score.toFixed(1);
}

/** Format a constraint pressure value */
export function formatPressure(pressure: number): string {
  return `${pressure.toFixed(1)}x`;
}

/** Format a time range as "X-Y months" */
export function formatTimeRange(min: number, max: number): string {
  if (min === max) return `${min} months`;
  return `${min}-${max} months`;
}

/** Capitalize first letter, replace underscores with spaces */
export function humanize(value: string): string {
  return value.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

/** Difficulty label colors (Tailwind classes) */
export const DIFFICULTY_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  easy:      { bg: "bg-green-100", text: "text-green-800", label: "Easy" },
  medium:    { bg: "bg-amber-100", text: "text-amber-800", label: "Medium" },
  hard:      { bg: "bg-red-100",   text: "text-red-800",   label: "Hard" },
  very_hard: { bg: "bg-purple-100", text: "text-purple-800", label: "Very Hard" },
};

/** Regime label colors (Tailwind classes) */
export const REGIME_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  emerging:  { bg: "bg-blue-100",   text: "text-blue-800",   label: "Emerging" },
  trending:  { bg: "bg-green-100",  text: "text-green-800",  label: "Trending" },
  stable:    { bg: "bg-gray-100",   text: "text-gray-700",   label: "Stable" },
  saturated: { bg: "bg-amber-100",  text: "text-amber-800",  label: "Saturated" },
  declining: { bg: "bg-red-100",    text: "text-red-800",    label: "Declining" },
};

/** Score color based on value */
export function scoreColor(score: number): string {
  if (score >= 75) return "text-green-600";
  if (score >= 50) return "text-amber-600";
  if (score >= 25) return "text-red-500";
  return "text-red-700";
}

/** Severity badge colors */
export const SEVERITY_STYLES: Record<string, { bg: string; text: string }> = {
  high:   { bg: "bg-red-100", text: "text-red-700" },
  medium: { bg: "bg-amber-100", text: "text-amber-700" },
  low:    { bg: "bg-green-100", text: "text-green-700" },
};
