import {
  EducationalTopic,
  LearningResource,
  TopicDetailPage
} from "@/types/diagnostic";

export const educationalTopics: EducationalTopic[] = [
  {
    moduleId: "phishing",
    slug: "phishing",
    title: "Golpes por mensagem",
    explanation:
      "Esse tema fala de mensagens que tentam enganar você para clicar em links, baixar arquivos ou passar dados pessoais.",
    everydayExample:
      "Exemplo comum: uma mensagem dizendo que sua conta foi bloqueada e pedindo clique imediato em um link.",
    quickTips: [
      "Desconfie de mensagens com pressa ou ameaça.",
      "Confira o remetente antes de clicar em qualquer link.",
      "Se bater dúvida, fale com a empresa por outro canal."
    ]
  },
  {
    moduleId: "malware",
    slug: "malware-ransomware",
    title: "Vírus e arquivos perigosos",
    explanation:
      "Esse tema mostra cuidados para evitar vírus, perda de arquivos e situações em que o aparelho para de funcionar direito.",
    everydayExample:
      "Exemplo comum: baixar um anexo sem conferir a origem e acabar instalando algo sem perceber.",
    quickTips: [
      "Mantenha o sistema e os programas atualizados.",
      "Tenha cópias dos arquivos importantes em mais de um lugar.",
      "Evite baixar arquivos de desconhecidos."
    ]
  },
  {
    moduleId: "passwords",
    slug: "senhas",
    title: "Senhas e acesso às contas",
    explanation:
      "Aqui o foco é deixar suas contas mais protegidas para que outras pessoas não consigam entrar com facilidade.",
    everydayExample:
      "Exemplo comum: usar a mesma senha no e-mail, no banco e nas redes sociais.",
    quickTips: [
      "Não repita a mesma senha em várias contas.",
      "Use verificação em duas etapas sempre que possível.",
      "Guarde senhas com cuidado e evite anotar em locais expostos."
    ]
  },
  {
    moduleId: "networks",
    slug: "redes-e-aparelhos",
    title: "Wi-Fi e aparelhos conectados",
    explanation:
      "Esse tema ajuda a perceber riscos no Wi-Fi, no roteador e em aparelhos conectados, como câmeras, TVs e assistentes.",
    everydayExample:
      "Exemplo comum: usar Wi-Fi público para acessar contas importantes ou nunca trocar a senha do roteador.",
    quickTips: [
      "Evite acessar banco e contas importantes em Wi-Fi público.",
      "Troque a senha padrão do roteador.",
      "Atualize os aparelhos conectados sempre que houver atualização."
    ]
  }
];

