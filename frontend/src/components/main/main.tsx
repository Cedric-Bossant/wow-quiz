import "./main.css"
import { useClasses } from "../../hooks/useClasses"
import { Classe } from "../../types/types.ts";

function Main() {
    const classes: Classe[] = useClasses()

    return (
        <main>
            <div className="left-part">
                <h2>Bienvenue en Azeroth</h2>
                <p className="first-para">
                    Quel est votre véritable destin dans l’univers de World of Warcraft ?
                </p>
                <p>
                    Ce quiz vous propose un voyage original, loin des mécaniques de jeu ou des clichés de classes...
                </p>
                <p>
                    Chaque réponse permettra de cerner vos affinités naturelles...
                </p>
                <p>
                    Répondez avec sincérité (et un peu de fun), et découvrez votre voie dans Azeroth.
                </p>

                <a className="btn-quiz" href="/quiz">C'est parti !</a>
            </div>

            <div className="right-part">
                <h2>Derniers résultats</h2>
                <ul>
                    {classes.map((classe) => (
                        <li key={classe.id}>
                            {classe.name}

                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Main