# features/search.feature
# BDD (Behavior-Driven Development) using Gherkin syntax.
#
# WHY BDD/GHERKIN?
# Gherkin lets non-technical stakeholders (product managers, QA leads,
# business analysts) READ and WRITE test scenarios.
# The Given/When/Then structure maps directly to:
#   Given = precondition / setup
#   When  = the action being tested
#   Then  = the expected outcome
#
# These feature files become living documentation of your application.

@search @smoke
Feature: Property Search
  As a traveler
  I want to search for available properties
  So that I can find a place to stay for my trip

  Background:
    Given I am on the Airbnb homepage

  @smoke
  Scenario: Search for properties in a popular destination
    When I enter "New York" as the destination
    And I select check-in date 7 days from now
    And I select check-out date 10 days from now
    And I set 2 adults as guests
    And I click the search button
    Then I should see search results
    And the results page URL should contain "New-York"
    And at least 5 listings should be displayed

  @smoke
  Scenario: Search with family configuration
    When I enter "Miami" as the destination
    And I select check-in date 14 days from now
    And I select check-out date 21 days from now
    And I set 2 adults as guests
    And I set 2 children as guests
    And I click the search button
    Then I should see search results
    And the results page should show listings for families

  Scenario Outline: Search for different destination types
    When I enter "<destination>" as the destination
    And I select check-in date 7 days from now
    And I select check-out date 10 days from now
    And I set 2 adults as guests
    And I click the search button
    Then I should see search results

    Examples:
      | destination     |
      | New York        |
      | Los Angeles     |
      | Chicago         |
      | Miami           |

  Scenario: Apply filters to search results
    When I enter "New York" as the destination
    And I select check-in date 7 days from now
    And I select check-out date 10 days from now
    And I set 2 adults as guests
    And I click the search button
    And I open the filters panel
    Then the filters panel should be visible

  Scenario: Toggle map view in search results
    When I enter "New York" as the destination
    And I select check-in date 7 days from now
    And I select check-out date 10 days from now
    And I set 2 adults as guests
    And I click the search button
    Then I should see search results
    When I click the show map button
    Then the map view should be activated
