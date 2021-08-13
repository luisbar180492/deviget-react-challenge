FROM node:14
WORKDIR /react-starter-kit
COPY . .
RUN npm i
CMD [ "npm", "start" ]