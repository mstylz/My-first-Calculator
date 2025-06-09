const mainText = document.getElementById("mainText");

let expression = "";
let resultShown = false;

// Clears everything
const clear1 = () => {
  expression = "";
  resultShown = false;
  mainText.value = "";
};

// Appends number or dot
const onClickNumber = (char) => {
  if (resultShown) {
    // If result was just shown and next input is a number, start new expression
    expression = "";
    resultShown = false;
  }
  expression += char;
  mainText.value = expression;
};

// Add operators: +, -, *
const addOperator = (operator) => {
  if (resultShown) {
    resultShown = false;
    // Continue from result
    expression = mainText.value;
  }

  const lastChar = expression.slice(-1);
  if ("+-*/".includes(lastChar)) {
    // Replace the operator if last char is one
    expression = expression.slice(0, -1);
  }
