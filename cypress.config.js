const { defineConfig } = require('cypress');
require('dotenv').config(); // <-- Comenta o elimina esta línea, ya no la necesitas.

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
    // Pasa las variables a Cypress directamente
    env: {
      // REEMPLAZA ESTO:
      CYPRESS_USER_EMAIL: process.env.CYPRESS_USER_EMAIL,
      CYPRESS_USER_PASSWORD: process.env.CYPRESS_USER_PASSWORD,

      //O USA ESTO PARA PRUEBAS LOCALES:
      //CYPRESS_USER_EMAIL: 'agarva@gmail.com',
      //CYPRESS_USER_PASSWORD: '1234567',
    },
  },
});
