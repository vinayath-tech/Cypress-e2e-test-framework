//locators
const ARTICLE_TITLE_TEXTBOX = "[placeholder='Article Title']";
const ARTICLE_DESC_TEXTBOX = "[placeholder='What\\'s this article about?']";
const ARTICLE_BODY_TEXTBOX = "[placeholder='Write your article (in markdown)']";
const ARTICLE_TAG_TEXTBOX = "[placeholder='Enter tags']";
const SUBMIT_ARTICLE_BUTTON = "[type='button']";

//getters
export const titleEle = () => cy.get(ARTICLE_TITLE_TEXTBOX);
export const descEle = () => cy.get(ARTICLE_DESC_TEXTBOX);
export const bodyEle = () => cy.get(ARTICLE_BODY_TEXTBOX);
export const tagEle = () => cy.get(ARTICLE_TAG_TEXTBOX);
export const submitEle = () => cy.get(SUBMIT_ARTICLE_BUTTON);