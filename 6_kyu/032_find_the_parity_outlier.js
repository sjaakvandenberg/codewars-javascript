/**
 * 032_find_the_parity_outlier.js
 * https://www.codewars.com/kata/find-the-parity-outlier
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * You are given an array (which will have a length of at
 * least 3, but could be very large) containing integers.
 * The array is either entirely comprised of odd integers
 * or entirely comprised of even integers except for a
 * single integer N. Write a method that takes the array
 * as an argument and returns N.
 *
 * For example:
 * [2, 4, 0, 100, 4, 11, 2602, 36] // 11
 * [160, 3, 1719, 19, 11, 13, -21] // 160
 */

let assert = require('assert')

const findOutlier = integers => {
  evens = integers.filter(n => n % 2 === 0)
  odds  = integers.filter(n => n % 2 !== 0)
  if (evens.length > odds.length)
    return Number(integers.filter(n => n === odds[0]))
  else return Number(integers.filter(n => n === evens[0]))
}

// Shorter

const findOutlier = integers => {
  evens = integers.filter(n => n % 2 === 0)
  odds  = integers.filter(n => n % 2 !== 0)
  return evens.length === 1 ? evens[0] : odds[0]
}

// Tests

describe('integers', function() {
  describe('#findOutlier()', function() {
    it('should return 11', function() {
      assert.equal(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11)
    })
    it('should return 160', function() {
      assert.equal(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160)
    })
    it('should return 1', function() {
      assert.equal(findOutlier([0, 1, 2]), 1)
    })
    it('should return 2', function() {
      assert.equal(findOutlier([1, 2, 3]), 2)
    })
    it('should return 3', function() {
      assert.equal(findOutlier([2,6,8,10,3]), 3)
    })
    it('should return 3', function() {
      assert.equal(findOutlier([0,0,3,0,0]), 3)
    })
    it('should return 0', function() {
      assert.equal(findOutlier([1,1,0,1,1]), 0)
    })
  })
})
