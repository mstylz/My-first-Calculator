// DOM Utility
const getMainText = () => document.getElementById("mainText");

let accumulator = null;
let operation = null;
let shouldResetScreen = false;

// Updates input display
const setValue = (val) => {
  const mainText = getMainText();
  mainText.value = val;
};

// Gets current input value
const getValue = () => {
  const mainText = getMainText();
  return parseFloat(mainText.value);
};

// Clears the input
const clear1 = () => {
  setValue("");
  accumulator = null;
  operation = null;
  shouldResetScreen = false;
};

// Called when user clicks a number
const onClickNumber = (digit) => {
  const mainText = getMainText();
  if (shouldResetScreen) {
    mainText.value = "";
    shouldResetScreen = false;
  }
  mainText.value += digit;
};

// Operation functions
const plus = () => {
  accumulator = getValue();
  operation = "plus";
  shouldResetScreen = true;
};

const minus = () => {
  accumulator = getValue();
  operation = "minus";
  shouldResetScreen = true;
};

const multiply = () => {
  accumulator = getValue();
  operation = "multiply";
  shouldResetScreen = true;
};

// Equals function
const equals = () => {
  if (accumulator === null || operation === null) return;
  const secondValue = getValue();
  let result = 0;

  switch (operation) {
    case "plus":
      result = accumulator + secondValue;
      break;
    case "minus":
      result = accumulator - secondValue;
      break;
    case "multiply":
      result = accumulator * secondValue;
      break;
  }

  setValue(result);
  accumulator = null;
  operation = null;
  shouldResetScreen = true;
};
