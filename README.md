# Assignment Eight – React + Vite Starter

## Overview
This project is a lightweight React single-page application bootstrapped with Vite. It ships with hot module replacement for rapid iteration, a starter counter component, and ready-to-use styling hooks for Tailwind CSS and DaisyUI. The goal is to give you a clean foundation for experimenting with React 19 and modern tooling while keeping the configuration minimal.



## Screenshot
<img width="1917" height="1079" alt="Screenshot 2025-11-19 053646" src="https://github.com/user-attachments/assets/0cf2aea9-d6d3-4971-917f-a3c5f19c44e9" />


## Main Technology Stack
- React 19 with functional components and hooks
- Vite 7 for fast dev/build tooling
- React Router 7 for client-side routing
- Tailwind CSS 4 + DaisyUI for styling utilities and components
- Recharts for data visualization
- React Toastify for inline notifications


- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Core Features
- Hot module replacement for an instant feedback loop during development
- Example counter component to demonstrate state management with hooks
- Preconfigured linting via ESLint with React-specific rules
- Ready-to-use styling pipeline with Tailwind CSS and DaisyUI
- Routing scaffolding powered by React Router (expandable for real pages)

  
## Dependencies
Runtime dependencies:
- `react`, `react-dom`
- `react-router`, `react-router-dom`
- `react-toastify`
- `recharts`
- `tailwindcss`, `@tailwindcss/vite`, `daisyui`

Development dependencies:
- `vite`
- `@vitejs/plugin-react`
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`
- Type definitions: `@types/react`, `@types/react-dom`


## Getting Started (Local Development)
1. Install Node.js 18+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server with hot reloading:
   ```bash
   npm run dev
   ```
   The app will be available at the URL shown in the terminal (typically http://localhost:5173).
4. Run the linter (optional) to check code quality:
   ```bash
   npm run lint
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Live and Relevant Links
- Live demo: [url-'https://lustrous-malabi-aeaeaa.netlify.app/']
- Vite documentation: https://vite.dev/
- React documentation: https://react.dev/
- Tailwind CSS documentation: https://tailwindcss.com/

## Contributing Notes
Feel free to extend the starter by adding real routes, components, and styles. If you create a deployment or capture a screenshot, update the sections above so new contributors get an immediate sense of the project.
