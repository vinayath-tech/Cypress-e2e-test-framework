/// <reference types="cypress" />

describe('Article use case',() => {
    let slug;
    let returnedUrl;

    before('Login to application as a prestep',() => {
       cy.apiLogin();
    });

    it('User can create a new article',() => {
        cy.visit('http://localhost:4100/');
        cy.get("[href = '/editor']").contains('New Post');
        cy.get("[href = '/editor']").click();
        cy.wait(3000);
        cy.get("[placeholder='Article Title']").type("Test title");
        cy.get("[placeholder='What\\'s this article about?']").type("Test title for testing");
        cy.get("[placeholder='Write your article (in markdown)']").type("Test description");
        cy.get("[placeholder='Enter tags']").type("ui-tests");
        cy.get("[type='button']").click();
    });

    it('Verify article is successfully created',() => {
        cy.get("h1").should("have.text", "Test title");
        cy.get("a.author").should("have.text", "gocool345");
        cy.get("div p").should("have.text", "Test description");
        cy.get(".btn-outline-secondary").then(($el) => {
            expect($el).to.be.visible;
        });
        cy.get(".btn-outline-danger").then(($el) => {
            expect($el).to.be.visible;
        });
        cy.url().then(url => {
            returnedUrl = url.split('/');
            slug = returnedUrl[4];
            cy.log(slug);
        });
    });

    after('tear down step - Delete the article',() => {
        cy.apiDeleteArticle(slug);
    });


})