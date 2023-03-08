let display = document.querySelector('.display');

function addToDisplay(value) {
  display.innerHTML += value;
}

function clearDisplay() {
  display.innerHTML = '';
}

function calculate() {
  let result = eval(display.innerHTML);
  display.innerHTML = result;
}