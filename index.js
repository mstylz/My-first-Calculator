const mainText = document.getElementById("mainText");

let expression = "";
let justEvaluated = false;

// Clear screen
const clear1 = () => {
  expression = "";
  justEvaluated = false;
  mainText.value = "";
};

// Append number or dot
const onClickNumber = (char) => {
  if (justEvaluated) {
    expression = "";
    justEvaluated = false;
  }
  expression += char;
  mainText.value = expression;
};

// Generic operator handler
const addOperator = (operator) => {
  if (justEvaluated) {
    justEvaluated = false;
    expression = mainText.value; // Use result as starting point
  }

  const lastChar = expression.slice(-1);
  if ("+-*/.".includes(lastChar)) {
    // Prevent double operators (like 2++ or 2..)
    return;
  }

  expression += operator;
  mainText.value = expression;
};

const plus = () => addOperator("+");
const minus = () => addOperator("-");
const multiply = () => addOperator("*"); // ‘x’ visually, but JS uses '*'

// Calculate result
const equals = () => {
  try {
    const result = eval(expression); // Use only in trusted environments
    mainText.value = result;
    expression = result.toString(); // Allow further operations
    justEvaluated = true;
  } catch (e) {
    mainText.value = "Error";
    expression = "";
    justEvaluated = false;
  }
};
