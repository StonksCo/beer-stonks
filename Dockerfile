FROM node:18.12.1-alpine3.17 AS base

WORKDIR /app

ENV PORT 8000

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

FROM base AS client

RUN yarn client-build

EXPOSE 3000

CMD ["yarn", "client"]

FROM base AS server

EXPOSE ${PORT}

CMD ["yarn", "server"]

FROM base AS dev

EXPOSE 3000
EXPOSE ${PORT}

CMD ["yarn", "dev"]