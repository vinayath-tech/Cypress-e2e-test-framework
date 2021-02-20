// Locators
const unameEle = "[placeholder='Username']";
const submitEle = "[type='submit']";

// Getters
export const unameTextBox = () => cy.get(unameEle);
export const submitBtn = () => cy.get(submitEle);