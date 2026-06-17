"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Download, Printer, RotateCcw } from "lucide-react";
import { Button } from "@/components/Button";
import { LearningResourceCard } from "@/components/LearningResourceCard";
import { RecommendationCard } from "@/components/RecommendationCard";
import { ResultCard } from "@/components/ResultCard";
import { RiskBadge } from "@/components/RiskBadge";
import { learningResources, topicDetailPages } from "@/data/learningResources";
import { modules } from "@/data/modules";
import {
  PROFILE_STORAGE_KEY,
  STORAGE_KEY,
  riskSummaryByLevel
} from "@/lib/diagnosticContent";
import { buildDiagnosticResult } from "@/lib/calculateRisk";
import { parseStoredAnswers, parseStoredProfile } from "@/lib/diagnosticStorage";
import { AnswersMap, DiagnosticResult, UserProfile } from "@/types/diagnostic";

export default function ResultPage() {
  const guidePdfPath = "/Guia_Pratico_Seguranca_Informacao_Usuarios_e_PMEs.pdf";
  const router = useRouter();
  const [answers, setAnswers] = useState<AnswersMap | null>(null);
  const [profile, setProfile] = useState<UserProfile>("person");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const parsedAnswers = parseStoredAnswers(window.localStorage.getItem(STORAGE_KEY));
    const parsedProfile = parseStoredProfile(window.localStorage.getItem(PROFILE_STORAGE_KEY));
    setAnswers(Object.keys(parsedAnswers).length > 0 ? parsedAnswers : null);
    setProfile(parsedProfile);
    setIsHydrated(true);
  }, []);

  const result = useMemo<DiagnosticResult | null>(() => {
    if (!answers) return null;
    return buildDiagnosticResult(answers, profile);
  }, [answers, profile]);

  if (!isHydrated) {
    return null;
  }

  if (answers === null) {
    return (
      <div className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 text-center shadow-panel">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
            Relatório indisponível
          </p>
          <h1 className="mt-4 text-3xl font-black text-slate-950">
            Nenhuma resposta foi encontrada.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Comece as perguntas para ver seu resultado e receber orientações de acordo com os
            pontos que mais precisam de cuidado.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/diagnostico">Iniciar diagnóstico</Button>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  function handleRestartDiagnostic() {
    window.localStorage.removeItem(STORAGE_KEY);
    router.push("/diagnostico");
  }

  function handlePrintReport() {
    window.print();
  }

  const recommendedResources = learningResources.filter((resource) =>
    result.criticalModules.some((module) => module.moduleId === resource.moduleId)
  );
  const topStrength = result.strengths[0];
  const firstCriticalTopic = result.recommendations[0]
    ? topicDetailPages.find((item) => item.moduleId === result.recommendations[0].moduleId)
    : null;

  return (
    <div className="px-6 py-8 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="no-print flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Relatório para perfil: {result.profileLabel}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{result.profileSummary}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary" onClick={handleRestartDiagnostic} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Refazer
            </Button>
            <Button href={guidePdfPath} download className="gap-2">
              <Download className="h-4 w-4" />
              Baixar guia prático
            </Button>
            <Button onClick={handlePrintReport} className="gap-2">
              <Printer className="h-4 w-4" />
              Imprimir relatório
            </Button>
          </div>
        </div>

        <main className="print-report space-y-6">
          <ResultCard result={result} />

        <section className="grid gap-4 lg:grid-cols-3">
          <ExecutivePanel
            title="Maior ponto de atenção"
            tone="danger"
            text={`Seu maior ponto de atenção está em ${result.criticalModules
              .map((item) => item.title)
              .join(" e ")}.`}
          />
          <ExecutivePanel
            title="Impactos mais prováveis"
            tone="warning"
            text={result.exposureAreas[0] ?? riskSummaryByLevel[result.level]}
          />
          <ExecutivePanel
            title="Primeiro passo recomendado"
            tone="success"
            text={result.priorityActions[0]}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                  Mapa do diagnóstico
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Onde você está melhor e onde precisa cuidar mais
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {result.moduleScores.map((moduleScore) => {
                const moduleMeta = modules.find((module) => module.id === moduleScore.moduleId);
                const width = (moduleScore.score / moduleScore.maxScore) * 100;

                return (
                  <article
                    key={moduleScore.moduleId}
                    className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{moduleScore.title}</h3>
                        <p className="text-sm text-slate-600">
                          {moduleMeta?.learningFocus}
                        </p>
                      </div>
                      <RiskBadge level={moduleScore.riskLevel} />
                    </div>

                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 via-amber-400 to-rose-500"
                        style={{ width: `${width}%` }}
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                      <span>Pontos nesse tema</span>
                      <span className="font-semibold text-slate-900">
                        {moduleScore.score} / {moduleScore.maxScore}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <InfoPanel
              title="Resumo do relatório"
              items={[
                `Você respondeu ${result.answeredQuestions} perguntas e concluiu ${result.completionRate}% do diagnóstico.`,
                `Seu nível atual ficou em ${getRiskLabelText(result.level)}.`,
                result.reportHeadline
              ]}
            />

            <InfoPanel
              title="Pontos fortes"
              items={
                result.strengths.length > 0
                  ? result.strengths.map(
                      (item) => `${item.title}: aqui você mostrou cuidados melhores.`
                    )
                  : ["Seu resultado mostra pontos para melhorar em todos os temas."]
              }
            />

            <InfoPanel
              title="Pontos de atenção"
              items={result.criticalModules.map(
                (item) =>
                  `${item.title}: seu maior ponto de atenção está neste tema neste momento.`
              )}
            />

            <InfoPanel
              title="O que fazer nesta semana"
              items={result.quickWins}
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Leitura do seu cenário
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              O que seu resultado quer dizer, em linguagem simples
            </h2>
            <div className="mt-5 space-y-4">
              <ReportLine
                label="Seu ponto mais forte"
                text={
                  topStrength
                    ? `${topStrength.title} foi o tema em que você mostrou mais cuidado até aqui.`
                    : "Ainda não apareceu um tema claramente forte no resultado."
                }
              />
              <ReportLine
                label="Seu maior risco hoje"
                text={result.exposureAreas[0] ?? riskSummaryByLevel[result.level]}
              />
              <ReportLine
                label="Vale olhar agora"
                text={`Comece estudando ${result.criticalModules
                  .map((item) => item.title)
                  .join(" e ")} para corrigir o que tem mais chance de gerar problema.`}
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-emerald-50 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Próximo caminho
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Você pode seguir por dois caminhos a partir daqui
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <PathChoice
                title="Estudar o tema mais crítico"
                text="Abra a área Aprenda e veja explicações, checklist e materiais ligados ao seu maior ponto de atenção."
                href={firstCriticalTopic ? `/aprenda/${firstCriticalTopic.slug}` : "/aprenda"}
                linkLabel="Abrir tema"
              />
              <PathChoice
                title="Rever depois de ajustar"
                text="Aplique duas ou três mudanças simples e refaça o diagnóstico para comparar sua evolução."
                href="/diagnostico"
                linkLabel="Refazer perguntas"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Próximas leituras do guia
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Recomendações de acordo com os temas que pedem mais atenção
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {result.recommendations.length > 0 ? (
              result.recommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.moduleId}
                  recommendation={recommendation}
                />
              ))
            ) : (
              <div className="rounded-[1.8rem] border border-emerald-200 bg-emerald-50 p-6 text-sm leading-7 text-emerald-900">
                Seu resultado não mostrou nenhum tema muito crítico. Mesmo assim, vale revisar
                os quatro temas do guia para manter bons cuidados no dia a dia.
              </div>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Aprenda mais
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Materiais para ajudar você a melhorar nos temas mais sensíveis
            </h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Separei leituras e vídeos oficiais para você entender melhor o assunto e colocar
              em prática as mudanças mais importantes.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {recommendedResources.length > 0 ? (
              recommendedResources.map((resource) => (
                <LearningResourceCard key={resource.id} resource={resource} />
              ))
            ) : (
              learningResources.slice(0, 4).map((resource) => (
                <LearningResourceCard key={resource.id} resource={resource} />
              ))
            )}
          </div>

          <div className="flex justify-start">
            <Link
              href="/aprenda"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
            >
              Ver toda a biblioteca de temas
            </Link>
          </div>
          <div className="flex justify-start">
            <Button href={guidePdfPath} download variant="secondary">
              Baixar guia completo em PDF
            </Button>
          </div>
        </section>

        <section className="no-print rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Ações finais
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Continue aprendendo ou refaça as perguntas quando quiser.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Este resultado serve como uma visão inicial para ajudar pessoas e pequenas
                empresas a entenderem melhor seus cuidados com segurança digital.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" onClick={handleRestartDiagnostic}>
                Refazer diagnóstico
              </Button>
              <Button href={guidePdfPath} download>
                Baixar guia prático
              </Button>
              <Button variant="ghost" onClick={handlePrintReport}>
                Imprimir relatório
              </Button>
            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}

function getRiskLabelText(level: DiagnosticResult["level"]) {
  if (level === "low") return "baixo risco";
  if (level === "medium") return "médio risco";
  return "alto risco";
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-[1.8rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p
            key={item}
            className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

function ReportLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-slate-700">{text}</p>
    </div>
  );
}

function PathChoice({
  title,
  text,
  href,
  linkLabel
}: {
  title: string;
  text: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4">
      <p className="text-base font-bold text-slate-950">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
      <Link
        href={href}
        className="mt-4 inline-flex text-sm font-semibold text-brand-700 transition hover:text-brand-800"
      >
        {linkLabel}
      </Link>
    </div>
  );
}

function ExecutivePanel({
  title,
  text,
  tone
}: {
  title: string;
  text: string;
  tone: "danger" | "warning" | "success";
}) {
  const toneStyles = {
    danger: "border-rose-200 bg-rose-50 text-rose-950",
    warning: "border-amber-200 bg-amber-50 text-amber-950",
    success: "border-emerald-200 bg-emerald-50 text-emerald-950"
  };

  return (
    <article className={`rounded-[1.8rem] border p-6 shadow-soft ${toneStyles[tone]}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em]">{title}</p>
      <p className="mt-4 text-base leading-7">{text}</p>
    </article>
  );
}
