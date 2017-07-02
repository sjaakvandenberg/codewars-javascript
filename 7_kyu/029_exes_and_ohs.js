/**
 * 029_exes_and_ohs.js
 * https://www.codewars.com/kata/exes-and-ohs
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Check to see if a string has the same amount of 'x's and 'o's.
 * The method must return a boolean and be case insensitive.
 * The string can contains any char.
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 */

const XO = str => {
  let s = str.toLowerCase()
  if (s.indexOf('x') === -1 && s.indexOf('o') === -1) return true
  else return s.split('o').length === s.split('x').length
}

// With regex

const XO = str => {
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  return (x && x.length) === (o && o.length)
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))
console.log(XO('abc'))