export const learningResources: LearningResource[] = [
  {
    id: "phishing-cisa-guide",
    moduleId: "phishing",
    type: "guide",
    title: "Como reconhecer e denunciar phishing",
    description:
      "Página oficial da CISA com sinais comuns de golpe, exemplos e dicas simples para evitar cair em armadilhas.",
    source: "CISA",
    url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing",
    estimatedTime: "5 min",
    formatLabel: "Leitura rápida"
  },
  {
    id: "phishing-cisa-video",
    moduleId: "phishing",
    type: "video",
    title: "Não clique em tudo que receber",
    description:
      "Vídeo em português do projeto Cidadão na Rede explicando como reconhecer mensagens com cara de golpe.",
    source: "Cidadão na Rede / NIC.br",
    url: "https://cidadaonarede.nic.br/pt/videos/nao-clique-em-tudo-que-receber",
    estimatedTime: "Vídeo curto",
    formatLabel: "Vídeo em PT-BR"
  },
  {
    id: "malware-cisa-guide",
    moduleId: "malware",
    type: "guide",
    title: "Stop Ransomware",
    description:
      "Central oficial com orientações práticas sobre cópias de segurança, atualização e prevenção contra bloqueio de arquivos.",
    source: "CISA",
    url: "https://www.cisa.gov/stopransomware",
    estimatedTime: "7 min",
    formatLabel: "Guia prático"
  },
  {
    id: "malware-cisa-overview",
    moduleId: "malware",
    type: "video",
    title: "Mantenha os programas atualizados",
    description:
      "Vídeo em português mostrando por que atualizar sistema e programas é um cuidado básico para evitar problemas.",
    source: "Cidadão na Rede / NIC.br",
    url: "https://cidadaonarede.nic.br/pt/videos/seguranca/mantenha-os-programas-atualizados",
    estimatedTime: "Vídeo curto",
    formatLabel: "Vídeo em PT-BR"
  },
  {
    id: "passwords-google-security-checkup",
    moduleId: "passwords",
    type: "guide",
    title: "Ferramentas do Google para melhorar sua segurança",
    description:
      "Reúne verificação em duas etapas, checagem de senhas e outras ferramentas simples para proteger contas online.",
    source: "Google Safety Center",
    url: "https://safety.google/intl/en_us/settings/security-settings/",
    estimatedTime: "6 min",
    formatLabel: "Passo a passo"
  },
  {
    id: "passwords-ftc-2fa",
    moduleId: "passwords",
    type: "video",
    title: "Verificação em dois fatores",
    description:
      "Vídeo em português explicando de forma simples como funciona a verificação em duas etapas e por que ela ajuda tanto.",
    source: "Cidadão na Rede / NIC.br",
    url: "https://cidadaonarede.nic.br/pt/videos/verificacion-en-dos-pasos",
    estimatedTime: "Vídeo curto",
    formatLabel: "Vídeo em PT-BR"
  },
  {
    id: "networks-microsoft-wifi",
    moduleId: "networks",
    type: "guide",
    title: "Como usar Wi-Fi com mais segurança",
    description:
      "Página oficial da Microsoft com cuidados práticos para redes sem fio e Wi-Fi público.",
    source: "Microsoft Support",
    url: "https://support.microsoft.com/en-us/security/be-safer-over-wireless-connections",
    estimatedTime: "5 min",
    formatLabel: "Leitura rápida"
  },
  {
    id: "networks-google-nest-2sv",
    moduleId: "networks",
    type: "video",
    title: "Redes públicas",
    description:
      "Vídeo em português com cuidados simples para usar Wi-Fi público sem se expor tanto a golpes e acessos indevidos.",
    source: "Cidadão na Rede / NIC.br",
    url: "https://cidadaonarede.nic.br/pt/videos/redes-publicas",
    estimatedTime: "Vídeo curto",
    formatLabel: "Vídeo em PT-BR"
  },
  {
    id: "networks-router-password-video",
    moduleId: "networks",
    type: "video",
    title: "Troque a senha do roteador",
    description:
      "Vídeo em português com orientações práticas para não deixar o roteador com a configuração padrão.",
    source: "Cidadão na Rede / NIC.br",
    url: "https://cidadaonarede.nic.br/pt/videos/change-your-router-password",
    estimatedTime: "Vídeo curto",
    formatLabel: "Vídeo em PT-BR"
  }
];

