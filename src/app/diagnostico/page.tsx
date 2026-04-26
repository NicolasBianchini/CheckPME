"use client";

import { Button } from "@/components/Button";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { answerOptions } from "@/lib/diagnosticContent";
import { useDiagnostic } from "@/hooks/useDiagnostic";

export default function DiagnosticPage() {
  const {
    currentIndex,
    currentQuestion,
    currentModule,
    currentModuleIndex,
    currentModuleQuestions,
    selectedValue,
    answeredCount,
    isLastQuestion,
    moduleCompletion,
    isHydrated,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetDiagnostic
  } = useDiagnostic();

  if (!isHydrated) {
    return null;
  }

  if (!currentModule) {
    return null;
  }

  return (
    <div className="px-6 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
            CheckPME Segura
          </p>
          <h1 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Perguntas rápidas sobre sua segurança digital
          </h1>
          <p className="max-w-3xl text-base leading-7 text-slate-600">
            Responda com sinceridade para receber um resultado mais útil. No fim, você vai ver
            onde está indo bem e o que vale a pena melhorar primeiro.
          </p>
        </div>

        <ProgressBar
          current={currentIndex}
          total={questions.length}
          moduleTitle={currentModule.title}
          moduleStep={currentModuleIndex + 1}
          moduleTotal={currentModuleQuestions.length}
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div key={currentQuestion.id}>
            <QuestionCard
              question={currentQuestion}
              moduleTitle={currentModule.title}
              moduleShortTitle={currentModule.shortTitle}
              questionNumber={currentModuleIndex + 1}
              totalQuestions={currentModuleQuestions.length}
              selectedValue={selectedValue}
              options={answerOptions}
              onSelect={selectAnswer}
            />
          </div>

          <aside className="space-y-5">
            <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Como responder
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Sim</span> indica que esse
                  cuidado já está presente com frequência.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Às vezes</span> mostra que
                  existe prática parcial, mas ainda irregular.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Não</span> sinaliza um ponto
                  de atenção prioritário para o relatório final.
                </p>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Andamento
              </p>
              <p className="mt-3 text-3xl font-black text-slate-950">
                {answeredCount}/{questions.length}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Suas respostas ficam salvas no navegador para você continuar de onde parou.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Visão por temas
              </p>
              <div className="mt-4 space-y-3">
                {moduleCompletion.map((module) => (
                  <div
                    key={module.moduleId}
                    className={[
                      "rounded-2xl border px-4 py-3 text-sm",
                      module.isCurrent
                        ? "border-brand-200 bg-brand-50"
                        : "border-slate-200 bg-slate-50"
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-slate-900">{module.title}</span>
                      <span className="text-slate-600">
                        {module.answered}/{module.total}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button variant="secondary" onClick={previousQuestion} disabled={currentIndex === 0}>
            Voltar
          </Button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="ghost" onClick={resetDiagnostic}>
              Limpar respostas
            </Button>
            <Button onClick={nextQuestion} disabled={!selectedValue}>
              {isLastQuestion ? "Ver relatório" : "Próxima pergunta"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
