/**
 * 026_shortest_word.js
 * http://www.codewars.com/kata/shortest-word
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for
 * different data types.
 */

const findShort = string => {
  let lengths = []
  string.split(' ').forEach(s => lengths.push(s.length))
  return lengths.sort((a, b) => a - b)[0]
}

// Shorter

const findSort = s => Math.min(...s.split(" ").map(s => s.length))

// Tests

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))                // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")) // 3
