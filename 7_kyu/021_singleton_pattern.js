/**
 * 021_singleton_pattern.js
 * http://www.codewars.com/kata/singleton-pattern
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * In software engineering, the singleton pattern is a design pattern that
 * restricts the instantiation of a class to one object. This is useful when
 * exactly one object is needed to coordinate actions across the system.
 *
 * Create an Singleton pattern, so there is one object in system.
 *
 * var obj1 = new Singleton();
 * var obj2 = new Singleton();
 * obj1 === obj2; // true
 * obj1.test = 1;
 * obj2.test; // 1
 */

var Singleton = (function() {
  var instance = null;
  return function() {
    return instance || (instance = this);
  };
})();

// Alternatives

var Singleton = function() {
  return Singleton.instance = Singleton.instance ? Singleton.instance : this;
};
