import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type ClassScore = {
    name: string;
    score: number;
};

type QuizResultContextType = {
    top3: ClassScore[];
    setTop3: Dispatch<SetStateAction<ClassScore[]>>;
};

const defaultContext: QuizResultContextType = {
    top3: [],
    setTop3: () => {}, // fonction vide par défaut
};

export const QuizResultContext = createContext<QuizResultContextType>(defaultContext);

type QuizResultProviderProps = {
    children: ReactNode;
};

export const QuizResultProvider: React.FC<QuizResultProviderProps> = ({ children }) => {
    const [top3, setTop3] = useState<ClassScore[]>([]);

    return (
        <QuizResultContext.Provider value={{ top3, setTop3 }}>
            {children}
        </QuizResultContext.Provider>
    );
};
