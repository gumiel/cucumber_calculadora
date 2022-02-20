Feature: Calcular la multiplicacion de dos numeros

  Scenario: Multiplicacion exitosa de dos numeros
    Given En la pagina de multiplicacion
    When Ingresamos el primer valor para multiplicar "1"
    And Ingresamos el segundo valor para multiplicar "2"
    And Realizamos click en el boton multiplicar
    Then Muestra el valor multiplicado
  
