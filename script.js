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
    console.log(screenDisplay.textContent);
    screenDisplay.textContent = string;

}

// test

let a = 4;
let b = 5;

// variables
let num1 = '';
let num2 = '';
let ope;

// button listeners
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        



    })
})


// test
console.log(operate(a,b,'+'));
console.log(operate(a,b,'-'));
console.log(operate(a,b,'*'));
console.log(operate(a,b,'/'));
