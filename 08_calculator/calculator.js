const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
};

const multiply = function (arr) {
  return arr.reduce((acc, curVal) => {
    return acc * curVal;
  }, 1);
};

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
