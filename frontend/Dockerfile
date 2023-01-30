FROM node:16-alpine

WORKDIR /frontend

COPY package.json ./
COPY ./src ./src
COPY ./public ./public

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]