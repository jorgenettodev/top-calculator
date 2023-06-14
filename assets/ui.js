// Import the math operations functions
import { add, subtract, multiply, divide } from './mathOperations.js';
import { operate } from './script.js';

let firstNumber = null;
let secondNumber = null;
let operator = null;


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

const btnDecimal = document.querySelector('#btnDecimal');
btnDecimal.addEventListener('click', addDecimal);
function addDecimal(e) {


    // Check if the display already have a decimal point.
    if (!display.innerText.includes('.')) {
        // Appends the decimal point to the display.
        display.innerText += '.';
    }
}

// ## Math Ops Functionalities 


// Add
btnAdd.addEventListener('click', handleFullOperation);
// Subtract
btnSubtract.addEventListener('click', handleFullOperation);

// Multiply
btnMultiply.addEventListener('click', handleFullOperation);

// Divide
btnDivide.addEventListener('click', handleFullOperation);

btnEquals.addEventListener('click', (e) => {
    
    
    if (secondNumber == null) {
        secondNumber = parseFloat(display.innerText);
    } else if (secondNumber == 0) {
        secondNumber = parseFloat(display.innerText);
    }
    
    // Handles division by zero:
    if (secondNumber == 0 && operator == divide) {
        return alert('you cant divide by zero.');

    };


    console.log(`the first number is ${firstNumber}.`)
    console.log(`the second number is: ${secondNumber}.`);
    console.log(`the full operation is: = ${firstNumber} ${operator} ${secondNumber}`)
    let result = operate(operator, firstNumber, secondNumber);
    console.log(`the result is: ${result}`);

    display.innerText = formatResult(result);

    // Checks if the result is not null (the initial value.) If its not, then use it as the firstNumber for consecutive operations.
    if (result != null) {
        firstNumber = result;
        secondNumber = 0;
        return firstNumber;
    }

    // after finishing the operation, the operator returns to null;
    operator = null;

} );


// Event Listeners

// Event listener for '0-9 number' buttons;
buttons.addEventListener('click', regularNumbers);

// Event listener for the 'clear button';
btnClear.addEventListener('click', clear);

// Event listener for the 'backspace button';
btnBackspace.addEventListener('click', backspace);

// Handlers and verifications

function handleFirstNumber() {
        firstNumber = parseFloat(display.innerText);
        display.innerText = 0;
    } 
    


function handleSecondNumber() {

    

    if (secondNumber == 0) {
        display.innerText = 0;
    };

    

}

function handleOperator(e) {


    let currentOperator = e.target.dataset.id;
    
    switch(currentOperator) {
        case 'add':
            operator = add;
            break;
        case 'subtract':
            operator = subtract;
            break;
        case 'multiply':
            operator = multiply;
            break;
        case 'divide':
            operator = divide;
            break;
    }
}

function handleFullOperation(e) {
    handleFirstNumber();
    handleSecondNumber();
    handleOperator(e);
}

function formatResult(result) {
    // Checks if the rest of the division of the result divided by 1 is not zero.
    if (result % 1 !== 0) {
        // if yes, then use only 2 decimal points.
        return parseFloat(result.toFixed(2));
    }

    // If not, thant do nothing.
    return result;
}

// Keyboard events

// Seleciona todos os botões existentes
const allButtons = document.querySelectorAll('.button');

// Adiciona o evento keydown ao documento
document.addEventListener('keydown', handleDigitInput);

// Função para lidar com o evento digitInput
function handleDigitInput(event) {
  const key = event.key;

  console.log(event.key)
  // Percorre todos os botões e verifica se a keydown corresponde ao dataset.id do botão
  allButtons.forEach(button => {
    if (button.dataset.id === key) {
      button.click();
    }

    // if (key === '+' && button.dataset.key == '+') {
    //     button.click();
    // }

    if (button.dataset.key === key) {
        button.click();
    }

  });
}
