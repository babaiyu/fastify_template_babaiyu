FROM node:14-alpine

WORKDIR /app

RUN npm install --global pm2

COPY package*.json ./
COPY tsconfig.json ./
COPY index.ts ./
COPY src/ src/

RUN npm install && npm run build

COPY . .

EXPOSE 7999

USER node

CMD ["pm2-runtime", "start", "index.js"]