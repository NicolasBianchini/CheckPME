export type ModuleId = "phishing" | "malware" | "passwords" | "networks";

export type AnswerValue = "yes" | "sometimes" | "no";

export type RiskLevel = "low" | "medium" | "high";

export type UserProfile = "person" | "business";

export interface DiagnosticModule {
  id: ModuleId;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  guideModule: number;
  learningFocus: string;
  accentClass: string;
}

export interface Question {
  id: string;
  moduleId: ModuleId;
  prompt: string;
  helperText: string;
}

export interface AnswerOption {
  label: string;
  value: AnswerValue;
  score: number;
  description: string;
}

export type AnswersMap = Record<string, AnswerValue>;

export interface ModuleScore {
  moduleId: ModuleId;
  title: string;
  score: number;
  maxScore: number;
  answered: number;
  riskLevel: RiskLevel;
}

export interface Recommendation {
  moduleId: ModuleId;
  title: string;
  guideModule: number;
  summary: string;
  impact: string;
  nextStep: string;
  urgencyLabel: string;
  firstWeekPlan: string[];
}

export interface LearningResource {
  id: string;
  moduleId: ModuleId;
  type: "video" | "guide";
  title: string;
  description: string;
  source: string;
  url: string;
  estimatedTime?: string;
  formatLabel?: string;
}

export interface EducationalTopic {
  moduleId: ModuleId;
  title: string;
  explanation: string;
  everydayExample: string;
  quickTips: string[];
  slug: string;
}

export interface TopicDetailPage {
  moduleId: ModuleId;
  slug: string;
  pageTitle: string;
  intro: string;
  whyItMatters: string;
  quickChecklist: string[];
  warningSigns: string[];
  practicalActions: string[];
  smallBusinessTips: string[];
  commonMistakes: string[];
}

export interface DiagnosticResult {
  totalScore: number;
  maxScore: number;
  level: RiskLevel;
  answeredQuestions: number;
  completionRate: number;
  moduleScores: ModuleScore[];
  criticalModules: ModuleScore[];
  strengths: ModuleScore[];
  recommendations: Recommendation[];
  executiveSummary: string;
  exposureAreas: string[];
  priorityActions: string[];
  quickWins: string[];
  reportHeadline: string;
  profile: UserProfile;
  profileLabel: string;
  profileSummary: string;
}
