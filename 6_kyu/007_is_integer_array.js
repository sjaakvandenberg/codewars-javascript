/**
 * 007_is_integer_array.js
 * http://www.codewars.com/kata/is-integer-array
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Write a function `isIntArray` with the following conditions:
 * - returns true if every element in an array is an integer
 * - returns true if array is empty
 * - returns false for every other input
 */

function isIntArray(arr) {
  if (Array.isArray(arr)) {
    return arr.every(function(e) {
      return typeof e === 'number' && e % 1 === 0;
    });
  } else {
    return false;
  }
}

// Alternatives

function isIntArray2(arr) {
  return Array.isArray(arr) && arr.every(function(x) {
    return Math.floor(x) === x;
  });
}

isIntArray(NaN);        // false
isIntArray(true);       // false
isIntArray('5');        // false
isIntArray(5);          // false
isIntArray([1, 2.5]);   // false
isIntArray([1, true]);  // false
isIntArray([1, '5']);   // false
isIntArray([1, NaN]);   // false
isIntArray([1, 2, 3]);  // true
