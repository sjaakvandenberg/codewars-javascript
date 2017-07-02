/**
 * 025_sum_array.js
 * http://www.codewars.com/kata/last
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Sum all the numbers of the array except the highest and the lowest element
 * (the value, not the index!). (The highest/lowest element is respectively
 * only one element at each edge, even if there are more
 * than one with the same value!)
 *
 * If array is empty, null or None, or if only 1 Element exists, return 0.
 */

const sumArray = array => {
  if (!array) return 0
  let sorted = array.sort((a, b) => a - b)
  let sum = 0
  for (let i = 1; i < sorted.length - 1; i++) sum += sorted[i]
  return sum
}

// Shorter solution

const sumArrayTwo = array => (
  (array) ? array.sort((a, b) => a - b)
                 .slice(1, -1)
                 .reduce((s, n) => s + n, 0)
          : 0
)

console.log(sumArray(null))                       // 0
console.log(sumArray([ ]))                        // 0
console.log(sumArray([ 3 ]))                      // 0
console.log(sumArray([ 3, 5 ]))                   // 0
console.log(sumArray([ 6, 2, 1, 8, 10 ]))         // 16
console.log(sumArray([ 6, 0, 1, 10, 10 ]))        // 17
console.log(sumArray([ -6, -20, -1, -10, -12 ]))  // -28
console.log(sumArray([ -6, 20, -1, 10, -12 ]))    // 3

console.log(sumArrayTwo(null))                       // 0
console.log(sumArrayTwo([ ]))                        // 0
console.log(sumArrayTwo([ 3 ]))                      // 0
console.log(sumArrayTwo([ 3, 5 ]))                   // 0
console.log(sumArrayTwo([ 6, 2, 1, 8, 10 ]))         // 16
console.log(sumArrayTwo([ 6, 0, 1, 10, 10 ]))        // 17
console.log(sumArrayTwo([ -6, -20, -1, -10, -12 ]))  // -28
console.log(sumArrayTwo([ -6, 20, -1, 10, -12 ]))    // 3

