/**
 * 021_write_javascripts_call_function_using_apply.js
 * http://www.codewars.com/kata/write-javascripts-call-function-using-apply
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Imagine JavaScript didn't natively include the call function. The apply
 * function however, still exists.
 *
 * Using apply, write call.
 */

Function.prototype.call = function() {
  var args = [].slice.apply(arguments, [1]);
  return this.apply(arguments[0], args);
};
