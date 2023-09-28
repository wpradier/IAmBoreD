FROM node:18
LABEL authors="william"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80

ENTRYPOINT ["npm", "start"]
