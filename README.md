<p align="center">
  <img src="https://i.imgur.com/lEwDE5k.png" alt="Aeropuerto Frontend Banner" width="800"/>
</p>

# 🌐 Aeropuerto Frontend – React + Vite

> 🖥️ Interfaz web del sistema de gestión aeroportuaria.  
Conecta con el backend desarrollado en **Spring Boot** para mostrar y administrar información de vuelos, aerolíneas, aeropuertos y aviones.

---

## 🚀 Tecnologías principales
- ⚛️ **React 18**
- ⚡ **Vite**
- 🎨 **TailwindCSS**
- 🌐 **Axios**
- 🐳 **Docker**
- 🚀 **GitHub Actions**

---
## 🧩 Arquitectura del proyecto

```plaintext
Aeropuerto-Frontend/
│
├── 📁 src/
│   ├── 📁 assets/              # Imágenes, íconos y estilos globales
│   ├── 📁 components/          # Componentes reutilizables (botones, formularios, etc.)
│   ├── 📁 layout/              # Layout principal (Header, Sidebar, Footer)
│   ├── 📁 pages/               # Páginas principales (Aeropuertos, Vuelos, Aviones)
│   ├── 📁 hooks/               # Custom Hooks (useFlights, usePlanes, etc.)
│   ├── 📁 services/            # Configuración de Axios y conexión al backend
│   ├── 📁 context/             # Contextos globales de la app
│   ├── App.jsx                 # Componente raíz
│   ├── main.jsx                # Punto de entrada (ReactDOM)
│   └── routes.jsx              # Rutas del sistema
│
├── 📁 public/                  # Archivos estáticos
├── ⚙️ Dockerfile               # Imagen Docker del frontend
├── ⚙️ nginx.conf               # Configuración NGINX para servir la SPA
├── ⚙️ vite.config.js           # Configuración de Vite
└── 📦 package.json             # Dependencias y scripts del proyecto
```
---
### ⚙️ Ejecución local
🔹 1. Instalar dependencias
       
    npm install

🔹 2. Configurar conexión con el backend

    Crea un archivo .env en la raíz del proyecto:

    VITE_API_URL=http://localhost:8080/api


Esto permite que el frontend consuma la API del backend de Spring Boot en local.

🔹 3. Ejecutar el entorno de desarrollo
       
     npm run dev


Por defecto, el proyecto estará disponible en:
    
    http://localhost:5173

## 🔄 CI/CD

    Pipeline automatizado con GitHub Actions:

    🧱 Compila el proyecto con Maven

    ✅ Ejecuta tests automáticos

    🐳 Construye y publica la imagen Docker en Docker Hub

    ☁️ Despliega el Frontend en AWS ECS (infraestructura separada)

    Archivo: .github/workflows/ci.yml

## ☁️ Despliegue

El despliegue se gestiona desde el repositorio:
👉 Aeropuerto-Infra

    Incluye:

    ECS (Elastic Container Service)

    Docker Hub

    Load Balancer + Auto Scaling

    Monitoreo con CloudWatch
### 🌐 Repositorios relacionados

[🖥️ Frontend: Aeropuerto-Back](https://github.com/borizSam/Aeropuerto-Back.git)

[☁️ Infraestructura: Aeropuerto-Infra](https://github.com/borizSam/Aeropuerto-infra.git)

### 📜 Licencia

Eres libre de usarlo y modificarlo con atribución.

##### Desarrollado por @borizSam