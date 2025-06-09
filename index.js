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

  expression += operator;
  mainText.value = expression;
};

const plus = () => addOperator("+");
const minus = () => addOperator("-");
const multiply = () => addOperator("*");

// Evaluate and display result
const equals = () => {
  try {
    const result = eval(expression);
    mainText.value = result;
    expression = result.toString();
    resultShown = true;
  } catch (e) {
    mainText.value = "Error";
    expression = "";
    resultShown = false;
  }
};
