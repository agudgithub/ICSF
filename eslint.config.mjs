import js from "@eslint/js";
import globals from "globals";

export default [
  // 1. Configuración principal para archivos Node.js
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node, // Agrega todas las globales de Node.js
      },
    },
    rules: {
      // Puedes añadir reglas personalizadas aquí si quieres
    },
  },

  // 2. Ignorar archivos que no quieres que se analicen
  {
    ignores: ["node_modules/"],
  },

  // 3. Configuración específica para los tests de Jest
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // Agrega las globales de Jest (test, expect, etc.)
      },
    },
  },

  // 4. Configuración específica para los tests de Cypress
  {
    files: ["cypress/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.cypress, // Agrega las globales de Cypress (cy, describe, etc.)
      },
    },
  },

  // 5. Aplicar las recomendaciones de ESLint a todos los archivos
  js.configs.recommended,
];
