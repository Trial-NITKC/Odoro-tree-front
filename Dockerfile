FROM node:16.18.1-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV=production
RUN yarn build

# --- #

FROM node:16.18.1-alpine AS prod-env
WORKDIR /app
ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --ignore-scripts
COPY --from=build /app/.nuxt ./.nuxt

# --- #

FROM gcr.io/distroless/nodejs:16 AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0

COPY --from=prod-env /app .
CMD ["node_modules/.bin/nuxt", "start"]