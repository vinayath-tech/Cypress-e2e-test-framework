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

    it('Login with invalid email and password', function() {
        cy.login('test@test.com', 'test');
        loginPageSelect.errorButton().should('have.text', 'email or password is invalid');
    });

    it('Login with invalid password', function() {
        cy.login(this.login.user.email, 'test');
        loginPageSelect.errorButton().should('have.text', 'email or password is invalid');
    });

    it('Login with invalid email', function() {
        cy.login('test@test.com', this.login.user.password);
        loginPageSelect.errorButton().should('have.text', 'email or password is invalid');
    });
})