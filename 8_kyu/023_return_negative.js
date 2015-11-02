/**
 * 023_return_negative.js
 * http://www.codewars.com/kata/return-negative
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * In this simple assignment you are given a number and have to make it
 * negative. But maybe the number is already negative?
 */

function makeNegative(num) {
  return num !== 0 ? -Math.abs(num) : 0;
}

makeNegative(5);  // -5
makeNegative(-5); // -5
makeNegative(0);  // 0
