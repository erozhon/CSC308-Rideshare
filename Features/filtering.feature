Feature: Filtering

  Scenario: Filtering rides below $10
    Given I am a Rider looking to travel to UCLA at a max cost
    When I enter a max ride price
    Then the system will show me the rides under that price