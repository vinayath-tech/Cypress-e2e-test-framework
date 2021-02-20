import * as homePageSelect from '../../../selectors/home-page-selectors';

describe('Favourite articles', () => {

    before('Login to application as a prestep', () => {
        cy.apiLogin();
    });

    it('Verify user can follow article', () => {
        cy.visit('/');
        homePageSelect.logoLink().click();
        homePageSelect.editBtn().should('be.visible');
        homePageSelect.articleList().should('have.length', 5);
        homePageSelect.paginationEle().should('be.visible');

        //Select favourite articles
        homePageSelect.favouriteIconEle().click();
        homePageSelect.favouriteArticleTab().click();
        cy.fixture('article_details').as('articles').then((articles) => {
            homePageSelect.titleEle().should('have.text', articles.article.title);
            homePageSelect.descEle().should('have.text', articles.article.description);
        });

        //Verify favourite article
        homePageSelect.articleList().should('be.visible');
        homePageSelect.articleList().should('have.length', 1);
        homePageSelect.iconCount().should('have.text', ' 1');
        
        
    });

    it('Verify user can unfollow article', () => {
        homePageSelect.favouriteIconEle().click();
        cy.reload();
        homePageSelect.articleList().should('have.text', 'No articles are here... yet.');

    })

});