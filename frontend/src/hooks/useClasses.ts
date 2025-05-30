import { useEffect, useState } from "react"
import { Classe } from "../types/types.ts";


export function useClasses() {
    const [classes, setClasses] = useState<Classe[]>([])

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch("http://localhost:1340/api/classes?populate=icon")
                const data = await response.json()



                const formatted = data.data.map((item: any): Classe => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    iconUrl: (import.meta.env.VITE_STRAPI_URL) + (item.icon[0].url),
                    // http://localhost:1340/uploads/Class_Warrior_b7a7b36963.svg
                }),
                )
                console.log(data.data[0].icon[0].url)
                console.log("iconURL ======== ??", formatted.iconUrl)
                setClasses(formatted)

            } catch (error) {
                console.error("Erreur lors de la récupération des classes :", error)
            }
        }

        fetchClasses()
    }, [])

    return classes
}