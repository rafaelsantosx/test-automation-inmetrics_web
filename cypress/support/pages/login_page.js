/// <reference types="cypress"/>

export default{
     fillLoginFields(user, pass){
         cy.get('.login-form input[type="email"]').type(user);
         cy.get('.login-form input[type="password"]').type(pass);
     },
     clickLogin(){
         cy.get('[data-qa="login-button"]').click();
     },
    verifySuccessfulLogin() {
        cy.contains('Logged in as').should('be.visible');
        cy.get('a[href="/logout"]').should('be.visible');
        cy.get('a[href="/delete_account"]').should('be.visible');
    }
 }