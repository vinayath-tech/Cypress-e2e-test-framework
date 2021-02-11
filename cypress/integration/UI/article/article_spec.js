/// <reference types="cypress" />

describe('Article use case',() => {

    before('Login to application as a prestep',() => {
       cy.apiLogin();
    });

    it('User can post an article',() => {
        cy.visit('http://localhost:4100/');
        cy.get("[href = '/editor']").contains('New Post');
    });
})