Feature: Login
    Feature Description
    Eu como usuário
    Quero fazer login na aplicação
    Para fazer uma compra

    Scenario: Login com sucesso
        Given the user is on the login page
        When they enter a valid username and password
        And they click the login button
        Then they should be successfully authenticated