# Web para pruebas con Playwright

Este proyecto está diseñado para ser desplegado en localhost y probado con Playwright. Incluye:

- Casos sencillos: botones, inputs, mensajes.
- Casos complejos: listados de elementos, bucles, funcionalidades interactivas.

## Cómo iniciar

```bash
npm run dev
```

Esto desplegará la web en `http://localhost:5173` (o el puerto que indique Vite).

## Estructura
- `src/App.jsx`: Aquí se encuentran los ejemplos para pruebas automatizadas.
- Puedes modificar y agregar más casos según tus necesidades.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Desplegar en Vercel

Puedes publicar esta web en internet fácilmente usando [Vercel](https://vercel.com/):

1. **Crea una cuenta en Vercel:**
   - Ve a https://vercel.com/signup y regístrate (puedes usar tu cuenta de GitHub).

2. **Sube tu proyecto a GitHub:**
   - Si no tienes el proyecto en un repositorio, crea uno y sube todos los archivos.

3. **Importa el proyecto en Vercel:**
   - En Vercel, haz clic en "New Project" y selecciona tu repositorio.
   - Vercel detectará automáticamente que es un proyecto Vite/React.
   - Haz clic en "Deploy".

4. **Obtén tu URL pública:**
   - Al terminar el despliegue, Vercel te dará una URL pública para compartir con quien quieras.

**Notas:**
- Cada vez que actualices tu repositorio en GitHub, Vercel desplegará automáticamente los cambios.
- No necesitas configurar nada especial para Vite, Vercel lo detecta y configura por defecto.
