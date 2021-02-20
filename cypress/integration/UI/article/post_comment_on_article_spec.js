/// <reference types="cypress" />
import * as viewArticleSelect from '../../../selectors/view-article-selectors';

describe('Add comments to an article',() => {
    let slug;

    before('Create a new article',() => {
        cy.apiLogin();
        cy.apiCreateArticle().then((slugPath) =>{
            slug = slugPath;
        })
    });

    it('Post an comment to the article',() => {
        cy.visit(`http://localhost:4100/article/${slug}`);
        viewArticleSelect.commentBox().type('This is a test comment');
        viewArticleSelect.submitBtn().click();
        cy.wait(1000);
        viewArticleSelect.commentTextEle().should('have.text', 'This is a test comment');
        viewArticleSelect.deleteCommentBtn().click();
        viewArticleSelect.commentTextEle().should('not.exist');
    });

    after('tear down step - Delete the article',() => {
        cy.log('I am in the teardown step');
        cy.apiDeleteArticle(slug);
    });
});