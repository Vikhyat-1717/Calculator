let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  currentInput += num.toString();
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (e) {
    display.value = 'Error';
    currentInput = '';
  }
}
