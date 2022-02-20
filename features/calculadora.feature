Feature: Calculate two numbers
  
  Scenario: Failed calculation
    Given In open the calculator page
    When I enter the first value "33"
    And I enter the second value "27"
    And I click on the calculate button
    Then The correct sum on screen

