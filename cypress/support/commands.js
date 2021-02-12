/// <reference types="cypress" />
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
const apiUrl = Cypress.env('apiUrl')

Cypress.Commands.add("login", (email, password) => { 
    cy.visit('/');
    cy.get("[href='/login']").click();
    cy.get("[type='email']").type(email);
    cy.get("[type='password']").type(password);
    cy.get("[type='submit']").click();
});

Cypress.Commands.add("logout", () => {
    cy.get("[href='/settings']").click();
    cy.get(".btn-outline-danger").click();
    cy.contains('Sign in');
});

Cypress.Commands.add("apiLogin", () => {
    cy.getLoginToken().then(token => {
        localStorage.setItem('jwt', token)
    });
});

Cypress.Commands.add("getLoginToken", () => {
    return cy
        .request('POST', `${apiUrl}/api/users/login`,
                        { user:{ email: "gocool@mailinator.com",password: "testing123"}}
                )
        .its('body.user.token')
        .should('exist')
})

Cypress.Commands.add("apiDeleteArticle", (slug) => {
    cy.getLoginToken().then(token => {
        cy.request({
            method: 'DELETE',
            url: `${apiUrl}/api/articles/${slug}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        });
    });
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
