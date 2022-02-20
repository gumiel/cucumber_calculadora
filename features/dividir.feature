Feature: Calcular la division de dos numeros

  Scenario: Division exitosa de dos numeros
    Given En la pagina de division
    When Ingresamos el primer valor para dividir "1"
    And Ingresamos el segundo valor para dividir "2"
    And Realizamos click en el boton dividir
    Then Muestra el valor dividido
  
