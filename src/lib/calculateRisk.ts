import { modules } from "@/data/modules";
import { questions } from "@/data/questions";
import {
  executiveByLevel,
  moduleInsightMap,
  RISK_THRESHOLDS
} from "@/lib/diagnosticContent";
import {
  AnswersMap,
  DiagnosticResult,
  ModuleScore,
  Recommendation,
  RiskLevel
} from "@/types/diagnostic";

export function getAnswerScore(answer?: keyof typeof scoreByAnswer) {
  if (!answer) return 0;
  return scoreByAnswer[answer];
}

export function getRiskLevel(score: number): RiskLevel {
  if (score <= RISK_THRESHOLDS.lowMax) return "low";
  if (score <= RISK_THRESHOLDS.mediumMax) return "medium";
  return "high";
}

export function getRiskLabel(level: RiskLevel) {
  if (level === "low") return "Baixo risco";
  if (level === "medium") return "Médio risco";
  return "Alto risco";
}

export function calculateTotalScore(answers: AnswersMap) {
  return questions.reduce((total, question) => {
    return total + getAnswerScore(answers[question.id]);
  }, 0);
}

export function calculateModuleScores(answers: AnswersMap): ModuleScore[] {
  return modules.map((module) => {
    const moduleQuestions = questions.filter(
      (question) => question.moduleId === module.id
    );
    const score = moduleQuestions.reduce((total, question) => {
      return total + getAnswerScore(answers[question.id]);
    }, 0);
    const answered = moduleQuestions.filter((question) => answers[question.id]).length;
    const maxScore = moduleQuestions.length * 2;
    const normalized = maxScore === 0 ? 0 : (score / maxScore) * 24;

    return {
      moduleId: module.id,
      title: module.title,
      score,
      maxScore,
      answered,
      riskLevel: getRiskLevel(Math.round(normalized))
    };
  });
}

export function getCriticalModules(moduleScores: ModuleScore[]) {
  const sorted = [...moduleScores].sort((a, b) => b.score - a.score);
  const highestScore = sorted[0]?.score ?? 0;

  if (highestScore === 0) {
    return sorted.slice(0, 1);
  }

  return sorted.filter((module) => module.score === highestScore);
}

export function getStrengthModules(moduleScores: ModuleScore[]) {
  const sorted = [...moduleScores].sort((a, b) => a.score - b.score);
  return sorted.filter((module) => module.score <= 2).slice(0, 2);
}

export function buildRecommendations(moduleScores: ModuleScore[]): Recommendation[] {
  return moduleScores
    .filter((module) => module.score >= 4)
    .sort((a, b) => b.score - a.score)
    .map((module) => {
      const moduleMeta = modules.find((item) => item.id === module.moduleId);

      if (!moduleMeta) {
        throw new Error(`Módulo não encontrado: ${module.moduleId}`);
      }

      const insight = moduleInsightMap[module.moduleId];

      return {
        moduleId: module.moduleId,
        title: moduleMeta.title,
        guideModule: moduleMeta.guideModule,
        summary: insight.summary,
        impact: insight.impact,
        nextStep: insight.nextStep
      };
    });
}

export const scoreByAnswer = {
  yes: 0,
  sometimes: 1,
  no: 2
} as const;

function buildExposureAreas(recommendations: Recommendation[]) {
  if (recommendations.length === 0) {
    return [
      "O diagnóstico não encontrou áreas críticas dominantes neste momento."
    ];
  }

  return recommendations.slice(0, 3).map((recommendation) => recommendation.impact);
}

function buildPriorityActions(recommendations: Recommendation[]) {
  if (recommendations.length === 0) {
    return [
      "Mantenha a revisão periódica das práticas atuais e compartilhe o guia com a equipe."
    ];
  }

  return recommendations.slice(0, 3).map((recommendation) => recommendation.nextStep);
}

export function buildDiagnosticResult(answers: AnswersMap): DiagnosticResult {
  const totalScore = calculateTotalScore(answers);
  const moduleScores = calculateModuleScores(answers);
  const answeredQuestions = questions.filter((question) => answers[question.id]).length;
  const level = getRiskLevel(totalScore);
  const recommendations = buildRecommendations(moduleScores);

  return {
    totalScore,
    maxScore: questions.length * 2,
    level,
    answeredQuestions,
    completionRate: Math.round((answeredQuestions / questions.length) * 100),
    moduleScores,
    criticalModules: getCriticalModules(moduleScores),
    strengths: getStrengthModules(moduleScores),
    recommendations,
    executiveSummary: executiveByLevel[level],
    exposureAreas: buildExposureAreas(recommendations),
    priorityActions: buildPriorityActions(recommendations)
  };
}
