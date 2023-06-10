// Import the math operations functions
import { add, subtract, multiply, divide } from './mathOperations.js';

// gets the display div.
let display = document.querySelector('#displayValue');

// gets the div 'buttons' <- all buttons grid.
const buttons = document.querySelector('.buttons');

// backspace button
const btnBackspace = document.querySelector('#btnBackspace');

// clear button
const btnClear = document.querySelector('#btnClear');

// ### 5. Functions that populate the display when the numbers are clicked.

// ## 0-9 numbers click functionality
// # <

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
// # </

// ## AC button functionality 
// # <


// When the 'AC' button is clicked, the display value becomes zero '0';
function clear(e) {
    if (e.target.dataset.id == 'clear') {
        display.innerText = 0;
    }
};
// # />

// ## Backspace functionality 
// # <

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
// # />



// Functionalities

// Event listener for '0-9 number' buttons;
buttons.addEventListener('click', regularNumbers);

// Event listener for the 'clear button';
btnClear.addEventListener('click', clear);

// Event listener for the 'backspace button';
btnBackspace.addEventListener('click', backspace);