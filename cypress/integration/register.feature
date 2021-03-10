Feature: A user registers into the application

  @run
  Scenario: A new user registers in the application successfully
    Given I'm at Zinio
    When I click on register button
    And I type 'random' email
    And I type 'zinio123' password
    And I type 'zinio123' password confirmation
    And I click on confirm button
    Then I see myself registered
    
