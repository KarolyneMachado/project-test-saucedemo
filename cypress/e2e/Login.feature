Feature: Login

Como usuário, desejo realizar Login
Para que possa acessar o sistema

Scenario: Realizar login com sucesso
    Given que acesso o site
    When informar meus dados 
    And clique login 
    Then devo realizar login com sucesso

Scenario: Realizar login com username incorreto 
    Given que acesso o site
    When informar meu username incorreto
    And clique login
    Then devo receber mensagem de dados inválidos

Scenario: Realizar login com password incorreta
    Given que acesso o site
    When informar minha senha incorreta
    And clique login
    Then devo receber mensagem de dados inválidos