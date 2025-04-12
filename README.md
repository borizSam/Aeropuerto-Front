# 🌐 Frontend - React + Vite

## Descripción
Este proyecto es el frontend del sistema de aeropuerto, construido con **React** y **Vite**. Se conecta al backend y visualiza los datos de forma dinámica.

## Tecnologías
- React
- Vite
- Docker
- GitHub Actions

## Estructura
- `src/`: código principal React.
- `public/`: recursos estáticos.
- `Dockerfile`: crea la imagen para despliegue.
- `nginx.conf`: configuración para servir la SPA.

## Scripts
```bash
npm install
npm run dev
```

## Docker
```bash
docker build -t tu_usuario_docker/aeropuerto-frontend .
docker run -p 80:80 tu_usuario_docker/aeropuerto-frontend
```