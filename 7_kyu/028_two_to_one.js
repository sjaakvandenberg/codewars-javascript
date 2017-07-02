/**
 * 028_two_to_one.js
 * https://www.codewars.com/kata/two-to-one
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Take 2 strings s1 and s2 including only letters
 * from a to z. Return a new sorted string, the
 * longest possible, containing distinct letters,
 * each taken only once - coming from s1 or s2.
 *
 * Examples:
 * a = "xyaabbbccccdefww"
 * b = "xxxxyyyyabklmopq"
 * longest(a, b) -> "abcdefklmopqwxy"
 *
 * a = "abcdefghijklmnopqrstuvwxyz"
 * longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

const longest = (a, b) => [...new Set(a + b)].sort().join('')

// Tests
console.log(longest("aretheyhere", "yestheyarehere")) // aehrsty
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // abcdefghilnoprstu
console.log(longest("inmanylanguages", "theresapairoffunctions")) // acefghilmnoprstuy
