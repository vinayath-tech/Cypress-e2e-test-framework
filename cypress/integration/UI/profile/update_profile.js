/// <reference types="cypress" />
import * as homePageSelect from '../../../selectors/home-page-selectors';
import * as profilePageSelect from '../../../selectors/profile-page-selectors';

describe('Update user profile', () => {
    let randomVal;

    before('Setup test', () => {
        cy.apiLogin();
    });

    function rand(min, max) {
        let randomNum = Math.random() * (max - min) + min;
        return Math.round(randomNum);
    }


    it('Update username', () => {

        randomVal = rand(100, 999);

        cy.visit('/');
        homePageSelect.settingsBtn().click();
        profilePageSelect.unameTextBox().clear();
        profilePageSelect.unameTextBox()
                         .type(`gocool-update-${randomVal}`)
                         .should('have.value', `gocool-update-${randomVal}`);
        profilePageSelect.submitBtn().click();
        cy.wait(2000);
        homePageSelect.profileEle().should('have.text', `gocool-update-${randomVal}`);
        // homePageSelect.logoLink().click();
        // homePageSelect.unameHeader().should('have.text', `gocool-update-${randomVal}`);
    });
})