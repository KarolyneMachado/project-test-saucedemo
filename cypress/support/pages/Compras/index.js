class Compras {

    addToCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); 
    }

    clickCart(){
        cy.get('.shopping_cart_link').click();
    }

    clickCheckout(){
        cy.get('[data-test="checkout"]').click();
    }

    preencherAddressDelivery(){
        cy.get('[data-test="firstName"]').type('FirstName Teste');
        cy.get('[data-test="lastName"]').type('LastName Teste')
        cy.get('[data-test="postalCode"]').type(12345678);
        cy.get('[data-test="continue"]').click();
    }

    clickFinish(){
        cy.get('[data-test="finish"]').click();
    }



}

export default new Compras();