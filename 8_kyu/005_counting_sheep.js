/**
 * 005_counting_sheep.js.js
 * http://www.codewars.com/kata/counting-sheep-dot-dot-dot
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Consider an array of sheep where some sheep may be missing from their place.
 * We need a function that counts the number of sheep present in the array
 * (true means present).
 *
 * For example:
 * [true, true, true, false, true, true, true, true, true, false, true, false,
 * true, false, false, true, true, true, true, true, false, false, true, true]
 *
 * The correct answer would be 17.
 * Hint: Don't forget to check for bad values like `null`/`undefined`.
 */

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(function(value) {
    return value === true;
  }).length;
}

// alternative

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]); // 17
