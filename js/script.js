let result = document.querySelector('#result');
let numberAll = document.querySelectorAll('.num');
let operatorAll = document.querySelectorAll('.operator');
let clearButton = document.querySelector('#clear');
let deleteButton = document.querySelector('#backspace');
let equalButton = document.querySelector('#equal');

let storeArr = [];
let number1 = null;
let number2 = null;
let currentOperator = null;
let lastResult = null;

//clear everything
function resetEverything() {
  storeArr = [];
  num1 = 0;
  num2 = 0;
  result.textContent = 0;
  curOperator = null;
}

//when click clear, clear everything
function clearAll() {
  clearButton.addEventListener('click', () => {
    resetEverything();
  });
}

clearAll();

//when click backspace, delete one item
function clearOne() {
  deleteButton.addEventListener('click', () => {
    storeArr.pop();
    result.textContent = storeArr.join('');
  });
}

clearOne();

//set display
function display() {
  for (let i = 0; i < numberAll.length; i++) {
    numberAll[i].addEventListener('click', (e) => {
      storeArr.push(e.target.textContent);
      result.textContent = storeArr.join('');
      console.log(storeArr);
    });
  }
}

display();

//take two numbers and operator then calculate it when called
function operate(num1, num2, currentOperator) {
  switch (currentOperator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return mod(num1, num2);
  }
}

function calculate() {
  operatorAll.forEach((i) => {
    //when operator clicked save numbers to number1 and operator to currentOperator.
    i.addEventListener('click', (e) => {
      currentOperator = e.target.textContent;
      number1 = Number(storeArr.join(''));
      //clear display and storeArr
      storeArr = [];
      result.textContent = storeArr.join('');
    });
  });
  //when equal button clicked save numbers to number2, use operator function to calculate,
  equalButton.addEventListener('click', (e) => {
    number2 = Number(storeArr.join(''));
    lastResult = operate(number1, number2, currentOperator);
    result.textContent = lastResult;
    //make storeArr value equal to result number.
    storeArr = [lastResult];
  });
}

calculate();

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function mod(num1, num2) {
  return num1 % num2;
}
