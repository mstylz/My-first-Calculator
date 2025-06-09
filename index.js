const mainText = document.getElementById("mainText");

let expression = "";           // Stores full input like "2+6"
let justEvaluated = false;     // Tracks if = was just pressed

// Clear all
const clear1 = () => {
  expression = "";
  mainText.value = "";
  justEvaluated = false;
};

// Handle numbers and dots
const onClickNumber = (char) => {
  if (justEvaluated) {
    // If = was just pressed, and user types a number, start over
    expression = "";
    justEvaluated = false;
  }
  expression += char;
  mainText.value = expression;
};

// Handle + - * operators
const plus = () => addOperator("+");
const minus = () => addOperator("-");
const multiply = () => addOperator("*");

const addOperator = (operator) => {
  if (justEvaluated) {
    justEvaluated = false;
    // If = was just pressed, continue with result
    expression = mainText.value;
  }

  const lastChar = expression[expression.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    // Replace last operator if needed
    expression = expression.slice(0, -1) + operator;
  } else {
    expression += operator;
  }

  mainText.value = expression;
};

// Calculate result
const equals = () => {
  try {
    const result = eval(expression);
    mainText.value = result;
    expression = result.toString(); // continue chaining
    justEvaluated = true;
  } catch {
    mainText.value = "Error";
    expression = "";
    justEvaluated = false;
  }
};
