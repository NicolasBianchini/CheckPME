import { Question } from "@/types/diagnostic";

export const questions: Question[] = [
  {
    id: "phishing-1",
    moduleId: "phishing",
    prompt: "Você confere o endereço de e-mail do remetente antes de clicar em links?",
    helperText: "Muitos golpes usam nomes conhecidos, mas escondem endereços falsos."
  },
  {
    id: "phishing-2",
    moduleId: "phishing",
    prompt: "Você evita clicar em mensagens com tom de urgência, como “sua conta será bloqueada”?",
    helperText: "Golpistas tentam gerar medo ou pressa para reduzir sua atenção."
  },
  {
    id: "phishing-3",
    moduleId: "phishing",
    prompt: "Você verifica se o link parece confiável antes de abrir?",
    helperText: "Vale observar o domínio, palavras estranhas e erros de escrita no endereço."
  },
  {
    id: "phishing-4",
    moduleId: "phishing",
    prompt: "Você desconfia de mensagens pedindo dados pessoais ou bancários?",
    helperText: "Bancos, serviços e empresas sérias não costumam pedir dados sensíveis por mensagem."
  },
  {
    id: "malware-1",
    moduleId: "malware",
    prompt: "Você mantém backup dos seus arquivos importantes?",
    helperText: "Guardar cópias em mais de um lugar ajuda quando algo some, quebra ou é bloqueado."
  },
  {
    id: "malware-2",
    moduleId: "malware",
    prompt: "Você evita baixar anexos de remetentes desconhecidos?",
    helperText: "Até um arquivo que parece comum pode trazer problema sem você perceber."
  },
  {
    id: "malware-3",
    moduleId: "malware",
    prompt: "Você mantém seu sistema operacional e programas atualizados?",
    helperText: "Atualizações corrigem falhas exploradas por golpes e softwares maliciosos."
  },
  {
    id: "malware-4",
    moduleId: "malware",
    prompt: "Você usa alguma proteção contra vírus ou ameaças digitais?",
    helperText: "Mesmo no celular, vale ter proteção ligada e alguns cuidados no dia a dia."
  },
  {
    id: "passwords-1",
    moduleId: "passwords",
    prompt: "Você usa senhas diferentes para contas importantes?",
    helperText: "Quando uma senha é reutilizada, um vazamento pode abrir várias contas ao mesmo tempo."
  },
  {
    id: "passwords-2",
    moduleId: "passwords",
    prompt: "Você usa verificação em duas etapas nas contas principais?",
    helperText: "É aquela confirmação extra por código, aplicativo ou mensagem além da senha."
  },
  {
    id: "passwords-3",
    moduleId: "passwords",
    prompt: "Você evita salvar senhas em locais inseguros, como bloco de notas ou papel exposto?",
    helperText: "Informações visíveis ou desprotegidas aumentam o risco de acesso indevido."
  },
  {
    id: "passwords-4",
    moduleId: "passwords",
    prompt: "Você usa ou conhece gerenciadores de senhas?",
    helperText: "Gerenciadores ajudam a criar senhas fortes sem precisar decorar tudo."
  },
  {
    id: "networks-1",
    moduleId: "networks",
    prompt: "Você evita acessar banco ou sistemas importantes em Wi-Fi público?",
    helperText: "Redes abertas podem facilitar interceptação ou páginas falsas."
  },
  {
    id: "networks-2",
    moduleId: "networks",
    prompt: "Você já trocou a senha padrão do seu roteador?",
    helperText: "Senhas padrão são amplamente conhecidas e podem ser exploradas."
  },
  {
    id: "networks-3",
    moduleId: "networks",
    prompt: "Você atualiza dispositivos conectados, como roteador, câmeras ou smart TV?",
    helperText: "Dispositivos esquecidos costumam virar pontos fracos dentro da rede."
  },
  {
    id: "networks-4",
    moduleId: "networks",
    prompt: "Você separa a rede de visitantes da rede principal da empresa ou da casa?",
    helperText: "Separar acessos ajuda se algum aparelho de visita estiver com problema."
  }
];
