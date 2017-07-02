/**
 * 026_string_repeat.js
 * http://www.codewars.com/kata/last
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a function called repeatStr
 * which repeats the given string string exactly n times.
 */

const repeatStr = (n, s) => {
  let str = []
  for (let i = 0; i < n; i++) str.push(s)
  return str.join('')
}

// Simpler
const repeatStr = (n, s) => s.repeat(n)

console.log(repeatStr(6, "I"))     // IIIIII
console.log(repeatStr(5, "Hello")) // HelloHelloHelloHelloHello
