/* types */
export type Language = "english" | "french" | "italian" | "spanish" | "serbian";
export type Level = "beginner" | "intermediate" | "advanced";
export type Topic =
  | "food"
  | "fashion"
  | "travel"
  | "space"
  | "geography"
  | "sports"
  | "nature";

export interface LearningOptions {
  language?: Language;
  level?: Level;
  topics?: Topic[];
}

export interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

export interface Quiz {
  questions: QuestionType[];
}

/* constants */
export const languages: Language[] = [
  "english",
  "french",
  "italian",
  "serbian",
  "spanish",
];
export const levels: Level[] = ["beginner", "intermediate", "advanced"];
export const topicOptions: Topic[] = [
  "fashion",
  "food",
  "geography",
  "nature",
  "space",
  "sports",
  "travel",
];

export const HTTPS_PATH: string = "https://learn.findingLuisa.com/learn-api/";

export const firstUpperCase = (s: string) => {
  if (s === "") {
    return s;
  }
  const firstLetter = s[0];
  return firstLetter.toUpperCase() + s.slice(1);
};

export const EMAILJS_SERVICE_ID = "service_strapazza_palle";
export const EMAILJS_TEMPLATE_ID = "template_r9luivw";
export const EMAILJS_PUBLIC_KEY = "5X2vLQdXV_I2c1gXZ";
