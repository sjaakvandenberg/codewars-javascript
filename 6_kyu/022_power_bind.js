/**
 * 022_power_bind.js
 * http://www.codewars.com/kata/power-bind
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * You probably know about `Function.prototype.bind` method in JavaScript. It
 * returns a copy of the original function but this function will always be
 * called in the specified context. The problem is that you can't rebind
 * another context any more.
 *
 * var func = function () { return this.prop; };
 * var obj1 = { prop: 1 };
 * var obj2 = { prop: 2 };
 *
 * func = func.bind(obj1);
 * func(); // 1
 * func = func.bind(obj2);
 * func(); // should return 2
 *
 * Your task is override the native `Function.prototype.bind` method by a new
 * one that will allow you to rebind context multiple times. In this kata you
 * don't need to worry about currying, testing function will never get params.
 */

Function.prototype.bind = function(context) {
  var ret = function() {
    return ret._fn.call(context);
  };

  ret._fn = this._fn || this;
  return ret;
};

// Alternative

Function.prototype.bind2 = function(context) {
  var _this = this;
  var bound = function() {
    return _this.apply(context, [].slice.call(arguments, 1));
  };

  bound.bind = function(context) { return _this.bind(context); };

  return bound;
};
