# poliver – Personal Portfolio

This repository contains the source code for **poliver.dev**, a personal portfolio website built with **React** and **Vite**. The site showcases who I am, the projects I’ve worked on, and provides easy ways to download my CV and get in touch for potential collaborations.

## Overview

- **Tech Stack**
  - **Frontend**: React (with Vite as the build tool)
  - **Language**: TypeScript
  - **Styling**: (To be decided – e.g. Tailwind CSS, CSS Modules, styled-components)

- **Production URL**: `https://poliver.dev`

## Core Features

- **About Me**
  - Brief introduction, background, and current role/interests.
  - Highlights of skills, tools, and technologies I use.

- **Projects**
  - Curated list of projects with descriptions, screenshots, and key technical details.
  - Links to live demos and GitHub repositories where appropriate.

- **CV Download**
  - Up-to-date CV available as a downloadable PDF.
  - Clear call-to-action for recruiters and collaborators.

- **Contact**
  - Contact form to reach me directly.
  - Links to email and relevant social profiles (e.g. GitHub, LinkedIn).

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Roadmap

- Set up Vite + React project scaffold.
- Choose and configure styling solution.
- Implement core pages: About, Projects, Contact, and a landing/home page.
- Add CV download functionality.
- Add SEO basics (meta tags, Open Graph, etc.).
- Deploy to production at `poliver.dev`.

## License

This is a personal portfolio. Unless otherwise noted in specific project subdirectories, all rights are reserved.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
