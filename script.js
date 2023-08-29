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

// test

let a = 4;
let b =5;

// variables
let num1;
let num2;
let ope;



// test
console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));
