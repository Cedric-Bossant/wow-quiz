import { createContext, useContext, useState, ReactNode } from "react";

interface AnswerLog {
  question: string;
  answer: string;
}

interface QuizLogContextType {
  answersLog: AnswerLog[];
  setAnswersLog: React.Dispatch<React.SetStateAction<AnswerLog[]>>;
}

const QuizLogContext = createContext<QuizLogContextType | undefined>(undefined);

export const QuizLogProvider = ({ children }: { children: ReactNode }) => {
  const [answersLog, setAnswersLog] = useState<AnswerLog[]>([]);

  return (
    <QuizLogContext.Provider value={{ answersLog, setAnswersLog }}>
      {children}
    </QuizLogContext.Provider>
  );
};

export const useQuizLog = () => {
  const context = useContext(QuizLogContext);
  if (!context) {
    throw new Error("useQuizLog must be used within a QuizLogProvider");
  }
  return context;
};
