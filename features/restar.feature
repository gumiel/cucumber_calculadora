Feature: Calcular la resta de dos numeros

  Scenario: Resta exitosa de dos numeros
    Given En la pagina de resta
    When Ingresamos el primer valor para restar "2"
    And Ingresamos el segundo valor para restar "1"
    And Realizamos click en el boton restar
    Then Muestra el valor restados
  
