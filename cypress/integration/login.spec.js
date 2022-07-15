/// <reference types="cypress" />

describe('Login Saucedemo', () => {
    
    beforeEach(()=>{
        cy.visit('/');
    })

    it('Realizar login com sucesso', () => {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();
        cy.get('.title').should('have.text', 'Products')
    });


    it('Realizar login com username incorreto', () => {
        cy.get('input[id="user-name"]').type('user inválido');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 
        'Epic sadface: Username and password do not match any user in this service')
    });

    it('Realizar login com password incorreta', () => {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('senha_invalida');
        cy.get('input[id="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 
        'Epic sadface: Username and password do not match any user in this service')
    });
});