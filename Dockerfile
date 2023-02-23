FROM node:18.12.1-alpine3.17 AS base

WORKDIR /app

ENV BACKEND_PORT 8000

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn client-build

EXPOSE ${BACKEND_PORT} 3000