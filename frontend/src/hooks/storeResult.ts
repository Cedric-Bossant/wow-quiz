export async function storeResult(username: string, classId: number) {
  try {
    const payload = {
      data: {
        username,
        class: {
          connect: [{ id: classId }]
        }
      }
    };

    console.log("Payload envoyé à Strapi :", JSON.stringify(payload, null, 2));

    const response = await fetch("http://localhost:1340/api/quiz-results?populate=class", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Réponse Strapi :", error);
      throw new Error("Erreur lors de l'envoi du résultat à Strapi");
    }

    const data = await response.json();
    console.log("[storeResult] Résultat envoyé à Strapi :", data);
  } catch (error) {
    console.error("[storeResult] Échec de l'envoi :", error);
  }
}
