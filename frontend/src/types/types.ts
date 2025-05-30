export type ClasseName =
    | "Guerrier"
    | "Mage"
    | "Chaman"
    | "Druide"
    | "Paladin"
    | "Demoniste"
    | "Voleur"
    | "Pretre"
    | "Chasseur";

export interface Classe {
    id: number;
    name: ClasseName;
    description: string;
    iconUrl: string;
}

export interface Response {
    answer: string;
    scores: AnswerScore[];
}
export type AnswerScore = {
    score: number;
    name: string;
    class: Classe;
}

export interface Question {
    id: number;
    number: number;
    content: string;
    responses: Response[];
}
