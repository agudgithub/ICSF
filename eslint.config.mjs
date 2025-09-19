import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  // 1. Aplicar las recomendaciones de ESLint como base para todos los archivos
  js.configs.recommended,

  // 2. Configuración principal para archivos Node.js
  // Esto sobreescribe las globales del navegador (de 'recommended') con las de Node.
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node, // Agrega todas las globales de Node.js
      },
    },
  },

  // 3. Configuración específica para los tests de Jest
  // Esto añade las globales de Jest a las de Node para los archivos de test.
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // Agrega las globales de Jest (test, expect, etc.)
      },
    },
  },

  // 4. Configuración específica para los tests de Cypress
  // Esto añade las globales de Cypress a las de Node para los archivos de cypress.
  // {
  //   files: ["cypress/**/*.js"],
  //   languageOptions: {
  //     globals: {
  //       ...globals.node,
  //       ...globals.cypress, // Agrega las globales de Cypress (cy, describe, etc.)
  //     },
  //   },
  // },

  // 5. Ignorar archivos que no quieres que se analicen
  {
    ignores: ['node_modules/', 'cypress/'],
  },

  prettierConfig,
];
