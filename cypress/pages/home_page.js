import {homePageLocators} from "../locators/home_page_locators";
import {homePageData} from "../data/home_page_data";

export class HomePage {

    goToHomePage = () => cy.visit(homePageLocators.baseUrl);
    clickLoginButton = () => cy.contains(homePageLocators.loginButton).click();
    goToCatalogPage = () => cy.get(homePageLocators.catalogButton).click();
    profilePreviewBeVisible = () => cy.get(homePageLocators.profilePrewiew).should('be.visible');
    openSearchWindow = () => cy.get(homePageLocators.searchField).type(' ')
    typeToSearchFieldInSearchWindow = () => cy.iframe(homePageLocators.searchWindowIframe).
    find(homePageLocators.searchFieldInSearchWindow).type(homePageData.searchRequest);

}