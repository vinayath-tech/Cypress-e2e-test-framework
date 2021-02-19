const SETTINGS_BUTTON = "[href='/settings']";
const NEW_POST_BUTTON = "[href = '/editor']";
const LOGOUT_BUTTON = ".btn-outline-danger";
const NAV_LINK = ".outline-active .nav-item a";

export const settingsBtn = () => cy.get(SETTINGS_BUTTON);
export const newPostBtn = () => cy.get(NEW_POST_BUTTON);
export const logoutBtn = () => cy.get(LOGOUT_BUTTON);
export const navLink = () => cy.get(NAV_LINK);