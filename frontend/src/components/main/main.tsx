import "./main.css"
import { useUsername } from "../context/UsernameContext.tsx";
import { useNavigate } from "react-router-dom";
import { useLastQuizResults } from "../../hooks/useLastQuizResults.ts";

function Main() {
    const { username, setUsername } = useUsername()
    const navigate = useNavigate()
    const results = useLastQuizResults();

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
                    <input
                    type="text"
                    placeholder="Votre pseudo"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                <button
                    className="btn-quiz"
                    onClick={() => {
                        if (username.trim() === "") {
                        alert("Merci de saisir un pseudo !");
                        } else {
                        navigate("/quiz");
                        }
                    }}
                    >
                    C'est parti !
                    </button>
            </div>

            <div className="right-part">
                <h2>Derniers résultats</h2>
                <ul>
                    {results.map((res) => (
                        <li key={res.id}>
                            {res.class && (
                                <div className="logo-and-name">
                                    <img className="last-results-logo" src={`http://localhost:1340${res.class.iconUrl}`} alt={res.class.name} />
                                    <p>{res.username}</p>
                                </div>
                            )}


                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Main