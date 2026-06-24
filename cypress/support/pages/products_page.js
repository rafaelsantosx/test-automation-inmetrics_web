/// <reference types="cypress"/>

export default{
     fillSearchInput(product){
         cy.get('#search_product').type(product);
     },
     clickSearch(){
         cy.get('#submit_search').click();
     },
     verifySuccessfulSearch(){
        cy.get(".features_items").should("be.visible")
     },
     continueShopping(){
        cy.get('.modal-footer').contains('Continue Shopping').click();
     },
     clearSearch(){
        cy.get('#search_product').clear();
     }
 }