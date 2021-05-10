function screen() {
  allNum.forEach((x) => {
    x.addEventListener('click', (y) => {
      store.push(x.textContent);
      displayResult.textContent = store.join('');
    });
  });
}

screen();

function allClear() {
  clear.addEventListener('click', (x) => {
    store = [];
    displayResult.textContent = '';
    number1 = '';
    number2 = '';
    currentOperator = '';
    currentNumber = '';
  });
}

allClear();

function oneClear() {
  backspace.addEventListener('click', (x) => {
    store.pop();
    displayResult.textContent = store.join('');
  });
}

oneClear();

function operators() {
  allOperator.forEach((x) => {
    x.addEventListener('click', (y) => {
      number1 = store.join('');
      number1 = Number(number1);
      currentOperator = x.textContent;
      store = [];
      displayResult.textContent = store.join('');
    });
  });
}

operators();

function operate() {
  equal.addEventListener('click', (x) => {
    number2 = store.join('');
    number2 = Number(number2);
    if (currentOperator === '+') {
      currentNumber = number1 + number2;
    } else if (currentOperator === '-') {
      currentNumber = number1 - number2;
    } else if (currentOperator === '*') {
      currentNumber = number1 * number2;
    } else if (currentOperator === '/') {
      currentNumber = number1 / number2;
    } else if (currentOperator === '%') {
      currentNumber = number1 % number2;
    }
    store = [];
    displayResult.textContent = store.join('');
    displayResult.textContent = currentNumber;
    number1 = currentNumber;
  });
}

operate();
