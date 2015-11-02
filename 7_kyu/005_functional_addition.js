/**
 * 005_functional_addition.js
 * http://www.codewars.com/kata/functional-addition
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Create a function `add(n)` that returns a function that always adds `n` to
 * any number.
 */

function add(n) {
  return function(x) { return x + n; };
}

var addSeven = add(7);
var addEight = add(8);
add(13)(7);   // 20
add(12)(8);   // 20
addSeven(13); // 20
addEight(12); // 20
