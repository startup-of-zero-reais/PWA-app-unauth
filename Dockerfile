FROM node:alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . .

RUN yarn

EXPOSE 3000
CMD yarn dev