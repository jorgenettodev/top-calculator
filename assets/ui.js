// Import the math operations functions
import { add, subtract, multiply, divide } from './mathOperations.js';
import { operate } from './script.js';
// gets the display div.
let display = document.querySelector('#displayValue');

// gets the div 'buttons' <- all buttons grid.
const buttons = document.querySelector('.buttons');

// backspace button
const btnBackspace = document.querySelector('#btnBackspace');

// clear button
const btnClear = document.querySelector('#btnClear');

// get the math ops buttons
const btnAdd = document.querySelector('#btnAdd');
const btnSubtract = document.querySelector('#btnSubtract');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');

// ## 0-9 numbers click functionality


function regularNumbers(e) {
    // verifications:
    // It will only work if you click a number.
    if (e.target.dataset.type != 'number') {
        return;
    };
    
    // if the display value is currently zero, than update to the number clicked;
    if (display.innerText == 0) {
        display.innerText = e.target.textContent;
    } else { // if not zero, than concatenate with the next clicked number.
        display.innerText += e.target.textContent; 
    };
}


// ## AC button functionality 



// When the 'AC' button is clicked, the display value becomes zero '0';
function clear(e) {
    if (e.target.dataset.id == 'clear') {
        display.innerText = 0;
    }
    firstNumber = null;
    secondNumber = null;
    display.innerText = 0;
    operator = null;
    console.clear();
};


// ## Backspace functionality 


function backspace() {

    // selecione a string (neste caso, o valor do display)
    let str = display.innerText;
    // Usando o método string.slice, remova o último caractere usando length -1
    str = str.slice(0, str.length -1);
    // atualiza o display para que ele seja o novo número.
    display.innerText = str;
};

// ## Math Ops Functionalities 

let firstNumber = null;
let secondNumber = null;
let operator = null;
// Add

btnAdd.addEventListener('click', (e) => {
    if (firstNumber == null) {
        firstNumber = parseFloat(display.innerText);
        display.innerText = 0;
    }
    operator = add;
    // console.log(display.innerText);

    if (secondNumber == 0) {
        display.innerText = 0;
    }

});

// Subtract
btnSubtract.addEventListener('click', (e) => {
    if (firstNumber == null) {
        firstNumber = parseFloat(display.innerText);
        display.innerText = 0;
    }
    console.log('subtract');

    if (secondNumber == 0) {
        display.innerText = 0;
    }
    return operator = subtract;

});

// Multiply
btnMultiply.addEventListener('click', (e) => {
    if (firstNumber == null) {
        firstNumber = parseFloat(display.innerText);
        display.innerText = 0;
    }
    console.log('multiply');
    if (secondNumber == 0) {
        display.innerText = 0;
    }
    return operator = multiply;
});

// Divide
btnDivide.addEventListener('click', (e) => {
    if (firstNumber == null) {
        firstNumber = parseFloat(display.innerText);
        display.innerText = 0;
    }
    console.log('divide');

    if (secondNumber == 0) {
        display.innerText = 0;
    }
    return operator = divide;
});

btnEquals.addEventListener('click', (e) => {
    // Handles division by zero:
    
    
    if (secondNumber == null) {
        secondNumber = parseFloat(display.innerText);
    } else if (secondNumber == 0) {
        secondNumber = parseFloat(display.innerText);
    }

    if (secondNumber == 0 && operator == divide) {
        return alert('you cant divide by zero.');

    };


    console.log(`the first number is ${firstNumber}.`)
    console.log(`the second number is: ${secondNumber}.`);
    console.log(`the full operation is: = ${firstNumber} (+,-,*,/) ${secondNumber}`)
    let result = operate(operator, firstNumber, secondNumber);
    console.log(`the result is: ${result}`);
    display.innerText = result;

    if (result != null) {
        firstNumber = result;
        secondNumber = 0;
        return firstNumber;
    }


} );


// Event Listeners

// Event listener for '0-9 number' buttons;
buttons.addEventListener('click', regularNumbers);

// Event listener for the 'clear button';
btnClear.addEventListener('click', clear);

// Event listener for the 'backspace button';
btnBackspace.addEventListener('click', backspace);