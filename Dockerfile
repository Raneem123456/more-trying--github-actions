FROM alpine

WORKDIR /app

COPY index.js .

RUN apk add --updatenodejs

RUN apk add --update npm

RUN npm install express

CMD node index.js

