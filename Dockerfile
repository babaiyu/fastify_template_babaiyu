FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY index.ts ./
COPY src/ src/

RUN npm install && npm run clean-build && npm run build

COPY . .

EXPOSE 7999

CMD ["node", "./index.js"]