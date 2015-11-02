/**
 * 013_milk_and_cookies_for_santa.js
 * http://www.codewars.com/kata/milk-and-cookies-for-santa
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Write a function `timeForMilkAndCookies` that accepts a Date object, and
 * returns `true` if it's Christmas Eve (December 24th), `false` otherwise.
 */

function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() == 24;
}

timeForMilkAndCookies(new Date(2013, 11, 24));  // true
timeForMilkAndCookies(new Date(2013, 0, 23));   // false
timeForMilkAndCookies(new Date(3000, 11, 24));  // true
