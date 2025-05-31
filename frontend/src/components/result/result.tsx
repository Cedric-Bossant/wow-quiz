import { useContext } from "react";
import {useClasses} from "../../hooks/useClasses.ts";
import "./result.css"
import { QuizResultContext } from "../context/QuizResultContext.tsx";
import {Classe} from "../../types/types.ts";

function Result() {
    const classes: Classe[] = useClasses();
    const { top3 } = useContext(QuizResultContext);

    if (!top3 || top3.length === 0) {
        return <p> seulement le chargement</p>;
    }
    const winner = top3[0]

    if (classes.length === 0) {
        return <p>Chargement des classes...</p>;
    }

   const winnerData:Classe = classes.find((cls) => cls.name.toLocaleLowerCase() === winner.name.toLowerCase());





    return (
        <>
            <div className="result">
                <h2>Vous etes un {winner.name} </h2>
                <h3>Avec un score de {winner.score}/60</h3>
                <div className="mainclass">
                    <img className="classIcon" src={winnerData.iconUrl} alt={winner.name}></img>
                    <p className="desc">
                        {winnerData.description}
                    </p>
                </div>
            </div>
            <div className="secondresult">
                <ul>
                    <h4>Autre classe envisagable:</h4>
                    <li> <p className="top-title">Top 2</p> <p className="top2">{top3[1].name} avec {top3[1].score} points</p></li>
                    <li> <p className="top-title">Top 3</p> <p className="top2">{top3[2].name} avec {top3[2].score} points</p></li>
                </ul>
            </div>

        </>
    );

}

export default Result;
