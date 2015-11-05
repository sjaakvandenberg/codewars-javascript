/**
 * 008_multiplication_table.js
 * http://www.codewars.com/kata/multiplication-table
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Your task, is to create NxN multiplication table of a specific size.
 *
 * For example, when given `size` is 3:
 *
 * 1 2 3
 * 2 4 6
 * 3 6 9
 *
 * For given example, the return value should be:
 * [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
 */

function multiplicationTable(size) {
  var arr = [];
  for (var i = 0; i < size; i++) {   // rows
    arr[i] = new Array();
    for (var j = 0; j < size; j++) { // columns
      arr[i][j] = (i + 1) * (j + 1);
    }
  }

  return arr;
}

// Alternative

multiplicationTable = function(size) {
  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i + 1) * (j + 1);
    });
  });
};

multiplicationTable(3);
