import { AnswerOption, ModuleId, RiskLevel } from "@/types/diagnostic";

export const STORAGE_KEY = "checkpme-segura-answers";

export const RISK_THRESHOLDS = {
  lowMax: 8,
  mediumMax: 18
} as const;

export const answerOptions: AnswerOption[] = [
  {
    label: "Sim",
    value: "yes",
    score: 0,
    description: "Faço isso com frequência e já trato como parte da rotina."
  },
  {
    label: "Às vezes",
    value: "sometimes",
    score: 1,
    description: "Faço em alguns momentos, mas ainda sem consistência."
  },
  {
    label: "Não",
    value: "no",
    score: 2,
    description: "Ainda não adotei esse cuidado no dia a dia."
  }
];

export const riskSummaryByLevel: Record<RiskLevel, string> = {
  low: "Você já tem bons cuidados no dia a dia. Agora é só manter o ritmo e revisar um ou outro ponto.",
  medium:
    "Você já toma alguns cuidados, mas ainda há brechas que podem facilitar golpes, perda de arquivos ou invasões.",
  high: "Seu resultado pede atenção mais rápida. Alguns cuidados importantes ainda não fazem parte da rotina."
};

export const executiveByLevel: Record<RiskLevel, string> = {
  low: "De forma geral, sua rotina está no caminho certo e mostra bons hábitos de proteção.",
  medium: "Você já se cuida em alguns pontos, mas ainda precisa transformar isso em costume no dia a dia.",
  high: "Hoje existem sinais de risco importantes, mas a boa notícia é que várias melhorias são simples de começar."
};

export const moduleInsightMap: Record<
  ModuleId,
  { summary: string; impact: string; nextStep: string }
> = {
  phishing: {
    summary:
      "Atenção: você pode estar mais vulnerável a golpes por e-mail, SMS e mensagem.",
    impact:
      "Mensagens falsas podem fazer você passar dados pessoais, bancários ou entrar em links perigosos.",
    nextStep:
      "Evite abrir links recebidos por mensagem sem conferir de onde vieram e desconfie de mensagens apressadas."
  },
  malware: {
    summary:
      "Há sinais de risco ligados a arquivos suspeitos, cópias de segurança e atualizações.",
    impact:
      "Falhas aqui aumentam o risco de perder arquivos, pegar vírus ou ficar com o aparelho travado.",
    nextStep:
      "Guarde cópias dos arquivos mais importantes em pelo menos dois lugares e mantenha tudo atualizado."
  },
  passwords: {
    summary:
      "A proteção das suas contas precisa ficar mais forte para evitar invasões.",
    impact:
      "Senhas fracas ou repetidas facilitam o acesso de outras pessoas ao seu e-mail e às suas contas importantes.",
    nextStep:
      "Comece ligando a verificação em duas etapas nas contas principais e evite repetir a mesma senha."
  },
  networks: {
    summary:
      "Seu Wi-Fi e seus aparelhos conectados precisam de mais cuidado.",
    impact:
      "Configurações fracas podem abrir espaço para invasões, uso indevido da rede e problemas em aparelhos conectados.",
    nextStep:
      "Troque a senha padrão do roteador, atualize os aparelhos e, se puder, tenha uma rede separada para visitas."
  }
};
