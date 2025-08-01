import { useContext } from "react";
import { useEffect } from "react";
import { useClasses } from "../../hooks/useClasses.ts";
import "./result.css";
import { QuizResultContext } from "../context/QuizResultContext.tsx";
import { Classe } from "../../types/types.ts";
import { useUsername } from "../context/UsernameContext.tsx";
import { storeResult } from "../../hooks/storeResult.ts";


function Result() {
  const classes: Classe[] = useClasses();
  const { top3 } = useContext(QuizResultContext);
  const { username } = useUsername();

  
  const winner = top3[0];
  
  
  const winnerData: Classe | undefined = classes.find(
      (cls) => cls.name.toLowerCase() === winner.name.toLowerCase()
    );
    console.log("winnerData.id ===", winnerData?.id);
    
    
    useEffect(() => {

        console.log("[useEffect] username:", username);
        console.log("[useEffect] winnerData:", winnerData?.id);

        if (username && winnerData?.id) {
            storeResult(username, winnerData.id);
        }
    }, [username, winnerData?.id]);
    
    
    if (!top3 || top3.length === 0) {
      return <p>Seulement le chargement</p>;
    }
    if (classes.length === 0) {
      return <p>Chargement des classes...</p>;
    }
    if (!winnerData) {
        return <p>Erreur : Classe gagnante introuvable.</p>;
    }

  return (
    <div className="result-wrapper">
      <div className="result">
        <h2>{username}, vous avez l'âme d'un {winner.name}</h2>
        <img
          className="classIcon"
          src={winnerData.iconUrl}
          alt={winner.name}
        />
        <p className="desc">{winnerData.description}</p>
      </div>
    </div>
  );
}

export default Result;
