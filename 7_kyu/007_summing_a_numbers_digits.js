/**
 * 007_summing_a_numbers_digits.js
 * http://www.codewars.com/kata/summing-a-numbers-digits
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Write a function named `sumDigits` which takes a number as input and returns
 * the sum of the absolute value of each of the number's decimal digits.
 *
 * Example
 *
 * sumDigits(10);  // 1
 * sumDigits(99);  // 18
 * sumDigits(-32); // 5
 */

function sumDigits(n) {
  var sum = 0;
  var absNumber = Math.abs(n);
  var numberArr = String(absNumber).split('').map(function(t) {
    return Number(t);
  });

  for (var i = 0; i < numberArr.length; i++) {
    sum += numberArr[i];
  }

  return sum;
}

// Alternative using reduce instead of map

function sumDigits2(n) {
  var absNumStr = Math.abs(n).toString();
  return absNumStr.split('').reduce(function(a, b) { return +a + +b; }, 0);
}

// Alternative using while loop

function sumDigits3(n) {
  var i = 0;
  var sum = 0;
  number = Math.abs(number);
  while (number != 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

sumDigits(10);  // 1
sumDigits(99);  // 18
sumDigits(-32); // 5
