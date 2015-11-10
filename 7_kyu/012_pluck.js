/**
 * 012_pluck.js
 * http://www.codewars.com/kata/pluck
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Implement pluck, which takes an array of objects and a property name, and
 * returns an array containing the named property of each object.
 */

function pluck(objects, name) {
  return objects.map(function(object) { return object[name]; });
}

pluck([{a:1}, {a:2}], 'a'); // [1, 2]
