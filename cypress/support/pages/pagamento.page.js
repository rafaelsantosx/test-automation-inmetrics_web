/// <reference types="cypress"/>

export default{
    validateCheckoutProducts(){
    cy.get('#cart_info').should('contain', 'Soft Stretch Jeans').and('contain', 'Stylish Dress')
    }
}
