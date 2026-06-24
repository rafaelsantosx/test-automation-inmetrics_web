import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

/// <reference types="cypress"/>

    Given ("the user is on the login page", () => {
        home_page.acessLogin()
    })

    When ("they enter a valid username and password", () => {
        login_page.fillLoginFields('teste2021@teste.com.br', 'teste')
    })

    When ("they click the login button", () => {
        login_page.clickLogin()
    })

    Then ("they should be successfully authenticated", () => {
        login_page.verifySuccessfulLogin()
    })