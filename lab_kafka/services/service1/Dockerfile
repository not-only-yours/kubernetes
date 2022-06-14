FROM node:16.13.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./services/service1/package.json ./
COPY ./services/service1/package-lock.json ./
RUN npm install
COPY . ./

CMD [ "node", "index.js" ]