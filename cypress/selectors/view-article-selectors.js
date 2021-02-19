// Locators
const ARTICLE_HEADER = "h1";
const ARTICLE_AUTHOR_ELE = "a.author";
const ARTICLE_BODY_ELE = "div p";
const EDIT_BUTTON = ".btn-outline-secondary";
const DELETE_BUTTON = ".btn-outline-danger";
const COMMENT_TEXTBOX = "[placeholder='Write a comment...']";
const SUBMIT_BUTTON = "[type='submit']";
const VIEW_COMMENT_ELE = "p.card-text";
const DELETE_COMMENT_BUTTON = ".mod-options .ion-trash-a";

//Getters
export const headerEle = () => cy.get(ARTICLE_HEADER);
export const authorEle = () => cy.get(ARTICLE_AUTHOR_ELE);
export const bodyEle = () => cy.get(ARTICLE_BODY_ELE);
export const editBtn = () => cy.get(EDIT_BUTTON);
export const deleteBtn = () => cy.get(DELETE_BUTTON);
export const commentBox = () => cy.get(COMMENT_TEXTBOX); 
export const submitBtn = () => cy.get(SUBMIT_BUTTON);
export const commentTextEle = () => cy.get(VIEW_COMMENT_ELE);
export const deleteCommentBtn = () => cy.get(DELETE_COMMENT_BUTTON);

