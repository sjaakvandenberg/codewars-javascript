/**
 * 019_unpacking_arguments.js
 * http://www.codewars.com/kata/unpacking-arguments
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * You must create a function, spread, that takes a function and a list of
 * arguments to be applied to that function. You must make this function return
 * the result of calling the given function/lambda with the given arguments.
 *
 * spread(someFunction, [1, true, 'Foo', 'bar'])
 * is the same as someFunction(1, true, 'Foo', 'bar')
 */

function spread(func, args) {
  return func.apply(this, args);
}

spread(function(x, y) { return x + y; }, [1, 2]); // 3
