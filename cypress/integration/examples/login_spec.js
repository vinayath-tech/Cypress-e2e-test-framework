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
})