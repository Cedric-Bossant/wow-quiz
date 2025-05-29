FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

# Expose le port interne de Strapi
EXPOSE 1340


CMD ["npm", "run", "develop"]
