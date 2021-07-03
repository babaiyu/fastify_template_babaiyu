FROM node:14-alpine

WORKDIR /app

RUN npm install --global pm2

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 8500

USER node

CMD ["pm2-runtime", "npm", "--", "start"]
