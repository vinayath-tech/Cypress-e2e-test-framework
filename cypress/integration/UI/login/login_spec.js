  /// <reference types="cypress" />
const { before } = require("mocha");

describe('Login tests for application', () => {

    beforeEach(function() {
        cy.fixture('example').then((data) => {
            this.data = data;
        })
    })

    it('Login with valid credentials', function() {
        cy.login(this.data.email, this.data.password);
        cy.get('.outline-active .nav-item a')
          .contains('Your Feed')
          .should('have.class', 'active');
        cy.logout();
    })

    it('Login with invalid credentials', function() {
        cy.login(this.data.invalidEmail, this.data.password);
        cy.get('.error-messages').should('have.text', 'email or password is invalid');
    });
})