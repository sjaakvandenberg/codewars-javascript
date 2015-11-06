/**
 * 024_last.js
 * http://www.codewars.com/kata/last
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * The the last element of a list.
 */

function last(list) {
  if (typeof list === 'string' && arguments.length === 1)
    return list[list.length - 1];
  else if (Array.isArray(list))
    return list[list.length - 1];
  else
    return arguments[arguments.length - 1];
}

last([1, 2, 3, 4, 5]);    // 5
last('abcde', 'e');       // 'e'
last(1, 'b', 3, 'd', 5);  // 5
