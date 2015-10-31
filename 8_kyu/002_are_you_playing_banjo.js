/**
 * 002_are_you_playing_banjo.js
 * http://www.codewars.com/kata/are-you-playing-banjo
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Create a function which answers the question "Are you playing Banjo?".
 * If your name starts with the letter "R" or lower case "r", you are playing
 * Banjo!
 *
 * The function takes a name as its only argument, and returns one of the
 * following strings:
 *
 * `C# name + "plays banjo" name + "does not play banjo"`
 *
 * Names given are always valid strings.
 */

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

areYouPlayingBanjo('ralph'); // 'ralph plays banjo'
areYouPlayingBanjo('Ralph'); // 'Ralph plays banjo'
areYouPlayingBanjo('Dolph'); // 'Dolph does not play banjo'
