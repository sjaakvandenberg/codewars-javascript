/**
 * 005_stop_gninnips_my_sdrow.js
 * http://www.codewars.com/kata/stop-gninnips-my-sdrow
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a function that takes in a string of one or more words, and returns
 * the same string, but with all five or more letter words reversed (Just like
 * the name of this Kata). Strings passed in will consist of only letters and
 * spaces. Spaces will be included only when more than one word is present.
 */

function spinWords(str) {
  return str.split(' ').map(function(e) {
    return e.length > 4 ? e.split('').reverse('').join('') : e;
  }).join(' ');
}

// Alternative using Regex

function spinWords2(str) {
  return str.replace(/\w{5,}/g, function(w) {
    return w.split('').reverse().join('');
  });
}

spinWords('Hey fellow warriors');   // Hey wollef sroirraw
spinWords('This is a test');        // This is a test
spinWords('This is another test');  // This is rehtona test
