/**
 * 001_moving_zeros_to_the_end.js
 * http://www.codewars.com/kata/moving-zeros-to-the-end
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Write an algorithm that takes an array and moves all of the zeros to the
 * end, preserving the order of the other elements.
 * moveZeros([false, 1 , 0 , 1 , 2 , 0 , 1 , 3, 'a']);
 * // [false, 1 , 1 , 2 , 1 , 3 , 'a', 0 , 0]
 */

function moveZeros(arr) {
  var zeros = 0;
  var array = arr.filter(function(e) {
    if (e === 0) zeros++;
    return e !== 0;
  });

  for (var i = 0; i < zeros; i++) {
    array.push(0);
  }

  return array;
}

moveZeros([5, 0, 0, 5]);                // [5, 5, 0, 0]
moveZeros([1, 2, 0, 0, 1, 0, 3, 0, 1]); // [1, 2, 1, 3, 1, 0, 0, 0, 0]
moveZeros([false, 0, 1, 2, 0, 1, 'a']); // [false, 1, 2, 1, 'a', 0, 0]
