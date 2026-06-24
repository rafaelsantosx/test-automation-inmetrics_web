Feature: Tela de pagamento
    Feature Description
    Como usuário
    Quero realizar login na aplicação e validar meus produtos no carrinho
    Para concluir uma compra com segurança

     Scenario: Validar produtos no carrinho na tela de pagamento
        Given the user is authenticated in the application
        And has products added to the cart
        When they access the checkout page
        Then the added products should be displayed correctly in the cart