/**
 * 033_duplicate_encoder.js
 * https://www.codewars.com/kata/duplicate-encoder
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * The goal of this exercise is to convert a string to a new
 * string where each character in the new string is '(' if
 * that character appears only once in the original string,
 * or ')' if that character appears more than once in the
 * original string. Ignore capitalization when determining
 * if a character is a duplicate.
 *
 * Examples:
 * "din"     // "((("
 * "recede"  // "()()()"
 * "Success" // ")())())"
 * "(( @"    // "))(("
 */

let assert = require('assert')

const duplicateEncode = word => {
  let counts = {}
  word.toLowerCase().split('').forEach(x => counts[x] = (counts[x] || 0) + 1)
  for (let key in counts) {
    return word.toLowerCase().split('').map(c => {
      if (counts[c] === 1) return "("
      else return ")"
    }).join('')
  }
}

// Shorter

const duplicateEncode = word => {
  return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')')
    .join('')
}

// Tests

describe('word', function() {
  describe('#duplicateEncode()', function() {
    it('should return (((', function() {
      assert.equal(duplicateEncode("din"), "(((")
    })
    it('should return ()()()', function() {
      assert.equal(duplicateEncode("recede"), "()()()")
    })
    it('should return )())())', function() {
      assert.equal(duplicateEncode("Success"), ")())())")
    })
    it('should return ))((', function() {
      assert.equal(duplicateEncode("(( @"), "))((")
    })
  })
})
