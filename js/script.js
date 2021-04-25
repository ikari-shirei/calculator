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

let store = [];
let variable1;
let variable2;

function show() {
  for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', (e) => {
      store.push(e.target.textContent);
      displayResult.textContent = store.join('');
    });
  }

  clear.addEventListener('click', () => {
    store = [];
    displayResult.textContent = store;
  });
}

show();

function operate() {
  oper.forEach((x) => {
    x.addEventListener('click', () => {
      variable1 = store.join('');
      variable1 = parseInt(variable1);
      store = [];
      variable2 = variable1;
      console.log({ variable1, variable2 });
    });
  });
}

operate();
