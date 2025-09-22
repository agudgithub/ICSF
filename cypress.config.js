const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',

    env: {
      CYPRESS_USER_EMAIL: process.env.CYPRESS_USER_EMAIL,
      CYPRESS_USER_PASSWORD: process.env.CYPRESS_USER_PASSWORD,
    },
  },
});
