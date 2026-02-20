function sum(a, b) {
  return console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

function subtract(a, b) {
  return console.log(`The difference of ${a} and ${b} is ${a - b}`);
}

function multiply(a, b) {
  return console.log(`The product of ${a} and ${b} is ${a * b}`);
}

function divide(a, b) {
  return console.log(`The quotient of ${a} and ${b} is ${a / b}`);
}

export function smart() {
  sum(1, 2);
  subtract(3, 4);
  multiply(5, 6);
  divide(7, 8);
}
