FROM node:16.13.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./services/service1-kafka/package.json ./
COPY ./services/service1-kafka/package-lock.json ./
RUN npm install
COPY ./services/service1-kafka/ ./

CMD [ "node", "index.js" ]