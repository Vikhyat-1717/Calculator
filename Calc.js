let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  if (previousInput === '' || currentInput === '') return;
  const result = eval(previousInput + operator + currentInput);
  document.getElementById('display').value = result;
  previousInput = result;
  currentInput = '';
}
