import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import products_page from "../pages/products_page"
import cart_page from "../pages/cart_page"
import pagamentoPage from "../pages/pagamento.page"

/// <reference types="cypress"/>

    Given ("the user is authenticated in the application", () => {
        home_page.acessLogin()
        login_page.fillLoginFields('teste2021@teste.com.br', 'teste')
        login_page.clickLogin() 
        login_page.verifySuccessfulLogin()
    })

    Given ("has products added to the cart", () => {
        home_page.acessProducts()
        products_page.fillSearchInput('Soft Stretch Jeans')
        products_page.clickSearch()
        home_page.addProductToCart()
        products_page.continueShopping()
        products_page.clearSearch()
        products_page.fillSearchInput('Stylish Dress')
        products_page.clickSearch()
        home_page.addProductToCart()
        home_page.viewCart()
    })

    When ("they access the checkout page", () => {
        cart_page.proceeedToCheckout()
    })

    When ("the added products should be displayed correctly in the cart", () => {
        pagamentoPage.validateCheckoutProducts()
    })