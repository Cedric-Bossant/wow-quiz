import './header.css'

function Header() {

return(


<header>
    <div className="nav-left">


        <a href="home-page.html">
            <img src="../src/assets/wow-logo.svg" alt="logo wow quiz" />
        </a>
    </div>
    <h1>Quiz de personnalité World of Warcraft</h1>

    <div className="nav-right">
        <a className="btn-quiz" href="/quiz">Faire le quiz</a>
        <a className="btn-contact" href="/contact">Contact</a>
    </div>
</header>
)

}

export default Header;