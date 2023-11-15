let currentInput = '';
let currentOperator = '';

function clearInput() {
    currentOperator = '';
    currentInput = '';
    document.getElementById('result').value = '';
}

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function add() {
    currentOperator = "+";
    currentInput += currentOperator;
    document.getElementById('result').value = currentInput;
}

function divide() {
    currentOperator = "/";
    currentInput += currentOperator;
    document.getElementById('result').value = currentInput;
}

function subtract() {
    currentOperator = "-";
    currentInput += currentOperator;
    document.getElementById('result').value = currentInput;
}

function multiply() {
    currentOperator = "*";
    currentInput += currentOperator;
    document.getElementById('result').value = currentInput;
}

function calculate() {
    const result = eval(currentInput);
    document.getElementById('result').value = result;
    currentInput.toString();
    currentOperator = '';
}
