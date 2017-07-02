/**
 * 025_get_the_middle_character.js
 * http://www.codewars.com/kata/get-the-middle-character
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * You are going to be given a word. Your job is to return the
 * middle character of the word. If the word's length is odd,
 * return the middle character. If the word's length is even,
 * return the middle 2 characters.
 *
 * Examples:
 * Kata.getMiddle("test") should return "es"
 * Kata.getMiddle("testing") should return "t"
 * Kata.getMiddle("middle") should return "dd"
 * Kata.getMiddle("A") should return "A"
 *
 * Input
 * A word (string) of length 0 < str < 1000
 *
 * Output
 * The middle character(s) of the word represented as a string.
 */

const getMiddle = string => {
  let start = Math.floor((string.length - 1) / 2)
  let end = (string.length % 2 === 0) ? start + 2 : start + 1
  return string.slice(start, end)
}

// Shorter version

const getMiddle = s => string.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)

// Tests

console.log(getMiddle("test"))    // es
console.log(getMiddle("testing")) // t
console.log(getMiddle("middle"))  // dd
console.log(getMiddle("A"))       // A
