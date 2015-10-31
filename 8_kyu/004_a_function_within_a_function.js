/**
 * 004_a_function_within_a_function.js.js
 * http://www.codewars.com/kata/a-function-within-a-function
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Given an input n, write a function always that returns a function which
 * returns n.
 */

function always(n) {
  return function() {
    return n;
  };
}

var five = always(5);
five(); // 5
