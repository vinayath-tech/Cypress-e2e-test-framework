  /// <reference types="cypress" />
import * as homePageSelect from '../../../selectors/home-page-selectors';
import * as loginPageSelect from '../../../selectors/login-selectors';

describe('Login tests for application', () => {

    beforeEach(function() {
        cy.fixture('user_login').as('login').then((login) => {
            this.login = login;
        })
    })

    it('Login with valid credentials', function() {
        cy.login(this.login.user.email, this.login.user.password);
        homePageSelect.navLink()
          .contains('Your Feed')
          .should('have.class', 'active');
        cy.logout();
    })

    it('Login with invalid credentials', function() {
        cy.login(this.login.user.email, 'test');
        loginPageSelect.errorButton().should('have.text', 'email or password is invalid');
    });
})