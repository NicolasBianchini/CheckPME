import { ExternalLink, FileText, PlayCircle } from "lucide-react";
import { LearningResource } from "@/types/diagnostic";

export function LearningResourceCard({
  resource
}: {
  resource: LearningResource;
}) {
  const isVideo = resource.type === "video";

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[1.8rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-panel"
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={[
            "flex h-12 w-12 items-center justify-center rounded-2xl",
            isVideo ? "bg-rose-50 text-rose-700" : "bg-brand-50 text-brand-700"
          ].join(" ")}
        >
          {isVideo ? (
            <PlayCircle className="h-6 w-6 stroke-[2]" />
          ) : (
            <FileText className="h-6 w-6 stroke-[2]" />
          )}
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
          {resource.source}
          <ExternalLink className="h-4 w-4 transition group-hover:text-brand-700" />
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
          {isVideo ? "Vídeo recomendado" : "Leitura recomendada"}
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">{resource.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{resource.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {resource.formatLabel ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {resource.formatLabel}
            </span>
          ) : null}
          {resource.estimatedTime ? (
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {resource.estimatedTime}
            </span>
          ) : null}
        </div>
      </div>
    </a>
  );
}
