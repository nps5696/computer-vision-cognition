FROM node:20.9.0

WORKDIR /front-end

COPY ./front-end/package*.json ./

RUN npm install

COPY ./front-end/. .

EXPOSE 3000

CMD ["npm", "start"]
