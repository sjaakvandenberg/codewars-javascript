/**
 * 025_equal_sides_of_an_array.js
 * http://www.codewars.com/kata/equal-sides-of-an-array
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * You are going to be given an array of integers. Your job is
 * to take that array and find an index N where the sum of the
 * integers to the left of N is equal to the sum of the integers
 * to the right of N. If there is no index that would make this
 * happen, return -1.
 *
 * For example, let's say you are given the array
 * [1,2,3,4,3,2,1]: Your function will return the index 3,
 * because at the 3rd position of the array, the sum of left
 * side of the index ([1,2,3]) and the sum of the right side
 * of the index ([3,2,1]) both equal 6.
 *
 * Let's look at another one. You are given the array
 * [1,100,50,-51,1,1]: Your function will return the index 1,
 * because at the 1st position of the array, the sum of left
 * side of the index ([1]) and the sum of the right side of
 * the index ([50,-51,1,1]) both equal 1.
 *
 * Last one: You are given the array [20,10,-80,10,10,15,35].
 * At index 0 the left side is []. The right side is
 * [10,-80,10,10,15,35]. They both are equal to 0 when added.
 * (Empty arrays are equal to 0 in this problem). Index 0 is
 * the place where the left side and right side are equal.
 *
 * Note: Please remember that in most programming/scripting
 * languages the index of an array starts at 0.
 *
 * Input:
 * An integer array of length 0 < arr < 1000. The numbers in
 * the array can be any integer positive or negative.
 *
 * Output:
 * The lowest index N where the side to the left of N is equal
 * to the side to the right of N. If you do not find an index
 * that fits these rules, then you will return -1.
 *
 * Note:
 * If you are given an array with multiple answers, return the
 * lowest correct index. An empty array should be treated like
 * a 0 in this problem.
 */

let assert = require('assert')

const findEvenIndex = array => {
  let leftSum  = 0
  let rightSum = 0
  for (let i = 0; i < array.length; i++) rightSum += array[i]
  for (let i = 0; i < array.length; i++) {
    rightSum -= array[i]
    if (leftSum === rightSum) return i
    leftSum += array[i]
  }
  return -1
}

// Using slice and reduce

const findEvenIndexTwo = array => {
  for (let i = 1; i < array.length - 1; i++) {
    if (array.slice(0, i).reduce((a, b) => a + b) === array.slice(i + 1).reduce((a, b) => a + b))
      return i
  }
  return -1
}

describe('Array', function() {
  describe('findEvenIndex()', function() {
    it('should return -1 when an even index cannot be found', function() {
      assert.equal(findEvenIndex([1,2,3,4,5,6]), -1)
    })
    it('should return the even index', function() {
      assert.equal(findEvenIndex([1,2,3,4,3,2,1]), 3)
      assert.equal(findEvenIndex([1,100,50,-51,1,1]), 1)
      assert.equal(findEvenIndex([20,10,30,10,10,15,35]), 3)
    })
  })
})
