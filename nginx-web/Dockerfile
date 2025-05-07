# Stage 1: Build React
FROM node:24-slim AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
