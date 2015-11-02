/**
 * 004_return_the_missing_element.js
 * http://www.codewars.com/kata/return-the-missing-element
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Fellow code warrior, we need your help! We seem to have lost one of our
 * array elements, and we need your help to retrieve it! Our array,
 * `superImportantArray`, was supposed to contain all of the integers from 0 to
 * 9 (in no particular order), but one of them seems to be missing.
 *
 * Write a function called `getMissingElement` that accepts an array of unique
 * integers between 0 and 9 (inclusive), and returns the missing element.
 *
 * Examples
 *
 * getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
 * getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3
 */

function getMissingElement(arr) {
  var total = 45;
  for (var i = 0; i < arr.length; i++) {
    total -= arr[i];
  }

  return total;
}

// Alternative

function getMissingElement2(arr) {
  return arr.reduce(function(sum, value) { return sum - value; }, 45);
}

getMissingElement([0, 1, 2, 3, 5, 6, 7, 8, 9]); // 4
getMissingElement([0, 1, 2, 3, 4, 5, 6, 8, 9]); // 7
getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]); // 8
getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]); // 3
