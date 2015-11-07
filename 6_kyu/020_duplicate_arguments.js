/**
 * 020_duplicate_arguments.js
 * http://www.codewars.com/kata/duplicate-arguments
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Complete the solution so that it returns true if it contains any duplicate
 * argument values. Any number of arguments may be passed into the function.
 *
 * The solution should implement the most optimal algorithm possible. The array
 * values passed in will only be strings or numbers. The only valid return
 * values are `true` and `false`.
 */

function solution() {
  var arr  = Array.prototype.slice.call(arguments, 0);
  var uniq = arr.sort().filter(function(item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });

  return arr.length !== uniq.length;
}

// O(n^2) alternative

function solution2() {
  var arr = Array.prototype.slice.call(arguments, 1);
  for (var i = 0; i <= arr.length; i++) {
    for (var j = 0; i <= arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
}

// Using map

function solution3() {
  for (var map = new Map(), i = arguments.length; i--;) {
    if (map.has(arguments[i])) return true;
    map.set(arguments[i], 1);
  }

  return false;
}

function solution4() {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arr[arguments[i]] !== undefined) {
      return true;
    } else {
      arr[arguments[i]] = 1;
    }
  }

  return false;
}


solution(1, 2, 3);             // false
solution(1, 2, 3, 2);          // true
solution('1', '2', '3', '2');  // true
