"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { modules } from "@/data/modules";
import { questions } from "@/data/questions";
import { STORAGE_KEY } from "@/lib/diagnosticContent";
import { parseStoredAnswers } from "@/lib/diagnosticStorage";
import { AnswersMap, AnswerValue } from "@/types/diagnostic";

export function useDiagnostic() {
  const router = useRouter();
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const parsedAnswers = parseStoredAnswers(window.localStorage.getItem(STORAGE_KEY));
    setAnswers(parsedAnswers);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers, isHydrated]);

  const currentQuestion = questions[currentIndex];
  const currentModule = modules.find((module) => module.id === currentQuestion.moduleId) ?? null;
  const currentModuleQuestions = questions.filter(
    (question) => question.moduleId === currentQuestion.moduleId
  );
  const currentModuleIndex = currentModuleQuestions.findIndex(
    (question) => question.id === currentQuestion.id
  );

  const answeredCount = Object.keys(answers).length;
  const selectedValue = answers[currentQuestion.id];
  const isLastQuestion = currentIndex === questions.length - 1;

  const moduleCompletion = useMemo(() => {
    return modules.map((module) => {
      const moduleQuestions = questions.filter((question) => question.moduleId === module.id);
      const answered = moduleQuestions.filter((question) => answers[question.id]).length;

      return {
        moduleId: module.id,
        title: module.shortTitle,
        answered,
        total: moduleQuestions.length,
        isCurrent: module.id === currentQuestion.moduleId
      };
    });
  }, [answers, currentQuestion.moduleId]);

  function selectAnswer(value: AnswerValue) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: value
    }));
  }

  function nextQuestion() {
    if (!selectedValue) return;

    if (isLastQuestion) {
      router.push("/resultado");
      return;
    }

    setCurrentIndex((previous) => previous + 1);
  }

  function previousQuestion() {
    setCurrentIndex((previous) => Math.max(previous - 1, 0));
  }

  function resetDiagnostic() {
    window.localStorage.removeItem(STORAGE_KEY);
    setAnswers({});
    setCurrentIndex(0);
  }

  return {
    answers,
    currentIndex,
    currentQuestion,
    currentModule,
    currentModuleIndex,
    currentModuleQuestions,
    selectedValue,
    answeredCount,
    isLastQuestion,
    isHydrated,
    moduleCompletion,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetDiagnostic
  };
}
