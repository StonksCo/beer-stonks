FROM node:18.12.1-alpine3.17 AS base

ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]