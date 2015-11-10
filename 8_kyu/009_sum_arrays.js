/**
 * 009_sum_arrays.js
 * http://www.codewars.com/kata/sum-arrays
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a method sum (sum_array in python) that takes an array of numbers and
 * returns the sum of the numbers. The numbers can also be negative. If the
 * array does not contain any numbers then you should return 0.
 *
 * Assumptions
 * - You can assume that you are only given numbers
 * - You cannot assume the size of the array
 * - You can assume that you do get an array and if the array is empty,
 *   return 0
 */

function sum(arr) {
  var arr = arr || 0;
  var sum = 0;
  for (var i = arr.length; i--;) {
    sum += arr.pop();
  }

  return sum;
};

// Reduce (slower)

function sum2(numbers) {
  return numbers.reduce(function(a, b) {
    return a + b;
  }, 0);
};

sum();                  // 0
sum([3, -26, 55, 11]);  // 43
sum([1, 2, 3, 4, 5]);   // 15
sum([1, 2.5, 3, 4, 5]); // 15.5
