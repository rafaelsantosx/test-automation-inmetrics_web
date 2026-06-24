import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import products_page from "../pages/products_page"

/// <reference types="cypress"/>

    Given ("the user is on the product listing page", () => {
        home_page.acessProducts()
    })

    When ("the user enters the name of an existing product in the search field", () => {
        products_page.fillSearchInput('jeans')
    })

    When ("clicks the search button", () => {
       products_page.clickSearch()
    })

    Then ("the system should display the products matching the search", () => {
        products_page.verifySuccessfulSearch()
    })