# PayNStay Frontend

Este es el repositorio del proyecto **PayNStay Frontend**, que proporciona la interfaz de usuario para la plataforma PayNStay. Este sistema está diseñado para ofrecer una experiencia amigable y eficiente para la gestión de alojamientos y pagos.

## Características

- **Interfaz de Usuario Intuitiva:** Diseño claro y fácil de usar.
- **Integración Backend:** Conexión fluida con los servicios backend.
- **Responsive Design:** Compatible con dispositivos móviles y de escritorio.
- **Funcionalidades Principales:**
  - Registro e inicio de sesión de usuarios.
  - Gestión de propiedades y pagos.
  - Visualización de reservas.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/PayNStay-Frontend.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd PayNStay-Frontend
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Para ejecutar el proyecto en un entorno de desarrollo:

```bash
npm start
```

El servidor de desarrollo estará disponible en `http://localhost:3000`.

## Construcción para Producción

Para crear una versión optimizada del proyecto:

```bash
npm run build
```

Los archivos optimizados estarán disponibles en el directorio `build/`.

## Estructura del Proyecto

```
PayNStay-Frontend/
├── build/              # Archivos optimizados para producción
├── src/                # Código fuente del proyecto
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Páginas principales
│   ├── styles/         # Archivos de estilo
│   └── App.js          # Punto de entrada principal
├── public/             # Archivos públicos
├── package.json        # Configuración del proyecto
└── README.md           # Documentación
```

## Detalles del Código

El código está organizado de manera modular para facilitar su mantenimiento y escalabilidad:

- **Components:** Incluye componentes reutilizables como formularios, botones y otros elementos de la interfaz.
- **Pages:** Contiene las vistas principales de la aplicación, como la página de inicio, detalles de propiedades y gestión de usuarios.
- **Styles:** Archivos CSS organizados para mantener consistencia visual en toda la aplicación.
- **App.js:** El punto de entrada principal de la aplicación donde se configuran las rutas y el contexto global.





