import './App.css'
import Header from "./components/header/header.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/quiz/quiz.tsx";
import Main from "./components/main/main.tsx";
import Result from "./components/result/result.tsx";
import {QuizResultProvider} from "./components/context/QuizResultContext.tsx";
import { UsernameProvider } from './components/context/UsernameContext.tsx';
// import {useState} from "react";

function App() {


    return (

        <Router>
            <QuizResultProvider>
                <UsernameProvider>
                <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
                </div>
                </UsernameProvider>
            </QuizResultProvider>
        </Router>

    );
}

export default App
