import { DiagnosticModule } from "@/types/diagnostic";

export const modules: DiagnosticModule[] = [
  {
    id: "phishing",
    title: "Phishing e Engenharia Social",
    shortTitle: "Phishing",
    subtitle: "Aprenda a desconfiar de mensagens estranhas e pedidos suspeitos.",
    description:
      "Mostra se você consegue perceber golpes por e-mail, SMS e aplicativos de mensagem antes de clicar ou passar informações.",
    guideModule: 1,
    learningFocus: "Perceber pressa, mentira e links duvidosos.",
    accentClass: "from-sky-500/15 to-brand-100"
  },
  {
    id: "malware",
    title: "Malware e Ransomware",
    shortTitle: "Ransomware",
    subtitle: "Reduza o risco de vírus, perda de arquivos e bloqueio do computador.",
    description:
      "Analisa hábitos ligados a cópia de segurança, atualizações e proteção contra arquivos perigosos.",
    guideModule: 2,
    learningFocus: "Melhorar cópias de segurança, atualizações e proteção do aparelho.",
    accentClass: "from-emerald-500/15 to-emerald-100"
  },
  {
    id: "passwords",
    title: "Senhas e Autenticação",
    shortTitle: "Senhas",
    subtitle: "Deixe o acesso às suas contas mais seguro.",
    description:
      "Analisa se você repete senha, usa confirmação em duas etapas e toma cuidados básicos para proteger suas contas.",
    guideModule: 3,
    learningFocus: "Criar senhas melhores e evitar invasões.",
    accentClass: "from-amber-500/15 to-amber-100"
  },
  {
    id: "networks",
    title: "Redes e Aparelhos Conectados",
    shortTitle: "Redes",
    subtitle: "Cuide melhor do Wi-Fi e dos aparelhos conectados.",
    description:
      "Observa o uso de redes públicas, a configuração do roteador e o cuidado com aparelhos como câmeras e smart TVs.",
    guideModule: 4,
    learningFocus: "Melhorar a proteção da rede e dos aparelhos conectados.",
    accentClass: "from-rose-500/15 to-rose-100"
  }
];
