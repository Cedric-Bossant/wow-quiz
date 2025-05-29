import { useContext } from "react";
import "./result.css"
import { QuizResultContext } from "../context/QuizResultContext.tsx";

function Result() {
    const { top3 } = useContext(QuizResultContext);
    console.log(top3);

    return (
        <div>
            <h2>Top 3 des classes</h2>
            {top3.map(({ name, score }) => (

                <p key={name}>
                    {name} - {score} points
                </p>
            ))}
        </div>
    );
}

export default Result;
