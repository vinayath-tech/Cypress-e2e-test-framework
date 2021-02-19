/// <reference types="cypress" />
import * as homePageSelect from '../../../selectors/home-page-selectors';
import * as createArticleSelect from '../../../selectors/create-article-selectors';
import * as viewArticleSelect from '../../../selectors/view-article-selectors';


describe('Article use case',() => {
    let slug;
    let returnedUrl;

    before('Login to application as a prestep',() => {
       cy.apiLogin();
    });

    it('User can create a new article',() => {
        cy.visit('http://localhost:4100/');
        homePageSelect.newPostBtn().contains('New Post');
        homePageSelect.newPostBtn().click();
        cy.wait(3000);
        cy.fixture('article_details').as('articles').then((articles) => {
            createArticleSelect.titleEle().type(articles.article.title);
            createArticleSelect.descEle().type(articles.article.description);
            createArticleSelect.bodyEle().type(articles.article.body);
            createArticleSelect.tagEle().type(articles.article.tagList[0]);
            createArticleSelect.submitEle().click();
        });
    });

    it('Verify article is successfully created',() => {
        viewArticleSelect.headerEle().should("have.text", "Test title");
        viewArticleSelect.authorEle().should("have.text", "gocool345");
        viewArticleSelect.bodyEle().should("have.text", "Test body");
        viewArticleSelect.editBtn().then(($el) => {
            expect($el).to.be.visible;
        });
        viewArticleSelect.deleteBtn().then(($el) => {
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