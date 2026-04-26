import { getRiskLabel } from "@/lib/calculateRisk";
import { RiskLevel } from "@/types/diagnostic";

const badgeStyles: Record<RiskLevel, string> = {
  low: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  medium: "bg-amber-100 text-amber-900 ring-amber-200",
  high: "bg-rose-100 text-rose-900 ring-rose-200"
};

export function RiskBadge({ level }: { level: RiskLevel }) {
  return (
    <span
      className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ring-1 ${badgeStyles[level]}`}
    >
      {getRiskLabel(level)}
    </span>
  );
}
