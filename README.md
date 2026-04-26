# CheckPME Segura

Portal web acadêmico para diagnóstico básico de segurança digital, com foco em usuários finais e pequenas empresas.

O projeto faz parte de uma proposta de conscientização em segurança da informação. A ideia é transformar hábitos do dia a dia em um resultado simples, visual e fácil de entender, indicando também conteúdos de apoio para cada tema.

## Objetivo

O `CheckPME Segura` ajuda o usuário a:

- responder perguntas rápidas sobre seus hábitos de segurança digital;
- receber uma classificação de risco em `baixo`, `médio` ou `alto`;
- identificar os temas que mais precisam de atenção;
- acessar páginas explicativas com dicas práticas e materiais recomendados.

## Stack

- `Next.js` com `App Router`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `lucide-react` para ícones
- `localStorage` para persistência local no MVP

## Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

Depois, abra:

```text
http://localhost:3000
```

### 3. Gerar build de produção

```bash
npm run build
```

### 4. Rodar build localmente

```bash
npm run start
```

## Rotas principais

### Página inicial

```text
/
```

Landing page com:

- apresentação do portal;
- cards dos 4 temas;
- explicações educativas;
- chamadas para iniciar o diagnóstico.

### Diagnóstico

```text
/diagnostico
```

Fluxo de perguntas com:

- uma pergunta por vez;
- progresso geral e por tema;
- respostas `Sim`, `Às vezes` e `Não`;
- salvamento local no navegador.

### Resultado

```text
/resultado
```

Resumo com:

- classificação de risco;
- pontuação final;
- pontos fortes;
- pontos de atenção;
- próximos passos;
- materiais recomendados.

### Páginas de conteúdo por tema

```text
/aprenda/phishing
/aprenda/malware-ransomware
/aprenda/senhas
/aprenda/redes-e-aparelhos
```

Cada página tem:

- explicação simples do tema;
- sinais de alerta;
- ações práticas;
- dicas para pequenas empresas;
- erros comuns;
- vídeos e leituras recomendadas.

## Lógica de pontuação

Cada resposta recebe uma pontuação:

- `Sim` = `0`
- `Às vezes` = `1`
- `Não` = `2`

Faixas de classificação:

- `0 a 8` = `Baixo risco`
- `9 a 18` = `Médio risco`
- `19 ou mais` = `Alto risco`

Essa lógica está centralizada para facilitar mudanças futuras.

## Estrutura do projeto

```text
src/
  app/
    page.tsx
    diagnostico/page.tsx
    resultado/page.tsx
    aprenda/[slug]/page.tsx
    layout.tsx
    globals.css

  components/
    Button.tsx
    EducationalTopicCard.tsx
    Header.tsx
    HeroSection.tsx
    LearningResourceCard.tsx
    ModuleCard.tsx
    ProgressBar.tsx
    QuestionCard.tsx
    RecommendationCard.tsx
    ResultCard.tsx
    RiskBadge.tsx

  data/
    learningResources.ts
    modules.ts
    questions.ts

  hooks/
    useDiagnostic.ts

  lib/
    calculateRisk.ts
    diagnosticContent.ts
    diagnosticStorage.ts

  types/
    diagnostic.ts
```

## Onde editar cada coisa

### Perguntas do diagnóstico

Arquivo:

[`src/data/questions.ts`](./src/data/questions.ts)

Use este arquivo para:

- alterar perguntas;
- mudar textos de apoio;
- adicionar novos itens ao questionário.

### Temas do portal

Arquivo:

[`src/data/modules.ts`](./src/data/modules.ts)

Use este arquivo para:

- mudar títulos dos temas;
- trocar descrições;
- ajustar foco de cada parte do guia.

### Textos fixos da lógica

Arquivo:

[`src/lib/diagnosticContent.ts`](./src/lib/diagnosticContent.ts)

Use este arquivo para:

- alterar faixas de risco;
- mudar textos de resumo;
- ajustar recomendações por tema.

### Cálculo do resultado

Arquivo:

[`src/lib/calculateRisk.ts`](./src/lib/calculateRisk.ts)

Aqui ficam:

- soma das respostas;
- classificação final;
- cálculo por tema;
- identificação de pontos fortes e críticos.

### Conteúdo educativo e materiais

Arquivo:

[`src/data/learningResources.ts`](./src/data/learningResources.ts)

Use este arquivo para:

- adicionar vídeos;
- adicionar leituras;
- editar páginas de conteúdo por tema;
- trocar links recomendados.

### Estado do questionário

Arquivo:

[`src/hooks/useDiagnostic.ts`](./src/hooks/useDiagnostic.ts)

Esse hook concentra:

- resposta atual;
- navegação entre perguntas;
- persistência no `localStorage`;
- reset do diagnóstico.

## Fontes de conteúdo recomendadas

Hoje o projeto usa principalmente materiais de:

- `CERT.br`
- `NIC.br`
- `Cidadão na Rede`
- `Google Safety Center`
- `Microsoft Support`

Ao adicionar novos links, prefira:

- materiais oficiais;
- conteúdo em português do Brasil;
- linguagem simples para público leigo;
- páginas duráveis, não promocionais.

## Persistência local

As respostas do diagnóstico são salvas no navegador por meio de `localStorage`.

Chave usada:

```text
checkpme-segura-answers
```

Essa lógica está em:

- [`src/lib/diagnosticStorage.ts`](./src/lib/diagnosticStorage.ts)
- [`src/hooks/useDiagnostic.ts`](./src/hooks/useDiagnostic.ts)

## Próximas evoluções sugeridas

- criar uma página índice `/aprenda` com todos os temas;
- permitir perfil `Pessoa` e `Empresa`;
- exportar resultado em PDF;
- integrar com API no futuro;
- adicionar testes para regra de pontuação;
- armazenar histórico de diagnósticos.

## Observações

- O projeto está preparado como MVP, sem backend obrigatório.
- Não usa banco de dados nesta fase.
- A estrutura foi organizada para facilitar expansão futura.

## Licença

Projeto acadêmico para fins educacionais.
