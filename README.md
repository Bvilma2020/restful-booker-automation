# restful-booker-automation

This project automates API testing for the Restful Booker service using Cypress, Cucumber (BDD) and Page Object Model (POM). 
It covers the full booking lifecycle: Create, Get, Update and Delete a booking

## Tech Stack

- Cypress - API automation
- Cucumber Preprocessor - BDD with Gherkin
- JavaScript
- Page Object Model
- Node.js

## Project Structure

cypress/ 
   e2e/ 
     features/ 
        booking.feature 
   pages/ 
     bookingPage.js 
   support/ 
     step_definitions
        bookingSteps.js

- `features/` - contains Gherkin scenarios describing the behavior
- `pages/` - contains reusable API request methods
- `step_definitions/` - contains the implementation of each gherkin step

## Test Scenarios

- Create a booking
- Get a booking by ID
- Update a booking(Checkout date and additional needs)
- Delete a booking
- Token generated for authenticated requests 
- Each scenario validates both status codes and response body fields

## Installation

git clone https://github.com/Bvilma2020/restful-booker-automation "
cd restful-booker-automation 
npm install

## Running the test

Run all tests in a headless mode: npx cypress run
Open cypress test runner: npx cypress open

## Configuration

The base URL for the API is set in "cypress.config.js": https://restful-booker.herokuapp.com 
The Authentication token is generated once before tests using the /auth endpoint

## notes

bookingId is stored and reused across scenarios
Assertions validate both status and response bodies
POM ensures clean, maintainable API request methods
Cucumber provides readable, behavior-driven test scenarios