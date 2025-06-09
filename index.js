let expression = "";
let justEvaluated = false;

const mainText = document.getElementById("mainText");

const clear1 = () => {
  expression = "";
  justEvaluated = false;
  mainText.value = "";
};

const onClickNumber = (char) => {
  if (justEvaluated) {
    expression = "";
    justEvaluated = false;
  }
  expression += char;
  mainText.value = expression;
};

const addOperator = (operator) => {
  if (justEvaluated) {
    justEvaluated = false;
    expression = mainText.value;
  }

  const lastChar = expression.slice(-1);
  if ("+-*/.".includes(lastChar)) return;

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
    expression = result.toString();
    justEvaluated = true;
  } catch (e) {
    mainText.value = "Error";
    expression = "";
    justEvaluated = false;
  }
};
