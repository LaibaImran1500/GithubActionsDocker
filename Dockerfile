# Stage 1: Builder
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test

# Stage 2: Final image
FROM node:18-slim

WORKDIR /app
COPY --from=builder /app /app
RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]
