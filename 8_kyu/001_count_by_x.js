/**
 * 001_count_by_x.js
 * http://www.codewars.com/kata/count-by-x
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Create a function with two arguments that will return a list of length (n)
 * with multiples of (x).
 *
 * Assume both the given number and the number of times to count will be
 * positive numbers greater than 0.
 *
 * Return the results as an array.
 */

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(i * x);
  }

  return z;
}

countBy(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countBy(2, 5);  // [2, 4, 6, 8, 10]
