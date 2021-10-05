import {HomePage} from "../../../../pages/home_page";
import {CatalogPage} from "../../../../pages/catalog_page";


describe('Tests for login function', () => {
    const homePage = new HomePage();
    const catalogPage = new CatalogPage()

    // it('4, Custom test: test with hover, click checkbox', () => {
    //     homePage.goToHomePage()
    //     homePage.goToCatalogPage()
    //     catalogPage.clickToComputersAndNetworksButton()
    //     catalogPage.hoverToAccessoriesTab()
    //     catalogPage.clickToVideoCardsButton()
    //     catalogPage.addProductsToComparisonProducts(4)
    //     catalogPage.writeProductsName(4).
    //     then((array) => {
    //     catalogPage.openComprarisonProductsPage()
    //     catalogPage.writeAddedProductName(4, array)
    //         })
    // })

    it('5, Custom test: test with iframe',() => {
        homePage.goToHomePage()
        homePage.openSearchWindow()
        homePage.typeToSearchFieldInSearchWindow()



    })




})