export const topicDetailPages: TopicDetailPage[] = [
  {
    moduleId: "phishing",
    slug: "phishing",
    pageTitle: "Como evitar golpes por mensagem",
    intro:
      "Golpes por mensagem costumam usar pressa, medo ou curiosidade para fazer você clicar sem pensar. O objetivo quase sempre é roubar dados, dinheiro ou acesso a contas.",
    whyItMatters:
      "Esse é um dos tipos de golpe mais comuns porque chega por canais que usamos o tempo todo, como e-mail, WhatsApp e SMS.",
    quickChecklist: [
      "Pare e leia com calma antes de clicar.",
      "Confira quem enviou a mensagem.",
      "Nunca mande senha, código ou documento por impulso."
    ],
    warningSigns: [
      "Mensagem dizendo que sua conta será bloqueada se você não agir agora.",
      "Pedido inesperado de senha, código, documento ou dado bancário.",
      "Link encurtado ou estranho, diferente do site oficial.",
      "Mensagem de alguém conhecido pedindo dinheiro ou favor fora do normal."
    ],
    practicalActions: [
      "Pare por alguns segundos antes de clicar em qualquer link.",
      "Confira quem enviou a mensagem e veja se o endereço faz sentido.",
      "Se parecer importante, abra o site digitando o endereço você mesmo.",
      "Quando a mensagem vier de um conhecido, confirme por outro canal."
    ],
    smallBusinessTips: [
      "Combine com a equipe que pedidos urgentes de pagamento precisam de confirmação extra.",
      "Oriente funcionários a nunca enviar senha ou código por mensagem.",
      "Crie um jeito simples de reportar mensagens suspeitas dentro da empresa."
    ],
    commonMistakes: [
      "Clicar porque a mensagem parece oficial.",
      "Responder por impulso quando a mensagem fala de bloqueio ou cobrança.",
      "Achar que só pessoas sem experiência caem nesse tipo de golpe."
    ]
  },
  {
    moduleId: "malware",
    slug: "malware-ransomware",
    pageTitle: "Como se proteger de vírus e bloqueio de arquivos",
    intro:
      "Vírus e arquivos perigosos podem roubar informações, travar o aparelho ou até bloquear documentos importantes.",
    whyItMatters:
      "Na prática, isso pode gerar perda de trabalho, parada nas atividades e dor de cabeça para recuperar arquivos e acessos.",
    quickChecklist: [
      "Mantenha sistema e programas atualizados.",
      "Tenha cópia dos arquivos importantes em mais de um lugar.",
      "Não baixe arquivos de origem duvidosa."
    ],
    warningSigns: [
      "Arquivo recebido sem contexto ou vindo de alguém desconhecido.",
      "Computador mais lento que o normal sem motivo claro.",
      "Programas pedindo permissões estranhas ou instalando outras coisas junto.",
      "Aparecimento de mensagens de erro, travamentos ou pedidos de resgate."
    ],
    practicalActions: [
      "Faça cópias dos arquivos importantes em mais de um lugar.",
      "Mantenha sistema, navegador e programas atualizados.",
      "Evite baixar programas de sites duvidosos.",
      "Tenha proteção contra vírus ligada e funcionando."
    ],
    smallBusinessTips: [
      "Defina quais arquivos da empresa precisam de cópia diária ou semanal.",
      "Padronize as atualizações dos computadores e notebooks da equipe.",
      "Evite que cada pessoa instale qualquer programa sem orientação."
    ],
    commonMistakes: [
      "Deixar tudo salvo em um único computador.",
      "Ignorar atualização porque vai tomar tempo.",
      "Abrir anexo achando que 'não deve ser nada'."
    ]
  },
  {
    moduleId: "passwords",
    slug: "senhas",
    pageTitle: "Como deixar suas contas mais protegidas",
    intro:
      "Boa parte das invasões começa com senha fraca, repetida ou vazada. Por isso, cuidar das senhas continua sendo uma das formas mais simples de se proteger.",
    whyItMatters:
      "Quando alguém descobre uma senha sua, pode tentar entrar em várias contas ao mesmo tempo, principalmente se você costuma repetir a mesma combinação.",
    quickChecklist: [
      "Troque senhas repetidas começando pelo e-mail.",
      "Ative verificação em duas etapas.",
      "Use uma forma segura de guardar senhas."
    ],
    warningSigns: [
      "Você usa a mesma senha em várias contas.",
      "A senha é curta, óbvia ou baseada em nome e data.",
      "Você guarda senhas em locais expostos ou muito fáceis de acessar.",
      "Quase nenhuma conta sua tem verificação em duas etapas."
    ],
    practicalActions: [
      "Use senhas diferentes nas contas mais importantes.",
      "Ative a verificação em duas etapas sempre que possível.",
      "Considere usar um gerenciador de senhas.",
      "Troque senhas antigas ou repetidas começando pelo e-mail principal."
    ],
    smallBusinessTips: [
      "Evite contas compartilhadas com a mesma senha para várias pessoas.",
      "Priorize a proteção do e-mail corporativo e do sistema financeiro.",
      "Crie uma rotina simples para revisar acessos de ex-funcionários."
    ],
    commonMistakes: [
      "Achar que uma senha boa já basta sem confirmação extra.",
      "Repetir senha porque é mais fácil lembrar.",
      "Guardar senha em bloco de notas aberto ou papel visível."
    ]
  },
  {
    moduleId: "networks",
    slug: "redes-e-aparelhos",
    pageTitle: "Como cuidar melhor do Wi-Fi e dos aparelhos conectados",
    intro:
      "Wi-Fi, roteador, câmeras, TVs e outros aparelhos conectados também precisam de atenção. Quando ficam esquecidos, podem virar uma porta de entrada para problemas.",
    whyItMatters:
      "Uma rede mal cuidada pode expor dados, facilitar acessos indevidos e afetar tanto a casa quanto a empresa.",
    quickChecklist: [
      "Troque a senha padrão do roteador.",
      "Evite usar Wi-Fi público para contas sensíveis.",
      "Revise e atualize aparelhos conectados."
    ],
    warningSigns: [
      "Você nunca trocou a senha padrão do roteador.",
      "Usa Wi-Fi público para acessar contas sensíveis.",
      "Aparelhos conectados passam muito tempo sem atualização.",
      "Visitas e clientes usam a mesma rede principal."
    ],
    practicalActions: [
      "Troque a senha padrão do roteador por uma senha forte.",
      "Evite acessar banco e contas importantes em redes públicas.",
      "Atualize câmeras, roteadores, TVs e outros aparelhos conectados.",
      "Se puder, tenha uma rede separada para visitas."
    ],
    smallBusinessTips: [
      "Separe a rede interna da rede para clientes ou visitantes.",
      "Anote quais aparelhos estão conectados e revise isso de tempos em tempos.",
      "Verifique quem ainda precisa ter acesso à rede principal."
    ],
    commonMistakes: [
      "Instalar o roteador e nunca mais revisar nada.",
      "Achar que câmera ou TV não precisa de atualização.",
      "Confiar em qualquer Wi-Fi aberto por ser mais prático."
    ]
  }
];
