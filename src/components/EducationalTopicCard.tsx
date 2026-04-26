import { BookOpen, Lightbulb, Sparkles } from "lucide-react";
import { EducationalTopic } from "@/types/diagnostic";

export function EducationalTopicCard({ topic }: { topic: EducationalTopic }) {
  return (
    <article className="rounded-[1.8rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
        <BookOpen className="h-7 w-7 stroke-[2]" />
      </div>

      <h3 className="text-2xl font-bold text-slate-950">{topic.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{topic.explanation}</p>

      <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-sky-900">
          <Lightbulb className="h-4 w-4" />
          Exemplo do dia a dia
        </div>
        <p className="mt-2 text-sm leading-7 text-sky-950">{topic.everydayExample}</p>
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Sparkles className="h-4 w-4" />
          Dicas rápidas
        </div>
        <div className="mt-3 space-y-2">
          {topic.quickTips.map((tip) => (
            <p key={tip} className="text-sm leading-7 text-slate-700">
              {tip}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
