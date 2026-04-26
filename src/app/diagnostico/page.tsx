"use client";

import { Building2, UserRound } from "lucide-react";
import { Button } from "@/components/Button";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { answerOptions, profileOptions } from "@/lib/diagnosticContent";
import { useDiagnostic } from "@/hooks/useDiagnostic";
import { UserProfile } from "@/types/diagnostic";

export default function DiagnosticPage() {
  const {
    currentIndex,
    currentQuestion,
    currentModule,
    currentModuleIndex,
    currentModuleQuestions,
    profile,
    selectedValue,
    answeredCount,
    isLastQuestion,
    moduleCompletion,
    isHydrated,
    setProfile,
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
      <div className="mx-auto max-w-6xl space-y-6">
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

        <section className="rounded-[1.8rem] border border-slate-200/80 bg-white/90 p-5 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Perfil do diagnóstico
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Escolha o contexto para o relatório adaptar os próximos passos.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[28rem]">
              {profileOptions.map((option) => {
                const isSelected = profile === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setProfile(option.value)}
                    className={[
                      "flex min-h-24 items-start gap-3 rounded-2xl border p-4 text-left transition",
                      isSelected
                        ? "border-brand-400 bg-brand-50 shadow-soft"
                        : "border-slate-200 bg-white hover:border-brand-200 hover:bg-slate-50"
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                        isSelected ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"
                      ].join(" ")}
                    >
                      <ProfileIcon profile={option.value} />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-slate-950">
                        {option.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-600">
                        {option.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <ProgressBar
          current={currentIndex}
          total={questions.length}
          moduleTitle={currentModule.title}
          moduleStep={currentModuleIndex + 1}
          moduleTotal={currentModuleQuestions.length}
        />

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(20rem,0.85fr)]">
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

function ProfileIcon({ profile }: { profile: UserProfile }) {
  if (profile === "business") {
    return <Building2 className="h-5 w-5" aria-hidden="true" />;
  }

  return <UserRound className="h-5 w-5" aria-hidden="true" />;
}
