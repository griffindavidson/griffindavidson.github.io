FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 5173

ENTRYPOINT [ "pnpm", "dev","--", "--host", "--port", "5173" ]
