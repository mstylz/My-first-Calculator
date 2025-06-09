// Utility Functions
const getMainText = () => document.getElementById("mainText");

const addTextToInput = function(digit) {
  const mainText = getMainText();
  mainText.value = mainText.value + digit;
};

const getValue = function() {
  const mainText = getMainText();
  return parseFloat(mainText.value) || 0;
};

const setValue = function(numericalValue) {
  const mainText = getMainText();
  mainText.value = numericalValue.toString();
};

const clear1 = function() {
  const mainText = getMainText();
  mainText.value = "";
};

// Calculator Logic
let accumulator = 0;
let operation = "";
let isWaitingForSecondValue = false;

const plus = function() {
  accumulator = getValue();
  operation = "plus";
  isWaitingForSecondValue = true;
};

const minus = function() {
  accumulator = getValue();
  operation = "minus";
  isWaitingForSecondValue = true;
};

const multiply = function() {
  accumulator = getValue();
  operation = "multiply";
  isWaitingForSecondValue = true;
};

const equals = function() {
  const secondValue = getValue();
  switch (operation) {
    case "plus":
      setValue(accumulator + secondValue);
      break;
    case "minus":
      setValue(accumulator - secondValue);
      break;
    case "multiply":
      setValue(accumulator * secondValue);
      break;
  }
  // Reset state
  accumulator = 0;
  operation = "";
  isWaitingForSecondValue = false;
};

const onClickNumber = function(digit) {
  const mainText = getMainText();
  if (isWaitingForSecondValue) {
    mainText.value = ""; // Clear for second number entry
    isWaitingForSecondValue = false;
  }
  addTextToInput(digit);
};
