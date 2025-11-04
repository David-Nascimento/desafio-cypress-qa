// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Comando personalizado para realizar login na plataforma EBAC-Shop
 * @param {string} usuario - Email do usuário
 * @param {string} senha - Senha do usuário
 */
Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('#username').type(usuario);
  cy.get('#password').type(senha);
  cy.get('#customer_login > div:nth-child(1) > form > input.button').click();
});