/// <reference types="cypress" />

describe('Login Saucedemo', () => {
    
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    })

    it('Realizar login com sucesso', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('have.text', 'Products')
    });


    it('Realizar login com username incorreto', () => {
        cy.get('[data-test="username"]').type('user inválido');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 
        'Epic sadface: Username and password do not match any user in this service')
    });

    it('Realizar login com password incorreta', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('senha_invalida');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 
        'Epic sadface: Username and password do not match any user in this service')
    });
});