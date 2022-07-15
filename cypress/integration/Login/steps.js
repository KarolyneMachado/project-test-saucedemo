/// <reference types="cypress" />
import Login from '../../support/pages/Login'
import validation from '../../support/pages/Asserções'

Given(/^que acesso o site$/, () => {
	Login.acessoPageLogin();
});

When(/^informar meus dados$/, () => {
    Login.preencherUserPasswordCorrect();
});

When(/^clique login$/, () => {
    Login.clickLogin();
});

Then(/^devo realizar login com sucesso$/, () => {
    validation.validationPageProducts();
});


When(/^informar meu username incorreto$/, () => {
   Login.preencherUsernameIncorreto();
});

Then(/^devo receber mensagem de dados inválidos$/, () => {
	validation.validationMensagemErrorLogin();
});


When(/^informar minha senha incorreta$/, () => {
    Login.preencherPasswordIncorreto();
});
