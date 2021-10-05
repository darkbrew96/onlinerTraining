
import {loginPageLocators} from "../locators/login_page_locators";
import {loginPageData} from "../data/login_page_data";

export class LoginPage {

    enterEmail = () => cy.get(loginPageLocators.emailField).type(loginPageData.email);
    enterCorrectPassword = () => cy.get(loginPageLocators.passwordField).type(loginPageData.correctPassword);
    enterWrongPassword = () => cy.get(loginPageLocators.passwordField).type(loginPageData.wrongPassword);
    clickEnterButton = () => cy.get(loginPageLocators.enterButton).click();
    errorMessageWrongPasswordorEmailBeVisible = () => cy.contains(loginPageLocators.errorMessageWrongPasswordOrEmail).should('be.visible');
    errorMessageEnterEmailBeVisible = () => cy.contains(loginPageLocators.errorMessageEnterEmail).should('be.visible');
    errorMessageEnterPasswordBeVisible = () => cy.contains(loginPageLocators.errorMessageEnterPassword).should('be.visible');

}