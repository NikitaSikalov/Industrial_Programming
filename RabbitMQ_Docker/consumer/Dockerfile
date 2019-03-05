FROM node:8.11.1-alpine

WORKDIR /app/consumer
COPY package*.json ./
COPY consumer.js ./
RUN npm install
CMD ["node", "consumer.js"]