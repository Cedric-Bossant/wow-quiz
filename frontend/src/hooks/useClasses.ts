import { useEffect, useState } from "react"
import { Classe } from "../types/types.ts";


export function useClasses() {
    const [classes, setClasses] = useState<Classe[]>([])

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch("http://localhost:1340/api/classes")
                const data = await response.json()
                setClasses(data.data)
            } catch (error) {
                console.error("Erreur lors de la récupération des classes :", error)
            }
        }

        fetchClasses()
    }, [])

    return classes
}