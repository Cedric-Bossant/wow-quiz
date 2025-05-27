import "./quiz.css"
import {useQuestions} from "../../hooks/useQuestions.ts";
import {useContext, useState} from "react";
import {QuizResultContext} from "../context/QuizResultContext.tsx";
import { useNavigate } from "react-router-dom";


function Quiz() {
    const navigate = useNavigate();
    const questions = useQuestions();
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<any[]>([]);
    const {setTop3} = useContext(QuizResultContext)


    if (questions.length === 0) {
        return <p>Chargement des questions...</p>;
    }

    const question = questions[current];


    const handleAnswer = (answer: any) => {
        setAnswers([...answers, answer]);

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
        } else {
            const scoreByClass = {
                "Guerrier": 0,
                "Mage": 0,
                "Chaman": 0,
                "Druide": 0,
                "Paladin": 0,
                "Demoniste": 0,
                "Voleur": 0,
                "Pretre": 0,
                "Chasseur": 0,
            };

            [...answers, answer].forEach((ans) => {
                ans.scores.forEach((score: any) => {
                    const className = score.class.name;
                    const points = score.score;

                    if (scoreByClass[className] !== undefined) {
                        scoreByClass[className] += points;
                    }

                });
            });
            console.log("Fin du quiz. Résultats :", scoreByClass);

            const target = 100;
            const sorted = Object.entries(scoreByClass)
                // entries me permet transformer mon objet en tableau clé valeur
                //             [   "Guerrier": 0,
                //                 "Mage": 0,
                //                 "Chaman": 0,
                //                 "Druide": 0,
                //                 "Paladin": 0,
                //                 "Demoniste": 0,
                //                 "Voleur": 0,
                //                 "Pretre": 0,
                //                 "Chasseur": 0,
                //              ]


                .map(([name, score]) => ({name, score}))
                // ici je restructure un tableau en tableau d'objet
                //                  [
                //                  {name: "Guerrier": score:0},
                //                 {name: "Guerrier": score:0},
                //                 {name: "Mage": score:0},
                //                 {name: "Chaman": score:0},
                //                 {name: "Paladin": score:0},
                //                 {name: "Démoniste": score:0},
                //                 {name: "Voleur": score:0},
                //                 {name: "pretre": score:0},
                //                 {name: "Chasseur": score:0},
                //            ]

                .sort((a, b) => Math.abs(a.score - target) - Math.abs(b.score - target));
            //     ici je tri le tableau selon les points qui les sépares de target donc de 100


            console.log("classe la plus proche", sorted);
            const top3 = sorted.slice(0, 3);
            setTop3(top3);
            navigate("/result")
        }
    };


    return(
    <>

        <div className="question-container">
            <h2 className="question-number"> Question N°{question.number}/{questions.length} </h2>
            <h3 className="question-title">{question.content}</h3>
        </div>


        <ul className="response-container">
            {question.responses.map((answer: any, index: number) => (
                <li
                    key={index}
                    className="response"
                    onClick={() => handleAnswer(answer)}
                >
                    {answer.answer}
                </li>
            ))}
        </ul>

    </>
    );
}


export default Quiz
