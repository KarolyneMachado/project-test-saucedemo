beforeEach(() => {
    cy.window().then((win) => {
        win.caches.keys().then((cacheNames) => {
            cacheNames.forEach((cacheName) => {
                win.caches.delete(cacheName);
            });
        });
    });
});
class Login {

    acessoPageLogin() {
        cy.visit('/');
    }

    preencherUserPasswordCorrect() {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
    }

    clickLogin() {
        cy.get('input[id="login-button"]').click();
    }

    preencherUsernameIncorreto() {
        cy.get('input[id="user-name"]').type('user_invalido');
        cy.get('input[id="password"]').type('secret_sauce');
    }

    preencherPasswordIncorreto() {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('senha_invalida');
    }
}

export default new Login();