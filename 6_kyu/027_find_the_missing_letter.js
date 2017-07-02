/**
 * 027_find_the_missing_letter.js
 * https://www.codewars.com/kata/find-the-missing-letter
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a method that takes an array of consecutive (increasing)
 * letters as input and that returns the missing letter in the array.
 *
 * You will always get an valid array. And it will be always exactly
 * one letter be missing. The length of the array will always be at
 * least 2. The array will always contain letters in only one case.
 *
 * Example:
 * ['a','b','c','d','f'] -> 'e'
 * ['O','Q','R','S'] -> 'P'
 *
 * (Use the English alphabet with 26 letters!)
 */

let assert = require('assert')

const findMissingLetter = array => {
  let charCodes = array.map(e => e.charCodeAt(0))
  for (let i = 0; i < charCodes.length - 1; i++)
    if (charCodes[i] !== charCodes[i + 1] - 1)
      return String.fromCharCode(charCodes[i] + 1)
}

// Tests

describe('array', function() {
  describe('#findMissingLetter()', function() {
    it('should return a letter', function() {
      assert.equal(findMissingLetter(['a','b','c','d','f']), 'e')
      assert.equal(findMissingLetter(['O','Q','R','S']), 'P')
    })
  })
})
