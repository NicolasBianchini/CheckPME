import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-brand-200 bg-white/90 px-4 py-2 text-sm font-medium text-brand-700 shadow-soft">
            Diagnóstico rápido de segurança digital para usuários e pequenas empresas
          </span>

          <div className="space-y-5">
            <h2 className="max-w-3xl text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Entenda seus hábitos de segurança antes que um risco vire problema.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              O portal mostra hábitos que podem trazer problema, indica seu nível de cuidado e
              aponta quais partes do guia podem ajudar você ou sua equipe a se proteger melhor.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/diagnostico">Iniciar diagnóstico</Button>
            <Button href="/#modulos" variant="secondary">
              Ver os 4 módulos
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Metric label="16 perguntas" value="4 temas" />
            <Metric label="Resultado final" value="Baixo, médio ou alto risco" />
            <Metric label="Dicas práticas" value="Orientações simples para começar" />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-panel backdrop-blur">
            <div className="rounded-[1.6rem] bg-slate-950 p-1">
              <div className="rounded-[1.35rem] bg-slate-900 p-6 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
                      Resumo do resultado
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">Visão rápida do risco digital</h3>
                  </div>
                  <div className="rounded-full bg-amber-400/20 px-3 py-1 text-sm font-semibold text-amber-200">
                    Exemplo
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl bg-white/8 p-4">
                    <p className="text-sm text-slate-300">Classificação atual</p>
                    <p className="mt-2 text-3xl font-black text-amber-300">Médio risco</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Há boas práticas em andamento, mas alguns hábitos ainda deixam espaço
                      para golpes e falhas comuns.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <InsightCard
                      title="Ponto forte"
                      text="Atualizações e proteção básica dos dispositivos."
                    />
                    <InsightCard
                      title="Ponto crítico"
                      text="Senhas repetidas e pouca verificação em duas etapas."
                    />
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-slate-100">
                      Próximo passo sugerido
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Comece ativando a verificação em duas etapas nas contas principais e
                      revise mensagens suspeitas antes de abrir links.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-4 shadow-soft">
      <p className="text-sm font-semibold text-brand-700">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}

function InsightCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-slate-100">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
