/**
 * 018_trim_a_string.js
 * http://www.codewars.com/kata/trim-a-string/train/javascript
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Extend the String prototype by a `trim` function, that returns the string
 * with leading or trailing whitespaces removed.
 */

String.prototype.trim = function() {
  return this.replace(/^\s+/, '').replace(/\s+$/, '');
};

// Alternative

String.prototype.trim2 = function() {
  return this.replace(/^\s+|\s+$/g, '');
};

'foo     '.trim(); // 'foo'
'     foo'.trim(); // 'foo'
'  foo   '.trim(); // 'foo'
'foo  bar'.trim(); // 'foo  bar'
'        '.trim(); // ''
