import "./quiz.css"
import {useQuestions} from "../../hooks/useQuestions.ts";
import {useState} from "react";


function Quiz() {

    const questions = useQuestions();
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<any[]>([]);


    console.log("Questions:", questions)
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
    )

}

export default Quiz