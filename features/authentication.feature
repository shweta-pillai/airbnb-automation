# features/authentication.feature
@authentication
Feature: User Authentication
  As a user
  I want to log in to my Airbnb account
  So that I can access my bookings and wishlist

  @smoke
  Scenario: Open login modal from homepage
    Given I am on the Airbnb homepage
    When I click the "Log in" button
    Then the login modal should be displayed

  Scenario: Attempt login with invalid email
    Given I am on the Airbnb homepage
    And the login modal is open
    When I enter "invalid@nowhere.com" as my email
    And I click the Continue button
    Then I should see an error or be prompted for a password

  Scenario: Validate email format
    Given I am on the Airbnb homepage
    And the login modal is open
    When I enter "not-a-valid-email" as my email
    And I click the Continue button
    Then I should see a validation error for the email field

  Scenario: Social login options are visible
    Given I am on the Airbnb homepage
    And the login modal is open
    Then I should see social login options

  Scenario: Protected pages redirect unauthenticated users
    Given I am not logged in
    When I navigate to "/wishlists"
    Then I should be prompted to log in
