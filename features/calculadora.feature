Feature: Calculate two numbers

  Scenario: Calculo exitoso
    Given In open the calculator page
    When I enter the first value "1"
    And I enter the second value "2"
    And I click on the calculate button
    Then The correct sum on screen


