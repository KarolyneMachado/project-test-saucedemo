Feature: Compra 

Como usuário, desejo acessar site 
Para que possa realizar comprar de um produto

Scenario: Compra de um produto
    Given que acesso o site
    And adicione o produto ao carrinho
    When preencher os dados de endereço
    And clicar em finish
    Then devo realizar a compra com sucesso


