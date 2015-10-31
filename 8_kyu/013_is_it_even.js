/**
 * 013_is_it_even.js
 * http://www.codewars.com/kata/is-it-even
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * In this Kata we are passing a number (n) into a function. Tour code will
 * determine if the number passed is even (or not). The function needs to
 * return either a true or false. Numbers may be positive or negative, integers
 * or floats. Floats are considered UNeven for this kata.
 */

function testEven(n) {
  return n % 2 === 0 ? true : false;
}

// Shorter

function testEven2(n) {
  return n % 2 === 0;
}

testEven(2);    // true
testEven(3);    // false
testEven(-2);   // true
testEven(-3);   // false
testEven(-2.5); // false
testEven(13.3); // false
