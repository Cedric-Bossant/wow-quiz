import './App.css'
import Header from "./components/header/header.tsx";

function App() {
    return (
        <>
           <Header />

            <section>
                <div className="left-part">
                    <h2>Bonjour le monde</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem
                        consequuntur dicta est exercitationem necessitatibus nesciunt odio quos
                        rerum voluptate.
                    </p>
                </div>
                <div className="right-part">
                    <h2>Derniers résultats</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default App
