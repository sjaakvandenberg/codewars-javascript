/**
 * 002_calculating_with_functions.js
 * http://www.codewars.com/kata/calculating-with-functions
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * This time we want to write calculations using functions and get the results.
 *
 * Requirements
 * ------------
 * There must be a function for each number from 0 ('zero') to 9 ('nine')
 * There must be a function for each of the following mathematical operations:
 * `plus`, `minus`, `times`, `dividedBy`
 * Each calculation consist of exactly one operation and two numbers
 * The most outer function represents the left operand, the most inner function
 * represents the right operand
 */

var functions = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine',
];

functions.forEach(function(name, n) {
  this[name] = function(op) { return op ? op(n) : n; };
});

function plus(b)      { return function(a) { return a + b; }; }
function minus(b)     { return function(a) { return a - b; }; }
function times(b)     { return function(a) { return a * b; }; }
function dividedBy(b) { return function(a) { return a / b; }; }

// Alternatives

var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  };
};

var zero  = n(0);
var one   = n(1);
var two   = n(2);
var three = n(3);
var four  = n(4);
var five  = n(5);
var six   = n(6);
var seven = n(7);
var eight = n(8);
var nine  = n(9);

function plus(r)      { return function(l) { return l + r; }; }
function minus(r)     { return function(l) { return l - r; }; }
function times(r)     { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

// ---

function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus(b)      { return function(a) { return a + b; }; };
function minus(b)     { return function(a) { return a - b; }; };
function times(b)     { return function(a) { return a * b; }; };
function dividedBy(b) { return function(a) { return a / b; }; };

// Using length of arguments

function template(n) {
  return function() {
    if (arguments.length > 0) { return arguments[0](n); }

    return n;
  };
}

var zero  = template(0);
var one   = template(1);
var two   = template(2);
var three = template(3);
var four  = template(4);
var five  = template(5);
var six   = template(6);
var seven = template(7);
var eight = template(8);
var nine  = template(9);

function plus(op)      { return function(n) { return n + op; }; }
function minus(op)     { return function(n) { return n - op; }; }
function times(op)     { return function(n) { return n * op; }; }
function dividedBy(op) { return function(n) { return n / op; }; }

// Output

seven(times(five()));  // 35
four(plus(nine()));    // 13
eight(minus(three())); // 5
six(dividedBy(two())); // 3
