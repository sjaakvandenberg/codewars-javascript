/**
 * 018_for_the_sake_of_argument.js
 * http://www.codewars.com/kata/for-the-sake-of-argument
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Write a function named `numbers` that returns true if all the parameters it
 * is passed are of the Number type. Otherwise, the function should return
 * false. The function should accept any number of parameters.
 */

function numbers() {
  var arr  = Array.prototype.slice.call(arguments, 0);
  return arr.every(function(e, i, a) {
    return typeof e === 'number';
  });
}

// Alternative using call

function numbers() {
  return [].every.call(arguments, function(value) {
    return typeof value === 'number';
  });
}

numbers(1, 2, 3);   // true
numbers(1, 2, NaN); // true
numbers(1, 2, '3'); // false
