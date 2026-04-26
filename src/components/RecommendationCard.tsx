import Link from "next/link";
import { topicDetailPages } from "@/data/learningResources";
import { Recommendation } from "@/types/diagnostic";

export function RecommendationCard({
  recommendation
}: {
  recommendation: Recommendation;
}) {
  const topicPage = topicDetailPages.find(
    (item) => item.moduleId === recommendation.moduleId
  );

  return (
    <article className="rounded-[1.8rem] border border-slate-200/80 bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Guia prático
          </p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">{recommendation.title}</h3>
          <p className="mt-3 text-sm font-medium text-slate-500">
            {recommendation.urgencyLabel}
          </p>
        </div>
        <div className="rounded-2xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
          Módulo {recommendation.guideModule}
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">{recommendation.summary}</p>
      <p className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-sm leading-7 text-amber-950">
        <span className="font-semibold">O que pode acontecer:</span> {recommendation.impact}
      </p>
      <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
        <span className="font-semibold text-slate-900">Próximo passo:</span>{" "}
        {recommendation.nextStep}
      </p>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">Plano da primeira semana</p>
        <div className="mt-3 space-y-2">
          {recommendation.firstWeekPlan.map((item) => (
            <p key={item} className="text-sm leading-7 text-slate-600">
              {item}
            </p>
          ))}
        </div>
      </div>
      {topicPage ? (
        <Link
          href={`/aprenda/${topicPage.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-brand-700 transition hover:text-brand-800"
        >
          Abrir página completa deste tema
        </Link>
      ) : null}
    </article>
  );
}
