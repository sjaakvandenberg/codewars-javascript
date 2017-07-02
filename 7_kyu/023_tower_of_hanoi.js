/**
 * 023_tower_of_hanoi.js
 * http://www.codewars.com/kata/tower-of-hanoi-3
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * The Tower of Hanoi problem involves 3 towers. A number of rings
 * decreasing in size are placed on one tower. All rings must then
 * be moved to another tower, but at no point can a larger ring be
 * placed on a smaller ring.
 *
 * Your task: Given a number of rings, return the MINIMUM number of
 * moves needed to move all the rings from one tower to another.
 */

/**
 * 2^n - 1
 * Rings  1 2 3 4  5
 * Moves  1 3 7 15 31
 *
 * 100 001
 *
 * 100 000 000 001
 * 200 210 012 002
 *
 * 100 000 000 000 000 000 000 001
 * 200 200 000 010 010 000 002 002
 * 300 301 321 320 023 123 103 003
 *
 * 100 000 000 000 000 000 000 000 000 000 000 000 000 000 000 001
 * 200 200 000 000 000 000 000 010 010 000 000 000 000 000 002 002
 * 300 300 300 301 001 100 120 020 020 021 001 100 103 003 003 003
 * 400 410 412 402 432 432 430 430 034 034 234 234 204 214 014 004
 */

const towerOfHanoi = rings => Math.pow(2, rings) - 1

// Tests

console.log(towerOfHanoi(4))  // 15
console.log(towerOfHanoi(5))  // 31
console.log(towerOfHanoi(10)) // 1024
console.log(towerOfHanoi(50)) // 1125899906842623
