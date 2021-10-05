import {catalogLocators} from "../locators/catalog_locators";

let selectedProducts = [];
export class CatalogPage {

    selectedElement = '';
    addedElement = '';


    clickToComputersAndNetworksButton = () => cy.get(catalogLocators.computersAndNetworksButton).click();

    hoverToAccessoriesTab = () => cy.contains(catalogLocators.accessoriesTab).trigger('mouseover');

    clickToVideoCardsButton = () => cy.get(catalogLocators.videoCardsButton).click();

    addProductsToComparisonProducts = (number) =>
        cy.get(catalogLocators.productInPage).each(($el, index, $lis) => {
        if ($el.index(catalogLocators.productInPage), index<number) {
            index = 0
            cy.get($el).click({force:true})
            index++
        }
    })

    writeProductsName = (number) =>
        cy.get(catalogLocators.textProductInPage).each(($el, index, $lis) => {
            let selectedProducts = [];
        if ($el.index(catalogLocators.textProductInPage), index<number) {
            index = 0
            let selectedProduct = $el.text()
            selectedProducts.push(selectedProduct)
            index++
        }
        return selectedProducts
    })

    openComprarisonProductsPage = () => cy.get(catalogLocators.compareProductsButton).click()

    writeAddedProductName = (number, array) =>
        cy.get(catalogLocators.textAddedProductInPage).each((el)=> {
            console.log(array, el.text())
            expect(array).to.contain(el.text())

        })

    equalSomeArray = (selectedProducts, addedProducts) => equal(selectedProducts,addedProducts)? console.log("true"): console.log("false")






}