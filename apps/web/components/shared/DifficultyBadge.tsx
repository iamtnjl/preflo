import { DIFFICULTY_STYLES } from "@/lib/formatting";

interface DifficultyBadgeProps {
  difficulty: string;
  className?: string;
}

export default function DifficultyBadge({ difficulty, className = "" }: DifficultyBadgeProps) {
  const style = DIFFICULTY_STYLES[difficulty] ?? DIFFICULTY_STYLES.medium;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${style.bg} ${style.text} ${className}`}>
      {style.label}
    </span>
  );
}
