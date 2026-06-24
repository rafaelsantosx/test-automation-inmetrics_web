/// <reference types="cypress"/>

export default{
    acessHomePage(){
        cy.visit('/')
    },

    acessLogin(){
        cy.visit('/')
        cy.get('a[href="/login"]').click();
    },

    acessProducts(){
        cy.visit('/')
        cy.get('a[href="/products"]').click();
    }, 

    getFirstProductName() {
        return cy.get('.productinfo p')
            .first()
            .invoke('text');
    },
    
    addProductToCart() {
         cy.get('.product-image-wrapper')
             .first()
             .trigger('mouseover');

        cy.contains('Add to cart')
            .first()
            .click({ force: true });
    },

    viewCart() {
        cy.get('.modal-content')
          .contains('View Cart')
          .click();
    }
}
