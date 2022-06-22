FROM node:16.13.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./services/service2/package.json ./
COPY ./services/service2/package-lock.json ./
RUN npm install
COPY ./services/service2/ ./

CMD [ "node", "index.js" ]