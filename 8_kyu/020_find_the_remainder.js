/**
 * 020_find_the_remainder.js
 * http://www.codewars.com/kata/find-the-remainder
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Write a function that accepts two arguments and returns the remainder after
 * dividing the larger number by the smaller number. Division by zero should
 * return NaN. Arguments will both be integers.
 */

function remainder(a, b) {
  return Math.max(a, b) % Math.min(a, b);
}

// Alternative

function remainder2(a, b) {
  return a < b ? a % b : b % a;
}

remainder(17, 5);   // 2
remainder(13, 72);  // 7
remainder(72, 13);  // 7
remainder(1, 0);    // NaN
remainder(0, 0);    // NaN
