/// <reference types="cypress"/>
    
export default{
    validateAddToCartSuccessMessage(){
        cy.contains('Added!').should('be.visible');
    },

    validateProductInCart(productName) {
        cy.get('.cart_description a')
            .should('contain.text', productName);
    },

    proceeedToCheckout(){
        cy.get('.check_out').click();
    }

}