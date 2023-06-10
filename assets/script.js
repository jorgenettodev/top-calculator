// ########### ASSIGNMENTS 

// Import the js files
import { add, subtract, multiply, divide } from './mathOperations.js';
import './ui.js';

// ### 1. Create a function for each of the four basic math operations;

// ### 2. Create three variables, one for each part of a simple calculation. 

let firstNumber;
let secondNumber;
let operator;

// // ### 3. Create a function 'operate' that takes one operator and two numbers and calls one of the functions created earlier.

// how this function works: you write one of the operations (add,subtract..etc) and two numbers. The function will use it as a callback function, passing the arguments you used.
function operate(operator, numberA, numberB) {
    return operator(numberA, numberB);
};


