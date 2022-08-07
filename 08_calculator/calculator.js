const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let multiplied = arr[0];
  for (let i = 1; i < arr.length; i++) {
    multiplied *= arr[i];
  }
  return multiplied;
};

const power = function(b, n) {
  let multiplied = b;
  for (let i = 1; i < n; i++) {
    multiplied *= b;
  }
  return multiplied;
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
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
