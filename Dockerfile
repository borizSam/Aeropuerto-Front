# Etapa 1: build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servir contenido estático con nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Copia archivo de configuración opcional (para React router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
