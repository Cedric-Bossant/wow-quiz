import './App.css'
import Header from "./components/header/header.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/quiz/quiz.tsx";
import Main from "./components/main/main.tsx";
import Result from "./components/result/result.tsx";
// import {useState} from "react";

function App() {
    // const [playing, setPlaying] = useState(false);
    //
    // const handlePlay = () => {
    //     setPlaying(true);
    // }

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result/>} />
            </Routes>
        </Router>
    );
}

export default App
