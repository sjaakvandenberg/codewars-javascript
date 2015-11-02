/**
 * 002_making_copies.js
 * http://www.codewars.com/kata/making-copies
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Write a function that takes an array of numbers, and makes a copy.
 *
 * Note that you may have troubles if you do not return an actual copy, item by
 * item, not just a pointer or an alias for an existing list or array.
 *
 * If no array is given as a parameter, the function should raise an error.
 */

function copyList(l) {
  if (Array.isArray(l)) {
    var lCopy = [];
    for (var i = 0; i < l.length; i++) {
      lCopy.push(l[i]);
    }

    return lCopy;
  } else
    throw 'Argument is not an array.';
}

// Alternatives

function copyList2(l) {
  return l.slice();
}

function copyList3(l) {
  return [].concat(l);
}

arr = [1, 2, 3, 4];     // [1, 2, 3, 4]
tCopy = copyList(arr);  // [1, 2, 3, 4]
arr[1] += 7;            // 9
arr;                    // [1, 9, 3, 4];
tcopy;                  // [1, 2, 3, 4];
