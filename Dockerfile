FROM node:20.12.1 AS build

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

COPY client/ ./

RUN npm run build

WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY server/ ./

RUN cp -r /app/client/dist /app/server/public

RUN npm run build

EXPOSE $PORT

CMD ["npm", "run", "start"]
