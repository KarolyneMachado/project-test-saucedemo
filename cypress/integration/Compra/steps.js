/// <reference types="cypress" />

Given(/^que acesso o site$/, () => {
    cy.visit('/');
    cy.get('input[id="user-name"]').type('standard_user');
    cy.get('input[id="password"]').type('secret_sauce');
    cy.get('input[id="login-button"]').click();
    cy.get('.title').should('have.text', 'Products')
});


Then(/^adicione o produto ao carrinho$/, () => {
	cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
    cy.get('.shopping_cart_link').click();
    cy.get('.title').should('have.text', 'Your Cart');
    cy.get('[data-test="checkout"]').click();
});

When(/^preencher os dados de endereço$/, () => {
    cy.get('.title').should('have.text', 'Checkout: Your Information');
    cy.get('[data-test="firstName"]').type('FirstName Teste');
    cy.get('[data-test="lastName"]').type('LastName Teste')
    cy.get('[data-test="postalCode"]').type(12345678);
    cy.get('[data-test="continue"]').click();
});

When(/^clicar em finish$/, () => {
	cy.get('.title').should('have.text', 'Checkout: Overview');
    cy.get('[data-test="finish"]').click();
});

Then(/^devo realizar a compra com sucesso$/, () => {
	cy.get('.title').should('have.text', 'Checkout: Complete!');
});
