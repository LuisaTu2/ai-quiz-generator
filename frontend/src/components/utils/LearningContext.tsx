import { createContext, useState, type ReactNode } from "react";
import { type Language, type Level, type Quiz, type Topic } from "./constants";

interface LearningContextType {
    slide: number
    language: Language
    level: Level
    topics: Topic[]
    isLoading: boolean
    error: boolean
    quiz: Quiz
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
    setLevel:  React.Dispatch<React.SetStateAction<Level>>
    setTopics: React.Dispatch<React.SetStateAction<Topic[]>>
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    setQuiz: React.Dispatch<React.SetStateAction<Quiz>>
    setSlide: React.Dispatch<React.SetStateAction<number>>
    setError: React.Dispatch<React.SetStateAction<boolean>>
}


const initialLearningContext: LearningContextType = {
  slide: 0,
  isLoading: false,
  language: "english",
  level: "beginner",
  topics: [],
  quiz: {questions: []},
  error: false, 
  setTopics: () => {},
  setLevel: () => {},
  setIsLoading: () => {},
  setLanguage: () => {}, 
  setQuiz: () => {},   
  setSlide: () => {},
  setError: () => {},
}

export const LearningContext = createContext<LearningContextType>(initialLearningContext)

interface Props {
  children: ReactNode; // The children prop is typed as ReactNode
}

export const LearningProvider: React.FC<Props> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>("english");
  const [level, setLevel] = useState<Level>("beginner");
  const [slide, setSlide] = useState<number>(0);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [quizData, setQuizData] = useState<Quiz>({questions: []});
  const [error, setError] = useState<boolean>(false);

  const value = {
    language, 
    level,
    slide,
    topics,
    isLoading, 
    quiz: quizData, 
    error,
    setLanguage,
    setLevel,
    setTopics,
    setSlide,
    setIsLoading,
    setError,
    setQuiz: setQuizData,
  }

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
};
