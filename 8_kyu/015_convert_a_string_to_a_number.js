/**
 * 015_convert_a_string_to_a_number.js
 * http://www.codewars.com/kata/convert-a-string-to-a-number
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * We need a function that can transform a string into a number. What ways of
 * achieving this do you know?
 *
 * Note: Don't worry, all inputs will be strings, and every string is a
 * perfectly valid representation of an integral number.
 */

function stringToNumber(str) {
  return Number(str) || null;
}

stringToNumber('5');  // 5
stringToNumber('-5'); // -5
stringToNumber();     // null
