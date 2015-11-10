/**
 * 003_find_the_capitals.js
 * http://www.codewars.com/kata/find-the-capitals-1
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a function that takes a single (`word`) as argument. The function must
 * return an ordered list containing the indexes of all capital letters in the
 * string.
 *
 * Example
 * Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);
 */

function capitals(word) {
  var capitalLocations = [];
  for (var i = 0; i < word.length; i++) {
    /[A-Z]/.test(word[i]) ? capitalLocations.push(i) : 0;
  }

  return capitalLocations;
};

// Alternative without Regex

function capitals2(word) {
  var capitalLocations = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i])
      capitalLocations.push(i);
  }

  return capitalLocations;
};

capitals('abC');      // [2]
capitals('abCdE');    // [2, 4]
capitals('CodEWaRs'); // [0, 3, 4, 6]
