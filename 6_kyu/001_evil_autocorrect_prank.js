/**
 * 001_evil_autocorrect_prank.js
 * http://www.codewars.com/kata/evil-autocorrect-prank/train/javascript
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Your friend won't stop texting his girlfriend. It's all he does. All day.
 * Seriously. The texts are so mushy too! The whole situation just makes you
 * feel ill. Being the wonderful friend that you are, you hatch an evil plot.
 * While he's sleeping, you take his phone and change the autocorrect options
 * so that every time he types "you" or "u" it gets changed to "your sister".
 *
 * Write a function called `autocorrect` that takes a string and replaces all
 * instances of `you` or `u` (not case sensitive) with `your sister` (always
 * lower case).
 *
 * Return the resulting string.
 *
 * Here's the slightly tricky part: These are text messages, so there are
 * different forms of "you" and "u".
 *
 * For the purposes of this kata, here's what you need to support:
 * - "youuuuu" with any number of u characters tacked onto the end
 * - "u" at the beginning, middle, or end of a string, but NOT part of a word
 * - "you" but NOT as part of another word like youtube or bayou
 */

function autocorrect(input) {
  var re = /^(you+|u)(?!\w)/i;
  return input.split(' ')
    .map(function(word) { return word.replace(re, 'your sister'); })
    .join(' ');
}

// Alternatives

function autocorrect2(input) {
  return input.replace(/\b((u)|(you+))\b/ig, 'your sister');
}

autocorrect('I visited youtube.');          // I visited youtube.
autocorrect('I visited you.');              // I visited your sister
autocorrect('I visited u.');                // I visited your sister
autocorrect('U visited me.');               // your sister visited me.
autocorrect('U visited you.');              // your sister visited your sister.
autocorrect('U visited youtube.');          // your sister visited youtube.
autocorrect('I said U are nice.');          // I said your sister are nice.
autocorrect('I said u are nice.');          // I said your sister are nice.
autocorrect('I said you are nice.');        // I said your sister are nice.
autocorrect('I said your sister is nice.'); // I said your sister is nice.
autocorrect('You\'re pretty nice.');        // your sister're pretty nice.
autocorrect('You are pretty nice.');        // your sister are pretty nice.
