/**
 * 031_persistent_bugger.js
 * https://www.codewars.com/kata/persistent-bugger
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a function, persistence, that takes in a positive
 * parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits
 * in num until you reach a single digit.
 *
 * For example:
 * persistence(39) === 3
 * 3 * 9 = 27
 * 2 * 7 = 14
 * 1 * 4 = 4 (one digit)
 *
 * persistence(999) === 4
 * 9 * 9 * 9 = 729
 * 7 * 2 * 9 = 126
 * 1 * 2 * 6 = 12
 * 1 * 2 = 2
 *
 * persistence(4) === 0
 * because 4 is already a one-digit number
 */

let assert = require('assert')

const persistence = number => {
  let product = number.toString().split('')
  let count = 0
  while (product.length > 1) {
    product = product.reduce((a, b) => a * b).toString().split('')
    count++
  }
  return count
}

// Tests

describe('number', function() {
  describe('#persistence()', function() {
    it('should return 4', function() {
      assert.equal(persistence(999), 4)
    })
    it('should return 3', function() {
      assert.equal(persistence(39), 3)
    })
    it('should return 0', function() {
      assert.equal(persistence(4), 0)
    })
  })
})
