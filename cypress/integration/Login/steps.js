/// <reference types="cypress" />

Given(/^que acesso o site$/, () => {
	cy.visit('/');
});

When(/^informar meus dados$/, () => {
    cy.get('input[id="user-name"]').type('standard_user');
    cy.get('input[id="password"]').type('secret_sauce');
});

When(/^clique login$/, () => {
    cy.get('input[id="login-button"]').click();
});

Then(/^devo realizar login com sucesso$/, () => {
    cy.get('.title').should('have.text', 'Products')
});


When(/^informar meu username incorreto$/, () => {
    cy.get('input[id="user-name"]').type('standard_user');
    cy.get('input[id="password"]').type('senha_invalida');
});

Then(/^devo receber mensagem de dados inválidos$/, () => {
	cy.get('[data-test="error"]').should('have.text', 
        'Epic sadface: Username and password do not match any user in this service')
});


When(/^informar minha senha incorreta$/, () => {
    cy.get('input[id="user-name"]').type('standard_user');
    cy.get('input[id="password"]').type('senha_invalida');
});
