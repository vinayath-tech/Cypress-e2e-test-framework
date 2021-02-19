//locators
const LOGIN_BUTTON = "[href='/login']";
const EMAIL_TEXTBOX = "[type='email']";
const PASSWROD_TEXTBOX = "[type='password']";
const SUBMIT_BUTTON = "[type='submit']";
const ERROR_MESSAGE = ".error-messages";

//getters
export const loginButton = () => cy.get(LOGIN_BUTTON);
export const emailEle = () => cy.get(EMAIL_TEXTBOX);
export const passwordEle = () => cy.get(PASSWROD_TEXTBOX);
export const submitButton = () => cy.get(SUBMIT_BUTTON);
export const errorButton = () => cy.get(ERROR_MESSAGE);

