import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  Building2,
  CheckCircle2,
  CircleOff,
} from "lucide-react";
import { Button } from "@/components/Button";
import { LearningResourceCard } from "@/components/LearningResourceCard";
import { learningResources, topicDetailPages } from "@/data/learningResources";
import { modules } from "@/data/modules";

interface TopicPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = topicDetailPages.find((item) => item.slug === slug);

  if (!topic) {
    notFound();
  }

  const moduleMeta = modules.find((module) => module.id === topic.moduleId);
  const resources = learningResources.filter(
    (resource) => resource.moduleId === topic.moduleId
  );

  return (
    <div className="px-6 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>

          <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Tema {moduleMeta?.guideModule}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black text-slate-950 sm:text-5xl">
              {topic.pageTitle}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{topic.intro}</p>
            <div className="mt-6 rounded-[1.6rem] border border-brand-100 bg-brand-50 px-5 py-4 text-sm leading-7 text-brand-950">
              <span className="font-semibold">Por que isso importa:</span> {topic.whyItMatters}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TopicBlock
            icon={<AlertTriangle className="h-5 w-5" />}
            title="Sinais de alerta"
            items={topic.warningSigns}
            tone="warning"
          />
          <TopicBlock
            icon={<CheckCircle2 className="h-5 w-5" />}
            title="O que fazer na prática"
            items={topic.practicalActions}
            tone="success"
          />
          <TopicBlock
            icon={<Building2 className="h-5 w-5" />}
            title="Dicas para pequenas empresas"
            items={topic.smallBusinessTips}
            tone="brand"
          />
          <TopicBlock
            icon={<CircleOff className="h-5 w-5" />}
            title="Erros comuns"
            items={topic.commonMistakes}
            tone="neutral"
          />
        </div>

        <section className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Materiais recomendados
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Leituras e vídeos para se aprofundar neste tema
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {resources.map((resource) => (
              <LearningResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Próximo passo
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Quer ver como esse tema aparece no seu resultado?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Faça ou refaça as perguntas para descobrir se este assunto merece mais atenção
                no seu caso.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/diagnostico">Responder perguntas</Button>
              <Button href="/resultado" variant="secondary">
                Ver resultado
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function TopicBlock({
  title,
  items,
  icon,
  tone
}: {
  title: string;
  items: string[];
  icon: ReactNode;
  tone: "warning" | "success" | "brand" | "neutral";
}) {
  const tones = {
    warning: "border-amber-200 bg-amber-50 text-amber-950",
    success: "border-emerald-200 bg-emerald-50 text-emerald-950",
    brand: "border-brand-200 bg-brand-50 text-brand-950",
    neutral: "border-slate-200 bg-slate-50 text-slate-900"
  };

  return (
    <section className={`rounded-[1.8rem] border p-6 shadow-soft ${tones[tone]}`}>
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-white/70 p-3">{icon}</div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <p key={item} className="rounded-2xl bg-white/60 px-4 py-4 text-sm leading-7">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
