// DOM Elements
const addTextToInput = function(digit) {
  let mainText = document.getElementById("mainText");
  mainText.value = mainText.value + digit;
};

const getValue = function() {
  let mainText = document.getElementById("mainText");
  return +mainText.value;
};

const setValue = function(numericalValue) {
  let mainText = document.getElementById("mainText");
  mainText.value = numericalValue.toString();
};

const clear1 = function() {
  let mainText = document.getElementById("mainText");
  mainText.value = "";
};

let accumulator = 0;
let operation = "";

// Arithmetic operation setup functions
const plus = function() {
  accumulator = getValue();
  operation = "plus";
};

const minus = function() {
  accumulator = getValue();
  operation = "minus";
};

const multiply = function() {
  accumulator = getValue();
  operation = "multiply";
};

// Perform calculation
const equals = function() {
  switch (operation) {
    case "plus":
      setValue(accumulator + getValue());
      break;
    case "minus":
      setValue(accumulator - getValue());
      break;
    case "multiply":
      setValue(accumulator * getValue());
      break;
  }
};

// Handle number/digit input
const onClickNumber = function(digit) {
  addTextToInput(digit);
};
