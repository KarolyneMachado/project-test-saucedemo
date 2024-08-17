import Login from '../../support/pages/Login'
import Validation from '../../support/pages/Asserções'
import Compras from '../../support/pages/Compras'

Given('que acesso o site', () => {
    Login.acessoPageLogin();
    Login.preencherUserPasswordCorrect();
    Login.clickLogin();
    Validation.validationPageProducts();
});


Then('adicione o produto ao carrinho', () => {
    Compras.addToCart();
    Compras.clickCart();
    Validation.validationPageYourCart();
    Compras.clickCheckout();
});

When('preencher os dados de endereço', () => {
    Compras.preencherAddressDelivery();
    
});

When('clicar em finish', () => {
	Validation.validationPageOverview();
    Compras.clickFinish();
});

Then('devo realizar a compra com sucesso', () => {
	Validation.validationPageComplete();
});