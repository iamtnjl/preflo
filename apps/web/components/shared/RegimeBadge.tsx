import { REGIME_STYLES } from "@/lib/formatting";

interface RegimeBadgeProps {
  regime: string;
  className?: string;
}

export default function RegimeBadge({ regime, className = "" }: RegimeBadgeProps) {
  const style = REGIME_STYLES[regime] ?? REGIME_STYLES.stable;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${style.bg} ${style.text} ${className}`}>
      {style.label}
    </span>
  );
}
