/// <reference types="cypress" />

describe('Compra de Produto Saucedemo', ()=>{


beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/');
})

    it('Realizar um compra de um produto', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('have.text', 'Products')
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
        cy.get('.shopping_cart_link').click();
    
        cy.get('.title').should('have.text', 'Your Cart');
        cy.get('[data-test="checkout"]').click();
    
        cy.get('.title').should('have.text', 'Checkout: Your Information');
        cy.get('[data-test="firstName"]').type('FirstName Teste');
        cy.get('[data-test="lastName"]').type('LastName Teste')
        cy.get('[data-test="postalCode"]').type(12345678);
        cy.get('[data-test="continue"]').click();
    
        cy.get('.title').should('have.text', 'Checkout: Overview');
        cy.get('[data-test="finish"]').click();
        
        cy.get('.title').should('have.text', 'Checkout: Complete!');


});

});