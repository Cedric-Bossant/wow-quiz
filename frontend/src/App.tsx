import './App.css'

function App() {
    return (
        <>
            <header>
                <div className="nav-left">


                <a href="home-page.html">
                    <img src="../src/assets/wow-logo.svg" alt="logo wow quiz" />
                </a>
                </div>
                <h1>Quiz de personnalité WoW of Warcraft</h1>

                <div className="nav-right">
                    <a className="btn-quiz" href="/quiz">Faire le quiz</a>
                    <a className="btn-contact" href="/contact">Contact</a>
                </div>
            </header>

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
