/**
 * 006_palindrome_for_your_dome.js
 * http://www.codewars.com/kata/palindrome-for-your-dome
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * A palindrome is a word, phrase, number, or other sequence of symbols or
 * elements, whose meaning may be interpreted the same way in either forward or
 * reverse direction. Famous examples include 'Amore, Roma', 'A man, a plan, a
 * canal: Panama' and 'No "x" in "Nixon"'. - wikipedia
 *
 * Our goal is to determine whether or not a given string is a valid palindrome
 * or not.
 *
 * Like the above examples, here are a few test cases which are also populated:
 *
 * 'Amore, Roma'                        => valid
 * 'A man, a plan, a canal: Panama'     => valid
 * 'No "x" in "Nixon"'                  => valid
 * "Abba Zabba, you're my only friend"  => invalid
 * You can see that they are case insensitive and disregards non alphanumeric
 * characters. In addition to a few predefined tests, your function will also
 * be tested against a random string generator 50 times which are guaranteed to
 * produce valid palindromes.
 *
 * NOTE: reverse() has been disabled for JS
 */

function palindrome(str) {
  var s = str.toLowerCase().replace(/\W/g, '');
  for (var i = 0; i < s.length / 2; i++) {
    return s[i] === s[s.length - i - 1];
  }
}

palindrome('Amore, Roma');                        // true
palindrome('A man, a plan, a canal: Panama');     // true
palindrome('No "x" in "Nixon"');                  // true
palindrome('Abba Zabba, you\'re my only friend'); // false
