/**
 * 028_longest_palindrome.js
 * https://www.codewars.com/kata/longest-palindrome
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Find the length of the longest substring in the
 * given string s that is the same in reverse.
 *
 * As an example, if the input was “I like racecars that
 * go fast”, the substring (racecar) length would be 7.
 *
 * If the length of the input string is 0, return value must be 0.
 *
 * Example:
 * "a" -> 1
 * "aab" -> 2
 * "abcde" -> 1
 * "zzbaabcd" -> 4
 * "" -> 0
 */

let assert = require('assert')

const longestPalindrome = s => {
  if (!s) return 0
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      let check = s.substr(i, c)
      if (check === check.split("").reverse().join("")) return c
    }
  }
}

// const isPalindrome = string => string === string.split('').reverse().join('')

const longestPalindrome = string => {
  if (string.length < 2) return string.length
  let longest = ''
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        let subString = string.slice(i, j + 1)
        if (subString.length > longest.length &&
            subString === subString.split('').reverse().join('')) {
          longest = subString
        }
      }
    }
  }
  return longest.length
}

// Tests

describe('string', function() {
  describe('#longestPalindrome()', function() {
    it('should return 1', function() {
      assert.equal(longestPalindrome('a'), 1)
    })
    it('should return 2', function() {
      assert.equal(longestPalindrome('aa'), 2)
    })
    it('should return 2', function() {
      assert.equal(longestPalindrome('baa'), 2)
    })
    it('should return 2', function() {
      assert.equal(longestPalindrome('aab'), 2)
    })
    it('should return 1', function() {
      assert.equal(longestPalindrome('abcdef'), 1)
    })
    it('should return 2', function() {
      assert.equal(longestPalindrome('abcddef'), 2)
    })
    it('should return 4', function() {
      assert.equal(longestPalindrome('baabcd'), 4)
    })
    it('should return 9', function() {
      assert.equal(longestPalindrome('baablkj12345432133d'), 9)
    })
  })
})
