import { EducationalTopicCard } from "@/components/EducationalTopicCard";
import { Button } from "@/components/Button";
import { HeroSection } from "@/components/HeroSection";
import { ModuleCard } from "@/components/ModuleCard";
import { educationalTopics } from "@/data/learningResources";
import { modules } from "@/data/modules";

export default function HomePage() {
  return (
    <div className="pb-20">
      <HeroSection />

      <section id="modulos" className="px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Como funciona
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Quatro temas para mostrar onde você pode estar se arriscando mais.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Cada bloco transforma assuntos de segurança digital em perguntas simples, fáceis
              de entender e úteis para orientar o próximo passo.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      <section id="metodologia" className="px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">
              Sobre o portal
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Uma ferramenta prática para ajudar pessoas e pequenas empresas a se cuidarem melhor.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              O portal foi pensado para transformar situações do dia a dia em orientações
              claras. Em vez de usar palavras difíceis, ele mostra onde estão os principais
              cuidados e o que você pode começar a fazer agora.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <InfoCard
              title="Diagnóstico básico"
              text="Você responde perguntas simples e recebe uma visão geral da sua situação."
            />
            <InfoCard
              title="Orientação certa"
              text="O portal indica os temas do guia que mais fazem sentido para o seu caso."
            />
            <InfoCard
              title="Pronto para crescer"
              text="A estrutura já está preparada para evoluir com histórico, integração e relatórios mais completos."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Entenda melhor cada tema
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Explicações simples para você saber o que cada parte do portal quer dizer.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Antes mesmo de responder às perguntas, você já pode entender onde costumam
              aparecer os problemas e quais cuidados básicos ajudam mais.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {educationalTopics.map((topic) => (
              <EducationalTopicCard key={topic.moduleId} topic={topic} />
            ))}
          </div>

          <div className="mt-6 flex justify-start">
            <Button href="/aprenda" variant="secondary">
              Abrir biblioteca completa
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-emerald-50 p-8 shadow-soft lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Pronto para usar
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Comece agora e receba um resumo simples sobre seus cuidados com segurança digital.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              O processo é rápido, funciona bem no celular e no computador e mostra o que vale
              a pena melhorar primeiro.
            </p>
          </div>

          <Button href="/diagnostico">Iniciar diagnóstico</Button>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[1.8rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}
