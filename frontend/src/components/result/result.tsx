import { useContext, useEffect } from "react";
import { useClasses } from "../../hooks/useClasses.ts";
import "./result.css";
import { QuizResultContext } from "../context/QuizResultContext.tsx";
import { Classe } from "../../types/types.ts";
import { useUsername } from "../context/UsernameContext.tsx";
import { storeResult } from "../../hooks/storeResult.ts";
import { useQuizLog } from "../context/QuizLogContext.tsx";

function Result() {
  const classes: Classe[] = useClasses();
  const { winner } = useContext(QuizResultContext);
  const { username } = useUsername();
  const { answersLog } = useQuizLog();

  const winnerData: Classe | undefined = classes.find(
    (cls) => cls.name.toLowerCase() === winner?.name.toLowerCase()
  );

  useEffect(() => {
    const storeData = async () => {
      if (username && winnerData?.id) {
        // Enregistrement dans Strapi (SQL)
        storeResult(username, winnerData.id);
      }

      if (username && winnerData?.name && answersLog.length > 0) {
        try {
          const res = await fetch("http://localhost:5000/logs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username,
              answers: answersLog,
              result: winnerData.name,
            }),
          });

          if (!res.ok) {
            throw new Error("Échec de l'envoi vers MongoDB");
          }

          console.log("✅ Log envoyé à MongoDB");
        } catch (error) {
          console.error("Erreur MongoDB :", error);
        }
      }
    };

    storeData();
  }, [username, winnerData?.id, winnerData?.name, answersLog]);

  if (!winner) {
    return <p>Résultat du quiz non disponible.</p>;
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
        <img className="classIcon" src={winnerData.iconUrl} alt={winner.name} />
        <p className="desc">{winnerData.description}</p>
      </div>
    </div>
  );
}

export default Result;
