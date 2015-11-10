/**
 * 009_smallest_value_of_an_array.js
 * http://www.codewars.com/kata/smallest-value-of-an-array
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a function that can return the smallest value of an array or the index
 * of that value. The function's 2nd parameter will tell whether it should
 * return the value or the index.
 *
 * Assume the first parameter will always be an array filled with at least 1
 * number and no duplicates. Assume the second parameter will be a string
 * holding one of two values: 'value' and 'index'.
 *
 * min([1,2,3,4,5], 'value') // => 1
 * min([1,2,3,4,5], 'index') // => 0
 *
 * Kata.FindSmallest(new int[]{ 1, 2 , 3, 4, 5}, "value") // => 1
 * Kata.FindSmallest(new int[]{ 1, 2 , 3, 4, 5}, "index") // => 0
 */

function min(arr, toReturn) {
  if (toReturn == 'value')
    return Math.min.apply(null, arr);
  else if (toReturn == 'index')
    return arr.indexOf(Math.min.apply(null, arr));
}

// Alternative

function min2(arr, toReturn) {
  var val = Math.min.apply(null, arr);
  return toReturn == 'value' ? val : arr.indexOf(val);
}

min([7, -5, 2], 'value');       // -5
min([-5.3, -9.3, 17], 'value'); // -9.3
min([-5.3, -9.3, 17], 'index'); // 1
min([-5.3, 17, -9.3], 'index'); // 2
