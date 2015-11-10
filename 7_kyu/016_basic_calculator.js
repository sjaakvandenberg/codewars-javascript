/**
 * 016_basic_calculator.js
 * http://www.codewars.com/kata/basic-calculator
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a function called calculate that takes 3 values. The first and third
 * values are numbers. The second value is a character. If the character is '+'
 * , '-', '*', or '/', the function will return the result of the corresponding
 * mathematical function on the two numbers. If the string is not one of the
 * specified characters, the function should return null.
 */

function calculate(num1, operation, num2) {
  if (operation === '+') { return num1 + num2;
  } else if (operation === '-') { return num1 - num2;
  } else if (operation === '*') { return num1 * num2;
  } else if (operation === 'm') { return num1 % num2;
  } else if (operation === '/' && num2 === 0) { return null;
  } else if (operation === '/') { return num1 / num2;
  } else { return null; }
}

// Alternative

function calculate2(num1, operation, num2) {
  var operators = {
    '+': function(x, y) { return x + y; },
    '-': function(x, y) { return x - y; },
    '*': function(x, y) { return x * y; },
    '/': function(x, y) { return y === 0 ? null : x / y; },
  };
  return (operations[operation] || function() { return null; })(num1, num2);
}

function calculate3(num1, operation, num2) {
 if(operation === '+') { return num1 + num2; }
 if(operation === '-') return num1 - num2;
 if(operation === '/' && num2 != 0) return num1 / num2;
 if(operation === '*') return num1 * num2;
 return null;
}

calculate(4, '+', 2); // 6
calculate(4, '-', 2); // 2
calculate(4, '*', 2); // 8
calculate(4, 'm', 2); // 0
calculate(4, '/', 2); // 2
calculate(4, '/', 0); // null
