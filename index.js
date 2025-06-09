const mainText = document.getElementById("mainText");

let expression = ""; // stores the full typed input
let justEvaluated = false;

// Clears the screen and memory
const clear1 = () => {
  expression = "";
  mainText.value = "";
  justEvaluated = false;
};

// Handles number and dot input
const onClickNumber = (char) => {
  if (justEvaluated) {
    // If user just hit equals, start a new expression
    expression = "";
    justEvaluated = false;
  }
  expression += char;
  mainText.value = expression;
};

// Handles addition
const plus = () => {
  addOperator("+");
};

// Handles subtraction
const minus = () => {
  addOperator("-");
};

// Handles multiplication
const multiply = () => {
  addOperator("*"); // use * for JS, even though button shows 'x'
};

// Adds operator to expression
const addOperator = (operator) => {
  if (justEvaluated) {
    justEvaluated = false;
  }

  const lastChar = expression[expression.length - 1];
  if (["+","-","*","/"].includes(lastChar)) {
    // Prevent double operators (like 2++3)
    return;
  }

  expression += operator;
  mainText.value = expression;
};

// Evaluates the current expression
const equals = () => {
  try {
    const result = eval(expression);
    mainText.value = result;
    expression = result.toString(); // Allow chaining calculations
    justEvaluated = true;
  } catch {
    mainText.value = "Error";
    expression = "";
  }
};
