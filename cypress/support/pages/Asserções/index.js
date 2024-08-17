class Assercoes {

    validationPageProducts() {
        cy.get('.title').should('have.text', 'Products')
    }

    validationMensagemErrorLogin() {
        cy.get('[data-test="error"]').should('have.text',
            'Epic sadface: Username and password do not match any user in this service')
    }

    validationPageYourCart() {
        cy.get('.title').should('have.text', 'Your Cart');
    }

    validationPageCheckout() {
        cy.get('.title').should('have.text', 'Checkout: Your Information');
    }

    validationPageOverview() {
        cy.get('.title').should('have.text', 'Checkout: Overview');
    }

    validationPageComplete() {
        cy.get('.title').should('have.text', 'Checkout: Complete!');
    }

}

export default new Assercoes();