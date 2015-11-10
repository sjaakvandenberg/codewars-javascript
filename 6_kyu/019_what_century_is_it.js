/**
 * 019_what_century_is_it.js
 * http://www.codewars.com/kata/what-century-is-it
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Return the inputted numerical year in century format. For example 2014,
 * would return `21st`. The input will always be a 4 digit string. So there is
 * no need for year string validation.
 */

function whatCentury(year) {
  var century = String(Math.ceil(year / 100));
  if (century[century.length - 2] === '1') return century + 'th';
  else if (century[century.length - 1] === '1') return century + 'st';
  else if (century[century.length - 1] === '2') return century + 'nd';
  else if (century[century.length - 1] === '3') return century + 'rd';
  else return century + 'th';
}

// Alternative

function whatCentury2(year) {
  var century = Math.ceil(year / 100);
  var suffix = ['th', 'st', 'nd', 'rd'];
  if (Math.floor(century / 10) === 1) return century + suffix[0];
  return century + (suffix[century % 10] ? suffix[century % 10] : suffix[0]);
}

whatCentury(5);    // 1st
whatCentury(835);  // 9th
whatCentury(1124); // 12th
whatCentury(1234); // 13th
whatCentury(1999); // 20th
whatCentury(2000); // 20th
whatCentury(2011); // 21st
whatCentury(2154); // 22nd
whatCentury(2259); // 23rd
