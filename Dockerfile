FROM node as build 

WORKDIR /app
COPY src /app/src
COPY public /app/public
COPY package*.json tsconfig.json .env /app/
RUN npm install --legacy-peer-deps && npm run build

FROM node:alpine

COPY --from=build /app/build /build
COPY --from=build /app/.env /
EXPOSE 3000
CMD [ "npx", "serve", "-s", "build" ]