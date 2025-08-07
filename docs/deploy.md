# WoW Quiz - Déploiement Docker

## Architecture

L’application est composée de plusieurs services orchestrés avec Docker :

| Service         | Stack                                    | Port local                   | Description                                               |
|----------------|-------------------------------------------|------------------------------|-----------------------------------------------------------|
| Frontend        | React (Vite)                             | `http://localhost:3000`      | Interface utilisateur du quiz                             |
| Backend         | Strapi + PostgreSQL                      | `http://localhost:1340`      | CMS headless pour les questions, classes, résultats       |
| API Logs        | Node.js + Express + TypeScript + MongoDB | `http://localhost:4000/logs` | API pour enregistrer les résultats de quiz                |
| PostgreSQL      | Base de données relationnelle            | `5433`                       | Utilisée par Strapi pour stocker les données              |
| MongoDB         | Base de données NoSQL                    | `27017`                      | Utilisée par l'API de logs                                |

---

## Prérequis

- Docker
- Docker Compose

---

## Lancer l'application

```bash
docker compose up --build
