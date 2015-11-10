/**
 * 003_convert_number_to_reversed_array_of_digits.js
 * http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Given a non-negative integer, return an array containing a list of
 * independent digits in reverse order.
 */

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

digitize(12345); // [5, 4, 3, 2, 1]
