import {HomePage} from "../../../../pages/home_page";
import {LoginPage} from "../../../../pages/login_page";


describe('Tests for login function', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

        it('1, Login: login with correct email and password', () => {
            homePage.goToHomePage()
            homePage.clickLoginButton()
            loginPage.enterEmail()
            loginPage.enterCorrectPassword()
            loginPage.clickEnterButton()
            homePage.profilePreviewBeVisible()
        })

        it('2, Login: login with wrong password', () => {
            homePage.goToHomePage()
            homePage.clickLoginButton()
            loginPage.enterEmail()
            loginPage.enterWrongPassword()
            loginPage.clickEnterButton()
            loginPage.errorMessageWrongPasswordorEmailBeVisible()
        })

        it('3, Login: login without credential', () => {
            homePage.goToHomePage()
            homePage.clickLoginButton()
            loginPage.clickEnterButton()
            loginPage.errorMessageEnterEmailBeVisible()
            loginPage.errorMessageEnterPasswordBeVisible()
        })






})