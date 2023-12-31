// functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, ope) {
    if (ope == '+') {
        return add(num1,num2);
    } else if (ope == '-') {
        return subtract(num1,num2);
    } else if (ope == '*') {
        return multiply(num1,num2);
    } else if (ope == '/') {
        return divide(num1,num2);
    } else {
        return 'ERROR';
    }
}

function updateDisplay(string) {
    screenDisplay = document.querySelector('.display');
    screenDisplay.textContent = string;
}

// test

let a = 4;
let b = 5;

// variables
let num1 = '';
let num2 = '';
let ope = '';
let displayValue= '0';

// button listeners
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {


       if (button.textContent == '/' || button.textContent == '*' || button.textContent == '-' || button.textContent == '+') {
            if (num1 == '') {
            } else if(num1 != '' && num2 != '') {
                displayValue = operate(Number.parseInt(num1), Number.parseInt(num2), ope);
                updateDisplay(displayValue);

                ope = button.textContent;
                num1 = displayValue;
                num2 = '';
            }else {
                ope = button.textContent;
            }
       }else if (button.textContent >=0 && button.textContent < 10) {
            if (ope == '') {
                num1 += button.textContent;
                displayValue = num1;
       updateDisplay(displayValue);
        } else {
            num2 += button.textContent;
            displayValue = num2;
            updateDisplay(displayValue);
        }
       }else if (button.textContent == '=') {
            displayValue = operate(Number.parseFloat(num1), Number.parseFloat(num2), ope);

            if (displayValue == Infinity) {
                displayValue = '🗿🗿🗿';
                alert(`🗿🗿🗿`);
            }

            updateDisplay(displayValue);

            num1 = displayValue;
            num2 = '';

       } else if (button.textContent == 'Clear') {
            num1 = '';
            num2 = '';
            ope = '';
            displayValue= '0';
            updateDisplay(displayValue);

       }
       

    })
})
