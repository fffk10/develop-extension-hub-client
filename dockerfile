FROM node:18-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY pnpm-lock.yaml ./
RUN pnpm fetch

COPY . .

RUN pnpm install

CMD ["pnpm", "run", "dev"]