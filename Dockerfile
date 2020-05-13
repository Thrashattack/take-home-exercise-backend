FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run setup

ENV port 4001

EXPOSE 4001
