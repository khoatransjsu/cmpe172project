FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV DB_NAME=khoa123456
ENV DB_PASS=khoa123456

CMD ["npm", "start"]