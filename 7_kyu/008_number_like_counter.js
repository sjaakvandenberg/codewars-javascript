/**
 * 008_number_like_counter.js
 * http://www.codewars.com/kata/number-like-counter
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * You're going to implement a simple counter class. The counter will start at
 * zero, and every time its incr method is called, it will increase by 1.
 *
 * There's one caveat: Your counter must act like a number and support
 * arithmetic operations and comparisons.
 */

function Counter() {
  this.count = 0;
};

Counter.prototype.incr = function() {
  this.count++;
};

Counter.prototype.valueOf = function() {
  return this.count;
};

// Alternative in a single function

function Counter2() {
  this.count   = 0;
  this.incr    = function() { this.count++; };
  this.valueOf = function() { return this.count; };
};

var c = new Counter();
c + 1;        // 2
c > 1;        // false
c > 0;        // true
c == 0;       // true
Math.sqrt(c); // 1
