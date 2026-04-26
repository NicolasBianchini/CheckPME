interface ProgressBarProps {
  current: number;
  total: number;
  moduleTitle: string;
  moduleStep: number;
  moduleTotal: number;
}

export function ProgressBar({
  current,
  total,
  moduleTitle,
  moduleStep,
  moduleTotal
}: ProgressBarProps) {
  const progress = total === 0 ? 0 : Math.round(((current + 1) / total) * 100);

  return (
    <div className="space-y-4 rounded-[1.8rem] border border-slate-200/80 bg-white/90 p-5 shadow-soft">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
            Diagnóstico em andamento
          </p>
          <h2 className="mt-1 text-lg font-bold text-slate-900">{moduleTitle}</h2>
          <p className="mt-2 text-sm text-slate-600">
            Pergunta {moduleStep} de {moduleTotal} neste tema
          </p>
        </div>
        <p className="text-sm font-medium text-slate-600">
          Pergunta {Math.min(current + 1, total)} de {total}
        </p>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-col gap-1 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>{progress}% concluído. Responda com calma para receber um resultado mais útil.</p>
        <p className="font-medium text-slate-700">
          Tema atual: {moduleTitle}
        </p>
      </div>
    </div>
  );
}
