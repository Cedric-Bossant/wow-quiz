import "./quiz.css"

function Quiz() {

    return(
<>
        <div className="question-container">
            <h2 className="question-number"> Question N°x/20 </h2>
            <h3 className="question-title">Titre de la question</h3>

        </div>


        <ul className="response-container">
            <li className="response"> partir en courant</li>
            <li className="response"> manger des fraises</li>
            <li className="response"> Janvier</li>
            <li className="response"> Eren jagger</li>
        </ul>

</>
    )

}

export default Quiz