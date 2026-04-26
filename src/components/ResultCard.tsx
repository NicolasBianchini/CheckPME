import { getRiskLabel } from "@/lib/calculateRisk";
import { riskSummaryByLevel } from "@/lib/diagnosticContent";
import { DiagnosticResult } from "@/types/diagnostic";
import { RiskBadge } from "@/components/RiskBadge";

export function ResultCard({ result }: { result: DiagnosticResult }) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 shadow-panel">
      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 p-6 lg:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Seu resultado
            </p>
            <RiskBadge level={result.level} />
            <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
              Perfil {result.profileLabel}
            </span>
          </div>

          <div>
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
              {getRiskLabel(result.level)}
            </h2>
            <p className="mt-3 max-w-2xl text-lg font-semibold text-slate-800">
              {result.reportHeadline}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {riskSummaryByLevel[result.level]}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Resumo geral
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">{result.executiveSummary}</p>
            </div>

            <div className="rounded-[1.6rem] border border-brand-100 bg-brand-50/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Ações rápidas
              </p>
              <div className="mt-3 space-y-2">
                {result.quickWins.slice(0, 3).map((item) => (
                  <p key={item} className="text-sm leading-7 text-slate-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 p-6 text-white lg:p-8">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <MetricCard
              label="Pontuação final"
              value={`${result.totalScore} / ${result.maxScore}`}
              dark
            />
            <MetricCard
              label="Questionário concluído"
              value={`${result.completionRate}%`}
              dark
            />
            <MetricCard
              label="Módulos em alerta"
              value={`${result.recommendations.length}`}
              dark
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  dark
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-[1.6rem] border p-5",
        dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"
      ].join(" ")}
    >
      <p className={dark ? "text-sm text-slate-300" : "text-sm text-slate-500"}>{label}</p>
      <p className={dark ? "mt-2 text-2xl font-bold text-white" : "mt-2 text-2xl font-bold text-slate-950"}>
        {value}
      </p>
    </div>
  );
}
