Feature: Close cookies windows

  Scenario: Close cookies
    Given I'm at Zinio
    When I click on Accept cookies button
    Then the banner is not present
