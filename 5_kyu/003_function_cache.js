/**
 * 003_function_cache.js
 * http://www.codewars.com/kata/function-cache
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * If you are calculating complex things or execute time-consuming API calls,
 * you sometimes want to cache the results. In this case we want you to create
 * a function wrapper, which takes a function and caches its results depending
 * on the arguments, that were applied to the function.
 *
 * var complexFunction = function(arg1, arg2) { // complex calc in here };
 * var cachedFunction = cache(complexFunction);
 *
 * cachedFunction('foo', 'bar'); // complex function should be executed
 * cachedFunction('foo', 'bar'); // cached result should be returned
 * cachedFunction('foo', 'baz'); // should be executed, because the method
 * wasn't invoked before with these arguments
 */

function cache(fn) {
  var cached = {};
  return function() {
    var args = JSON.stringify(arguments);
    if (!(args in cached)) {
      cached[args] = fn.apply(null, arguments);
    }

    return cached[args];
  };
}
