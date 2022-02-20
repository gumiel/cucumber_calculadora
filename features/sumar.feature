Feature: Calcular la suma de dos numeros

  Scenario: Suma exitosa de dos numeros
    Given En la pagina de suma
    When Ingresamos el primer valor para sumar "1"
    And Ingresamos el segundo valor para sumar "2"
    And Realizamos click en el boton sumar
    Then Muestra el valor sumado
  
