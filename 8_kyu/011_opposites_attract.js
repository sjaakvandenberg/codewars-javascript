/**
 * 011_opposites_attract.js
 * http://www.codewars.com/kata/opposites-attract
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Timmy & Sarah think they are in love, but around where they live, they will
 * only know once they pick a flower each. If one of the flowers has an even
 * number of petals and the other has an odd number of petals it means they are
 * in love.
 *
 * Write a function that will take the number of petals of each flower and
 * return true if they are in love and false if they aren't.
 */

function lovefunc(t, s) {
  if (t % 2 == 0) { // timmy has an even number
    if (s % 2 == 1) // sarah has an odd number
      return true;  // they're in love
    else            // otherwise sarah also has an even number
      return false; // they're not in love
  } else {          // timmy has an odd number
    if (s % 2 == 0) // sarah has an even number
      return true;  // they're in love
    else            // otherwise sarah also has an odd number
      return false; // they're not in love
  }
}

// Alternative

function lovefunc2(t, s) {
  return t % 2 !== s % 2;
}

function lovefunc3(t, s) {
  return (t + s) % 2 === 1;
}

lovefunc(2, 2); // false
lovefunc(2, 1); // true
lovefunc(1, 1); // false
lovefunc(1, 2); // true
