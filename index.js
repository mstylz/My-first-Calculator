const mainText = document.getElementById("mainText");

let expression = "";
let justEvaluated = false;

const clear1 = () => {
  expression = "";
  justEvaluated = false;
  mainText.value = "";
};

const onClickNumber = (digit) => {
  if (justEvaluated) {
    expression = ""; // Start fresh after result
    justEvaluated = false;
  }
  expression += digit;
  mainText.value = expression;
};

const addOperator = (operator) => {
  if (justEvaluated) {
    justEvaluated = false;
    // Use the result for chaining
    expression = mainText.value;
  }

  const lastChar = expression[expression.length - 1];
  if ("+-*/".includes(lastChar)) {
    // Replace last operator (e.g., avoid 2++3)
    expression = expression.slice(0, -1);
  }

  expression += operator;
  mainText.value = expression;
};

const plus = () => addOperator("+");
const minus = () => addOperator("-");
const multiply = () => addOperator("*");

const equals = () => {
  try {
    const result = eval(expression);
    mainText.value = result;
    expression = result.toString(); // So we can continue using result
    justEvaluated = true;
  } catch (err) {
    mainText.value = "Error";
    expression = "";
    justEvaluated = false;
  }
};
