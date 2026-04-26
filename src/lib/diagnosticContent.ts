import { AnswerOption, ModuleId, RiskLevel, UserProfile } from "@/types/diagnostic";

export const STORAGE_KEY = "checkpme-segura-answers";
export const PROFILE_STORAGE_KEY = "checkpme-segura-profile";

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

export const profileOptions: Array<{
  value: UserProfile;
  label: string;
  description: string;
}> = [
  {
    value: "person",
    label: "Pessoa",
    description: "Para uso pessoal, família, contas do dia a dia e aparelhos de casa."
  },
  {
    value: "business",
    label: "Empresa",
    description: "Para pequenos negócios, equipe, clientes, arquivos de trabalho e rede da empresa."
  }
];

export const profileSummaryMap: Record<UserProfile, string> = {
  person:
    "As orientações priorizam contas pessoais, mensagens do dia a dia, aparelhos de casa e cuidados simples para começar.",
  business:
    "As orientações priorizam rotina da equipe, arquivos de trabalho, acessos compartilhados, clientes e rede da empresa."
};

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

export const reportHeadlineByLevel: Record<RiskLevel, string> = {
  low: "Seu cuidado digital está em bom caminho.",
  medium: "Há bons hábitos em andamento, mas ainda existem brechas importantes.",
  high: "Seu resultado mostra pontos que merecem ação mais rápida."
};

export const moduleInsightMap: Record<
  ModuleId,
  Record<
    "medium" | "high",
    {
      summary: string;
      impact: string;
      nextStep: string;
      urgencyLabel: string;
      firstWeekPlan: string[];
    }
  >
> = {
  phishing: {
    medium: {
      summary:
        "Você já percebe alguns sinais, mas ainda pode cair em mensagens feitas para pegar você no impulso.",
      impact:
        "Uma mensagem bem montada pode levar você a clicar em link falso, passar dados ou fazer pagamento indevido.",
      nextStep:
        "Passe a confirmar remetente e link antes de clicar, principalmente em mensagens com urgência.",
      urgencyLabel: "Cuidar nesta semana",
      firstWeekPlan: [
        "Desconfie de mensagens com pressa, ameaça ou promessa boa demais.",
        "Antes de clicar, confira o endereço do remetente ou o perfil que mandou a mensagem.",
        "Se a mensagem falar de banco, entrega ou cobrança, abra o site por conta própria."
      ]
    },
    high: {
      summary:
        "Hoje você está mais exposto a golpes por e-mail, SMS e aplicativo de mensagem.",
      impact:
        "Golpes desse tipo podem causar perda de dinheiro, roubo de conta e vazamento de dados pessoais.",
      nextStep:
        "Pare de abrir links recebidos por mensagem sem confirmar a origem e revise esse cuidado com urgência.",
      urgencyLabel: "Começar hoje",
      firstWeekPlan: [
        "Evite clicar em links de mensagens inesperadas, mesmo quando parecerem oficiais.",
        "Confirme pedidos de dinheiro, código ou documento por outro canal.",
        "Compartilhe esse cuidado com quem usa o mesmo aparelho ou trabalha com você."
      ]
    }
  },
  malware: {
    medium: {
      summary:
        "Você já tem alguns cuidados, mas ainda há espaço para perda de arquivos e instalação de programas perigosos.",
      impact:
        "Sem rotina de atualização e cópia de segurança, um problema simples pode virar prejuízo e retrabalho.",
      nextStep:
        "Crie uma rotina básica de cópia de segurança e atualização dos seus aparelhos.",
      urgencyLabel: "Organizar nesta semana",
      firstWeekPlan: [
        "Escolha os arquivos mais importantes e salve em pelo menos dois lugares.",
        "Atualize sistema, navegador e programas principais.",
        "Evite baixar anexos e programas de origem duvidosa."
      ]
    },
    high: {
      summary:
        "Seu uso atual deixa espaço para vírus, perda de arquivos e travamento do aparelho.",
      impact:
        "Se algo der errado, você pode perder documentos importantes ou ficar sem acesso ao que precisa para trabalhar.",
      nextStep:
        "Comece agora pelas cópias de segurança e pelas atualizações pendentes.",
      urgencyLabel: "Começar hoje",
      firstWeekPlan: [
        "Separe os arquivos essenciais e faça cópia em nuvem ou HD externo.",
        "Atualize os aparelhos que você mais usa primeiro.",
        "Revise se a proteção contra vírus está ativa e funcionando."
      ]
    }
  },
  passwords: {
    medium: {
      summary:
        "A proteção das suas contas ainda depende demais de senhas que podem ser repetidas ou fracas.",
      impact:
        "Se uma senha vazar, outras contas importantes podem ficar em risco também.",
      nextStep:
        "Priorize e-mail, banco e redes sociais para ativar verificação em duas etapas e trocar senhas repetidas.",
      urgencyLabel: "Prioridade desta semana",
      firstWeekPlan: [
        "Troque a senha do seu e-mail principal por uma combinação única.",
        "Ative verificação em duas etapas nas contas mais importantes.",
        "Pare de guardar senha em locais expostos."
      ]
    },
    high: {
      summary:
        "Hoje suas contas podem estar mais vulneráveis por causa de senhas repetidas e pouca proteção extra.",
      impact:
        "Esse é um dos caminhos mais comuns para invasão de e-mail, redes sociais e contas de trabalho.",
      nextStep:
        "Comece hoje pelo e-mail principal e pelas contas financeiras, ativando verificação em duas etapas.",
      urgencyLabel: "Começar hoje",
      firstWeekPlan: [
        "Troque imediatamente senhas iguais ou fáceis nas contas principais.",
        "Ative verificação em duas etapas no e-mail e no banco.",
        "Escolha uma forma mais segura de guardar senhas, como um gerenciador."
      ]
    }
  },
  networks: {
    medium: {
      summary:
        "Seu Wi-Fi e seus aparelhos conectados precisam de uma revisão para reduzir acessos indevidos.",
      impact:
        "Uma rede mal cuidada pode expor contas, dados e aparelhos da casa ou da empresa.",
      nextStep:
        "Revise a senha do roteador, o uso de Wi-Fi público e as atualizações dos aparelhos conectados.",
      urgencyLabel: "Revisar nesta semana",
      firstWeekPlan: [
        "Troque a senha padrão do roteador se isso ainda não foi feito.",
        "Evite entrar em banco e contas importantes usando rede pública.",
        "Atualize câmeras, TVs, roteadores e outros aparelhos conectados."
      ]
    },
    high: {
      summary:
        "Hoje sua rede e seus aparelhos conectados podem estar servindo como porta de entrada para problemas.",
      impact:
        "Falhas aqui podem facilitar invasões, uso indevido da internet e exposição de outros equipamentos conectados.",
      nextStep:
        "Comece pela troca da senha do roteador e pela revisão dos aparelhos ligados à rede.",
      urgencyLabel: "Começar hoje",
      firstWeekPlan: [
        "Troque a senha padrão do roteador por uma senha forte.",
        "Veja quais aparelhos estão conectados e retire o que não reconhece.",
        "Se puder, separe a rede principal da rede de visitas ou clientes."
      ]
    }
  }
};
