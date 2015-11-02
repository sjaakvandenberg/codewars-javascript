/**
 * 015_monotone_travel.js
 * http://www.codewars.com/kata/monotone-travel
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Peter lives on a hill, and he always moans about the way to his home. "It's
 * always just up. I never get a rest". But you're pretty sure that at least at
 * one point Peter's altitude doesn't rise, but fall. To get him, you use a
 * nefarious plan: you attach an altimeter to his backpack and you read the
 * data from his way back at the next day.
 *
 * You're given a list of compareable elements:
 * heights = [h1, h2, h3, ..., hn];
 *
 * Your job is to check whether for any `x` all successors are greater or equal
 * to `x`.
 *
 * If the list is empty, Peter has probably removed your altimeter, so we
 * cannot prove him wrong and he's still right:
 * isMonotone([])        == true;
 */

function isMonotone(arr) {
  var hits = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] - 1 || arr[i] === arr[i + 1])
      hits++;
  }

  return hits === arr.length - 1 || arr.length === 0;
}

// Alternatives

function isMonotone2(arr) {
  return arr.every(function(x, i) {
    return i === 0 ? true : arr[i] >= arr[i];
  });
}

function isMonotone3(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1])
      return false;
  }

  return true;
}

isMonotone([1, 2, 3]); // true
isMonotone([1, 1, 2]); // true
isMonotone([1]);       // true
isMonotone([]);        // true
isMonotone([3, 2, 1]); // false
isMonotone([3, 2, 2]); // false
