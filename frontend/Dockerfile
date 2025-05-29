# Étape 1 : Build de l'app
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Étape 2 : Serveur pour l'app
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Installe un serveur statique (vite preview ou http-server)
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "--single"]
