const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, arg) => sum + arg, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, arg) => product * arg, 1);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	if (num === 1 || num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
