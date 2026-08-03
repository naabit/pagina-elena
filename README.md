# Sitio web profesional — Elena

Landing page profesional desarrollada para presentar los servicios jurídicos de Elena y facilitar el contacto con potenciales clientes en Chile.

El sitio está diseñado con una estética elegante, cercana y moderna, adaptada a computadores, tablets y dispositivos móviles.

## Características

- Diseño responsive
- Navegación con menú móvil
- Hero con balanza animada
- Sección de servicios jurídicos
- Presentación profesional
- Explicación del proceso de atención
- Formulario de contacto integrado con Google Forms
- Registro automático de consultas en Google Sheets
- Botón flotante de WhatsApp
- Animaciones al hacer scroll
- Navegación suave entre secciones
- Consideraciones de accesibilidad
- Compatibilidad con movimiento reducido

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- HTML5
- CSS3
- Google Forms
- Google Sheets

## Estructura del proyecto

```text
pagina-elena/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AnimatedScales.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Logo.jsx
│   │   ├── Process.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

La estructura puede variar ligeramente según la organización final de los componentes.

Instalación local

Clona el repositorio:

git clone URL_DEL_REPOSITORIO

Entra en la carpeta:

cd pagina-elena

Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

npm run dev

Vite mostrará una dirección local similar a:

http://localhost:5173
Comandos disponibles
npm run dev

Inicia el entorno de desarrollo.

npm run build

Genera la versión optimizada para producción dentro de la carpeta dist.

npm run preview

Permite revisar localmente la versión de producción.

npm run lint

Ejecuta ESLint para detectar posibles problemas en el código.

Formulario de contacto

El formulario visual del sitio envía las respuestas a Google Forms mediante su endpoint formResponse.

Cada campo está conectado con un identificador de Google Forms del tipo:

entry.123456789

Las respuestas pueden revisarse desde:

Google Forms
Google Sheets

Esta integración permite recibir consultas sin implementar un backend propio.

Personalización

Los datos de contacto se encuentran principalmente en:

src/components/Contact.jsx

Desde allí se pueden modificar:

Correo electrónico
Número de WhatsApp
Ubicación
Modalidad de atención
Categorías del formulario

Los colores y estilos generales se encuentran en:

src/styles.css

Las variables principales están definidas dentro de :root:

:root {
  --navy: #0d1b33;
  --gold: #c8a45a;
  --sand: #e8e0d2;
  --ivory: #f6f2ea;
  --white: #fffdf9;
  --text: #253047;
  --muted: #667085;
}
Consideraciones importantes

Antes de publicar el sitio se deben revisar y reemplazar todos los datos temporales, incluyendo:

Correo de ejemplo
Número de WhatsApp
Nombre profesional
Información sobre servicios
Fotografía
Enlaces externos
Dominio definitivo

También se recomienda probar el formulario desde una ventana de incógnito para verificar que no solicite iniciar sesión en Google.

Despliegue

El proyecto puede desplegarse gratuitamente mediante:

GitHub Pages
Netlify
Vercel
Cloudflare Pages

Antes de desplegar, genera la versión de producción:

npm run build
Desarrollo

Desarrollado por naabit.cl.