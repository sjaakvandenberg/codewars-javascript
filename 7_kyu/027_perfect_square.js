/**
 * 027_perfect_square.js
 * https://www.codewars.com/kata/find-the-next-perfect-square
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * You might know some pretty large perfect squares.
 * But what about the NEXT one?
 *
 * Complete the findNextSquare method that finds the
 * next integral perfect square after the one passed as
 * a parameter. Recall that an integral perfect square is
 * an integer n such that sqrt(n) is also an integer.
 *
 * If the parameter is itself not a perfect square, than -1
 * should be returned. You may assume the parameter is positive.
 */

const findNextSquare = n => (Number.isInteger(Math.sqrt(n))) ? (Math.sqrt(n) + 1) ** 2 : -1

// Tests

console.log(findNextSquare(121))          // 144
console.log(findNextSquare(625))          // 676
console.log(findNextSquare(319225))       // 320356
console.log(findNextSquare(15241383936))  // 15241630849
console.log(findNextSquare(155))          // -1
console.log(findNextSquare(342786627))    // -1
