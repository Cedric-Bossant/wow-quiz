import {useEffect, useState} from "react";

export function useQuestions() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("http://localhost:1340/api/questions?populate[responses][populate][scores][populate]=class")
                const data = await response.json()

                console.log(data)
                setQuestions(data.data)
            }
            catch (error) {
                console.error("pas de question actuellement", error)
            }
        }
        fetchQuestions();
    }, []);
    return questions;
}