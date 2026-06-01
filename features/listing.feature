# features/listing.feature
@listing
Feature: Listing Detail Page
  As a traveler
  I want to view detailed information about a property
  So that I can make an informed booking decision

  Background:
    Given I am viewing a listing detail page

  @smoke
  Scenario: View listing title
    Then the listing title should be displayed

  @smoke
  Scenario: Reserve button is visible
    Then the Reserve button should be visible in the booking widget

  Scenario: View price per night
    Then the price per night should be displayed with a currency symbol

  Scenario: View photo gallery
    Then the photo gallery should be visible

  Scenario: View reviews section
    When I scroll to the reviews section
    Then the reviews section should be visible

  Scenario: View amenities
    When I scroll to the amenities section
    Then the amenities section should be visible

  Scenario: Select dates and see price breakdown
    When I select check-in date 10 days from now
    And I select check-out date 13 days from now
    Then the Reserve button should be enabled

  Scenario: Reserve without authentication prompts login
    When I select check-in date 10 days from now
    And I select check-out date 13 days from now
    And I click the Reserve button
    Then I should be prompted to log in
