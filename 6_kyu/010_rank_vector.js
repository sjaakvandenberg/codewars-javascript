/**
 * 010_rank_vector.js
 * http://www.codewars.com/kata/rank-vector
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Given an array (or list) of scores, return the array of ranks for each value
 * in the array. The largest value has rank 1, the second largest value has
 * rank 2, and so on. Ties should be handled by assigning the same rank to all
 * tied values.
 *
 * Notes
 *
 * arr    = [4, 3, 3, 5, 1];
 * sorted = [5, 4, 3, 3, 1];
 *
 * RUN 1
 * ------------------------------------------------------------
 * 4                       # first value of arr
 * sorted.indexOf(4) --> 1 # second pos in sorted array
 * + 1 --> 2               # result [2]
 *
 * RUN 2
 * ------------------------------------------------------------
 * 3                       # second value of arr
 * sorted.indexOf(3) --> 2 # third pos in sorted array
 * + 1 --> 3               # result [2, 3]
 *
 * RUN 3
 * ------------------------------------------------------------
 * 3                       # third value of arr
 * sorted.indexOf(3) --> 2 # third pos in sorted array
 * + 1 --> 3               # result [2, 3, 3]
 *
 * RUN 4
 * ------------------------------------------------------------
 * 5                       # fourth value of arr
 * sorted.indexOf(5) --> 0 # first pos in sorted array
 * + 1 --> 1               # result [2, 3, 3, 1]
 *
 * RUN 5
 * ------------------------------------------------------------
 * 1                       # fifth value of arr
 * sorted.indexOf(1) --> 4 # fifth pos in sorted array
 * + 1 --> 5               # result [2, 3, 3, 1, 5]
 */

function ranks(arr) {
  var sorted = arr.slice().sort(function(a, b) { return b - a; });
  return arr.slice().map(function(v) { return sorted.indexOf(v) + 1; });
}

ranks([9, 3, 6, 10]);         // [2, 4, 3, 1]
ranks([3, 3, 3, 3, 3, 5, 1]); // [2, 2, 2, 2, 2, 1, 7]
