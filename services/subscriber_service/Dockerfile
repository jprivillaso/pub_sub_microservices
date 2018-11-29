FROM node:10-alpine

EXPOSE 3001

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install -g forever
RUN npm install --production

CMD ["npm", "start"]
