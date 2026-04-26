import { AnswerOption, AnswerValue, Question } from "@/types/diagnostic";

interface QuestionCardProps {
  question: Question;
  moduleTitle: string;
  moduleShortTitle: string;
  questionNumber: number;
  totalQuestions: number;
  selectedValue?: AnswerValue;
  options: AnswerOption[];
  onSelect: (value: AnswerValue) => void;
}

export function QuestionCard({
  question,
  moduleTitle,
  moduleShortTitle,
  questionNumber,
  totalQuestions,
  selectedValue,
  options,
  onSelect
}: QuestionCardProps) {
  return (
    <section className="panel-enter rounded-[2rem] border border-slate-200/80 bg-white/95 p-7 shadow-panel lg:p-10">
      <div className="mb-9 space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
            {moduleTitle}
          </div>
          <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            {moduleShortTitle} • pergunta {questionNumber}/{totalQuestions}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Pergunta atual
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
            {question.prompt}
          </h3>
        </div>
        <p className="max-w-3xl text-base leading-7 text-slate-600">{question.helperText}</p>
        <p className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm leading-7 text-sky-900">
          Pense no que acontece no seu dia a dia, e não no cenário ideal. Isso ajuda o
          resultado a ficar mais próximo da realidade.
        </p>
      </div>

      <div className="grid gap-5">
        {options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={[
                "rounded-[1.4rem] border p-5 text-left transition duration-200 lg:p-6",
                isSelected
                  ? "border-brand-400 bg-brand-50 shadow-soft"
                  : "border-slate-200 bg-white hover:border-brand-200 hover:bg-slate-50"
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-slate-900">{option.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{option.description}</p>
                </div>
                <span
                  className={[
                    "mt-1 flex h-6 w-6 items-center justify-center rounded-full border-2 text-[10px] font-bold",
                    isSelected
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-slate-300 text-transparent"
                  ].join(" ")}
                >
                  •
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
