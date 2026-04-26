import { AnswersMap, AnswerValue } from "@/types/diagnostic";

export function parseStoredAnswers(rawValue: string | null): AnswersMap {
  if (!rawValue) return {};

  try {
    const parsed = JSON.parse(rawValue) as unknown;

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(parsed).filter((entry): entry is [string, AnswerValue] => {
        return entry[1] === "yes" || entry[1] === "sometimes" || entry[1] === "no";
      })
    );
  } catch {
    return {};
  }
}
