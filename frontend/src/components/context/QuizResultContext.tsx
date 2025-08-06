import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type ClassScore = {
  name: string;
  score: number;
};

type QuizResultContextType = {
  winner: ClassScore | null;
  setWinner: Dispatch<SetStateAction<ClassScore | null>>;
};

const defaultContext: QuizResultContextType = {
  winner: null,
  setWinner: () => {},
};

export const QuizResultContext = createContext<QuizResultContextType>(defaultContext);

type QuizResultProviderProps = {
  children: ReactNode;
};

export const QuizResultProvider: React.FC<QuizResultProviderProps> = ({ children }) => {
  const [winner, setWinner] = useState<ClassScore | null>(null);

  return (
    <QuizResultContext.Provider value={{ winner, setWinner }}>
      {children}
    </QuizResultContext.Provider>
  );
};
