let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return; // Don't allow operator without a number
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = ''; // Clear the current input for the next number
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  if (previousInput === '' || currentInput === '') return; // Prevent calculation if either is empty

  // Use the eval function for basic operations
  try {
    const result = eval(previousInput + operator + currentInput);
    document.getElementById('display').value = result;
    previousInput = result; // Store result as previous input for next operation
    currentInput = ''; // Clear current input
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
