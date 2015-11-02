/**
 * 011_multiply_characters.js
 * http://www.codewars.com/kata/multiply-characters
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Here we have a function that help us spam our hearty laughter. But it's not
 * working! I need you to find out why...
 */

function spam(n) {
  var laughter = '';
  for (var i = 0; i < n; i++) {
    laughter += 'hue';
  }

  return laughter;
}

// Alternative using while loop

function spam2(n) {
  var laughter = '';
  var i = 0;
  while (i < n) {
    laughter += 'hue';
    i++;
  }

  return laughter;
}

// Using Array and join

function spam3(n) {
  return Array(++n).join('hue');
}

spam(1);  // hue
spam(6);  // huehuehuehuehuehue
spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue
