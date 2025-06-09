const getMainText = () => document.getElementById("mainText");

let expression = ""; // full string like "2+6"
let resultShown = false;

const setValue = (val) => {
  const mainText = getMainText();
  mainText.value = val;
};

const clear1 = () => {
  expression = "";
  resultShown = false;
  setValue("");
};

// Add number or operator to the expression
const onClickNumber = (char) => {
  if (resultShown) {
    expression = ""; // reset if a result was just shown
    resultShown = false;
  }
  expression += char;
  setValue(expression);
};

const plus = () => {
  if (!expression.endsWith("+") && !expression.endsWith("-") && !expression.endsWith("*")) {
    expression += "+";
    setValue(expression);
  }
};

const minus = () => {
  if (!expression.endsWith("+") && !expression.endsWith("-") && !expression.endsWith("*")) {
    expression += "-";
    setValue(expression);
  }
};

const multiply = () => {
  if (!expression.endsWith("+") && !expression.endsWith("-") && !expression.endsWith("*")) {
    expression += "*";
    setValue(expression);
  }
};

const equals = () => {
  try {
    const result = eval(expression); // CAUTION: eval can be dangerous; okay here for calculator use
    setValue(result);
    expression = result.toString();
    resultShown = true;
  } catch (err) {
    setValue("Error");
    expression = "";
  }
};
