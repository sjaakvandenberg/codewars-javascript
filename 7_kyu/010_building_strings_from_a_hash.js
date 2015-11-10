/**
 * 010_building_strings_from_a_hash.js
 * http://www.codewars.com/kata/building-strings-from-a-hash
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Complete the solution so that it takes the object passed in and generates a
 * human readable string from its key/value pairs.
 *
 * The format should be "KEY = VALUE". Each key/value pair should be separated
 * by a comma except for the last pair.
 *
 * Example
 *
 * solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
 */

 function solution(pairs) {
   return Object.keys(pairs).map(function(key) {
     return key + ' = ' + pairs[key];
   }).join(',');
 };

// Alternative formatting

function solution2(pairs) {
  return Object.keys(pairs)
    .map(function(key) { return key + ' = ' + pairs[key]; })
    .join(',');
};

// For loop

function solution3(pairs) {
  var arr = [];
  for (var pair in pairs) {
    arr.push(pair + ' = ' + pairs[pair]);
  }

  return arr.join(',');
};

solution({a: 1, b: '2'}); // a = 1,b = 2
