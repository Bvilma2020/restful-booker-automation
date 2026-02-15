
Feature: Booking API validation

Scenario: Create a booking
   Given I create a new booking
   Then the booking should be created successfully

Scenario: Get the booking
   Given I get the booking by id
   Then the booking details should match

Scenario: Update the booking
   Given I update the booking checkout date and additional needs
   Then the booking should be updated successfully

Scenario: Delete the booking
   Given I delete the booking
   Then the booking should not exist anymore

