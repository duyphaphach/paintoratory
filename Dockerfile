FROM node:19-buster

RUN apt-get update && apt-get install --no-install-recommends -y

WORKDIR /app

COPY ./package.json ./
RUN npm i
COPY . .
RUN npm run build

EXPOSE 3300