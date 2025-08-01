import { useEffect, useState } from "react";

interface Classe {
  id: number;
  name: string;
  iconUrl: string;
}

interface QuizResult {
  id: number;
  username: string;
  createdAt: string;
  class?: Classe;
}

export function useLastQuizResults() {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          "http://localhost:1340/api/quiz-results?populate=class.icon&sort=createdAt:desc&pagination[limit]=8"
        );
        const json = await response.json();

        const formatted = json.data.map((item: any) => {
          const cls = item.class;

          return {
            id: item.id,
            username: item.username,
            createdAt: item.createdAt,
            class: cls
              ? {
                  id: cls.id,
                  name: cls.name,
                  iconUrl: cls.icon?.[0]?.url ?? "",
                }
              : undefined,
          };
        });

        setResults(formatted);
      } catch (err) {
        console.error("[useLastQuizResults] Erreur de récupération :", err);
      }
    };

    fetchResults();
  }, []);

  return results;
}
