FROM node:8.11.1-alpine

WORKDIR /app/producer
COPY package*.json ./
COPY producer.js ./
RUN npm install
CMD ["node", "producer.js"]