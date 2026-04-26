import Link from "next/link";
import {
  Lock,
  Mail,
  ShieldCheck,
  Wifi
} from "lucide-react";
import { DiagnosticModule } from "@/types/diagnostic";
import { topicDetailPages } from "@/data/learningResources";

export function ModuleCard({ module }: { module: DiagnosticModule }) {
  const topicPage = topicDetailPages.find((item) => item.moduleId === module.id);

  return (
    <article className="group rounded-[1.8rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-panel">
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${module.accentClass}`}
      >
        <ModuleIcon moduleId={module.id} />
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Módulo {module.guideModule}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">{module.shortTitle}</h3>
        </div>

        <p className="text-sm font-medium text-slate-700">{module.subtitle}</p>
        <p className="text-sm leading-7 text-slate-600">{module.description}</p>
        <p className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <span className="font-semibold text-slate-800">Foco do guia:</span>{" "}
          {module.learningFocus}
        </p>
        {topicPage ? (
          <Link
            href={`/aprenda/${topicPage.slug}`}
            className="inline-flex text-sm font-semibold text-brand-700 transition hover:text-brand-800"
          >
            Ver página deste tema
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function ModuleIcon({ moduleId }: { moduleId: DiagnosticModule["id"] }) {
  const common = "h-7 w-7 text-brand-800 stroke-[2]";

  if (moduleId === "phishing") {
    return <Mail className={common} aria-hidden="true" />;
  }

  if (moduleId === "malware") {
    return <ShieldCheck className={common} aria-hidden="true" />;
  }

  if (moduleId === "passwords") {
    return <Lock className={common} aria-hidden="true" />;
  }

  return <Wifi className={common} aria-hidden="true" />;
}
