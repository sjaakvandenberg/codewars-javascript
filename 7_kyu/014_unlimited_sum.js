/**
 * 014_unlimited_sum.js
 * http://www.codewars.com/kata/unlimited-sum
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a function `sum` that accepts an unlimited number of integer
 * arguments, and adds all of them together.
 *
 * The function should reject any arguments that are not integers, and sum the
 * remaining integers.
 */

function sum(arr) {
  var sum = 0;
  for (var n in arr) {
    if (typeof arr[n] === 'number') { sum += arr[n]; }
  }

  return sum;
}

sum([1, 2, 3]);       // 6
sum([1, 2, 3, '4']);  // 6
