
FROM node:20.9.0


WORKDIR /front-end


COPY package*.json ./

RUN ls -ls

RUN npm install


COPY . .


EXPOSE 3000


CMD ["npm", "start"]
