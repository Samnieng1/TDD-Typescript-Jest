# Car Value Prediction API

This project implements a TypeScript function called 'predictValue' that predict a car value based on the positions of alphabets in a model name, multiplied by 100, and added to a given year value.
The function returns either a number respresenting the predicted car value or a string indicating 'Invalid input'.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Function Details](#function-details)
- [Running Tests(#running-tests)
- [Summar](#summary)

## Installation
1. Clone the repository

   git clone https://github.com/Samnieng1/TDD-Typescript-Jest.git
   cd tdd-typescript-jest
   
2. Install dependencies

   npm install
## Usage

To use the 'predictValue' function, import it into your TypeScript file as follows:

  import { predictValue } from '../src/carValuePrediction';

  // Example usage
  const result = predictValue('CIVIC', 2014);
  console.log(result); // Output: 6614

Then right click on your TypeScript file, and click 'run code'. You will see 6614 as the output.

## Function Details
**predictValue
The'predictValue' functiontakes two parameters:
  - 'model': 'string - The model name to be evaluated
  - 'year': 'number' - The year value to be added to the calculated car value.
**Returns
  - 'number | string' - Returns a number representing the calculated car value or a string "Invalid input" for invalid inputs
**Example

  import { predictValue } from '../src/carValuePrediction';

  // Example usage
  const result = predictValue('CIVIC', 2012);
  console.log(result); // Output: 6614
  console.log(predictValue('CIVIC', 2014)); // Output: 6614
  console.log(predictValue('Model X', 2024)); // Output: 9324
  console.log(predictValue('123', 2024)); // Output: 'Invalid input'
  console.log(predictValue('', 2024)); // Output: 'Invalid input'
  console.log(predictValue('Civic', '2024' as any)); // Output: 'Invalid input'
  console.log(predictValue(123 as any, 2024)); // Output: 'Invalid input'

## Running Tests
This project uses Jest for testing. To run the tests, use the following ocmmand:
npm test
## Summary

This README file includes instructions for installation, usage of the 'predictValue' function, and testing with Jest.
Please ensure you update paths ('./src/carValuePrediction') and specific detailsto match your project structure and requirements.
