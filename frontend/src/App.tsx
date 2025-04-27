import './App.css'
import Header from "./components/header/header.tsx";
import Quiz from "./components/quiz/quiz.tsx";
import Main from "./components/main/main.tsx";
import {useState} from "react";

function App() {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
    }

    return (
        <>
           <Header />
            {playing ? <Quiz /> : <Main onChange={handlePlay} />}
</>
    )
}

export default App
