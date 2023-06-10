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


// ### 5. Functions that populate the display when the numbers are clicked.

let display = document.querySelector('#displayValue');
let displayValue = display.innerText;

let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
   

    if (e.target.dataset.type != 'number') {
        return;
    };

    if (e.target.dataset.id == 'backspace') {
        return;
    };

    if(e.target.classList[1] == 'operator') {
        return;
    };


   if (display.innerText == 0) {
       display.innerText = e.target.textContent;
   } else {
    display.innerText += e.target.textContent; 
   };

    
});

buttons.addEventListener('click', clear);

// When the 'AC' button is clicked, the display value becomes zero '0';
function clear(e) {
    if (e.target.dataset.id == 'clear') {
        display.innerText = 0;
    }
};



function backspace() {
    // let displayString = display.innerText;
    // displayString = displayString.substring(0, displayString.length - 1);
    // display.innerText = displayString;

    // selecione a string (neste caso, o valor do display)
    let str = display.innerText;
    // Usando o método string.slice, remova o último caractere usando length -1
    str = str.slice(0, str.length -1);
    // atualiza o display para que ele seja o novo número.
    display.innerText = str;
};

const btnBackspace = document.querySelector('#btnBackspace');
btnBackspace.addEventListener('click', backspace);