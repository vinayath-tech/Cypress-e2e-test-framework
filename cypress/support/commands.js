/// <reference types="cypress" />

import * as loginPageSelect from '../selectors/login-selectors';
import * as homePageSelect from '../selectors/home-page-selectors';
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
let token;

Cypress.Commands.add("login", (email, password) => { 
    cy.visit('/');
    loginPageSelect.loginButton().click();
    loginPageSelect.emailEle().type(email);
    loginPageSelect.passwordEle().type(password);
    loginPageSelect.submitButton().click();
});

Cypress.Commands.add("logout", () => {
    homePageSelect.settingsBtn().click();
    homePageSelect.logoutBtn().click();
    cy.contains('Sign in');
});

Cypress.Commands.add("apiLogin", () => {
    cy.fixture('user_login').as('login').then((login) =>{
        cy.request('POST', `${apiUrl}/api/users/login`,login)
          .then((response) => {
                localStorage.setItem('jwt', response.body.user.token);
                token = localStorage.getItem('jwt');
          });
    });
})

Cypress.Commands.add("apiDeleteArticle", (slug) => {
    cy.request({
            method: 'DELETE',
            url: `${apiUrl}/api/articles/${slug}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        });
});

Cypress.Commands.add("apiCreateArticle", () => {

    cy.fixture('article_details').as('articles').then((articles) => {
        return cy.request({
            method: 'POST',
            url: `${apiUrl}/api/articles`,
            body: articles,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
          })
          .its('body.article.slug')
          .should('exist')
    });

    // return cy.request({
    //         method: 'POST',
    //         url: `${apiUrl}/api/articles`,
    //         body: {"article":{"title":"Test title", "description":"Test description", "body":"Test body.", "tagList":["Tags-test"]}},
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Token ${token}`
    //         }
    //       })
    //       .its('body.article.slug')
    //       .should('exist')
});