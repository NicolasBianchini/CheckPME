import type { ReactNode } from "react";
import { ArrowRight, BookMarked, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { EducationalTopicCard } from "@/components/EducationalTopicCard";
import { LearningResourceCard } from "@/components/LearningResourceCard";
import { educationalTopics, learningResources } from "@/data/learningResources";

export default function LearnIndexPage() {
  const featuredResources = learningResources.slice(0, 4);

  return (
    <div className="px-6 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="grid gap-6 rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-panel lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Área Aprenda
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black text-slate-950 sm:text-5xl">
              Entenda cada tema com calma e descubra o que fazer na prática.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Aqui você encontra explicações simples, situações do dia a dia, materiais
              recomendados e orientações para casa ou pequena empresa.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center rounded-2xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
              >
                Fazer diagnóstico
              </Link>
              <Link
                href="/#modulos"
                className="inline-flex items-center justify-center rounded-2xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
              >
                Ver visão geral
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MiniFeature
              icon={<BookMarked className="h-5 w-5" />}
              title="Estude por assunto"
              text="Abra só o tema que mais faz sentido para seu momento."
            />
            <MiniFeature
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Saia com ação prática"
              text="Cada página mostra sinais de alerta, erros comuns e próximos passos."
            />
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Biblioteca de temas
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">
                Quatro temas centrais do portal
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Você pode estudar os temas antes do diagnóstico ou usar o resultado para vir
              direto ao assunto que mais precisa de atenção.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {educationalTopics.map((topic) => (
              <EducationalTopicCard key={topic.moduleId} topic={topic} />
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Para começar
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">
                Leituras e vídeos que ajudam logo de início
              </h2>
            </div>
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
            >
              Fazer diagnóstico primeiro
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredResources.map((resource) => (
              <LearningResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function MiniFeature({
  icon,
  title,
  text
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
        {icon}
      </div>
      <p className="mt-4 text-lg font-bold text-slate-950">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}
