Feature: Adicionar ao carrinho
    Feature Description
    Como um usuário da plataforma
    Quero quero adicionar um produto ao carrinho
    Para realizar uma compra
        
  Scenario: Adicionar um produto ao carrinho com sucesso
    Given the user is on the home page
    When they add a product to the cart
    Then a success message should be displayed

  Scenario: Validar produto adicionado ao carrinho
    Given the user is on the home page
    When they add a product to the cart
    Then a success message should be displayed
    And the product must be listed in the cart
