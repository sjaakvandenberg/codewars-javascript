/**
 * 015_closures_and_scopes.js
 * http://www.codewars.com/kata/closures-and-scopes
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * We want to create a function, which returns an array of functions, which
 * return their index in the array. For better understanding, here an example:
 * var callbacks = createFunctions(5); // create array, containing 5 functions
 * callbacks[0](); // must return 0
 * callbacks[3](); // must return 3
 * Fix the code.
 */

function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) (function(i) {
    callbacks.push(function() {
      return i;
    });
  })(i);

  return callbacks;
}

// Alternatives

function createFunctions(n) {
  var callbacks = [];

  function factory(x) {
    return function() {
      return x;
    };
  };

  for (var i = 0; i < n; i++) {
    callbacks.push(factory(i));
  }

  return callbacks;
}
