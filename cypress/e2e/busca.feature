Feature: Buscar por produtos
    Feature Description
    Como um usuário da plataforma
    Quero realizar uma busca por produtos
    Para filtrar os itens de meu interesse
        
    Scenario: Busca de produto efetuada
        Given the user is on the product listing page
        When the user enters the name of an existing product in the search field
        And clicks the search button
        Then the system should display the products matching the search