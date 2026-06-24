import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import cart_page from "../pages/cart_page"
/// <reference types="cypress"/>

let productName;

Given("the user is on the home page", () => {
    home_page.acessHomePage()
})

When("they add a product to the cart", () => {
    home_page.getFirstProductName().then((name) => {
        productName = name.trim();
        cy.log('Produto capturado: ' + productName);
        home_page.addProductToCart(); 
    });
});

Then("a success message should be displayed", () => {
    cart_page.validateAddToCartSuccessMessage()
})

Then("the product must be listed in the cart", () => {
    home_page.viewCart()
    cart_page.validateProductInCart(productName) 
})