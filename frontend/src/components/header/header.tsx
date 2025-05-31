import './header.css'

function Header() {

return(


<header>

    <div className="nav-left">


        <a className="wow-icon" href="/">
            <img className="wow-logo" src="/assets/wow-logo.svg" alt="logo wow quiz" />
        </a>
    </div>
    <a className="main-title" href="/">
    <h1>Quiz de personnalité World of Warcraft</h1>
    </a>
    <div className="nav-right">


    </div>
</header>
)

}

export default Header;