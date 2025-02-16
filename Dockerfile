FROM mcr.microsoft.com/playwright:v1.50.1-noble

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

USER pwuser

CMD ["node", "index.js"]
