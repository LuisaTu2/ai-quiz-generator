import { HTTPS_PATH, type Quiz, type Topic } from "./constants";

interface GetQuizDataProps {
  language: string;
  level: string;
  topics: Topic[];
  setIsLoading: (value: React.SetStateAction<boolean>) => void;
  setQuiz: (value: React.SetStateAction<Quiz>) => void;
  setSlide: (value: React.SetStateAction<number>) => void;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const getQuizData = async ({
  language,
  level,
  topics,
  setIsLoading,
  setQuiz,
  setSlide,
  setError,
}: GetQuizDataProps) => {
  setIsLoading(true);
  setQuiz({ questions: [] });

  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(
        `${HTTPS_PATH}?language=${language}&level=${level}&topic=${topics}`
      );
      const result = await response.json();

      if (result) {
        setQuiz((prev) => ({ ...prev, ...result }));
        setIsLoading(false);
        setSlide(5);
        break;
      }
    } catch (error) {
      console.error(error);
      if (i !== 0) {
        setSlide(0);
        setError(true);
      }
    }
  }
};

export default getQuizData;
