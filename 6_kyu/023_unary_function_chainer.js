/**
 * 023_unary_function_chainer.js
 * http://www.codewars.com/kata/unary-function-chainer
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Write a higher order function for chaining together a list of unary
 * functions. In other words, it should return a function that does a left fold
 * on the given functions.
 *
 * chained([a, b, c, d])(input) // yields the same input as
 * d(c(b(a(input))))
 */

function chained(functions) {
  return function(n) {
    functions.forEach(function(f) {
      n = f(n);
    });

    return n;
  };
}

// Alternative using reduce

function chained2(functions) {
  return function(input) {
    return functions.reduce(function(input, fn) { return fn(input); }, input);
  };
}

// Alternative using bind

function chained(functions) {
  return [].reduce.bind(functions, function(result, fn) {
    return fn(result);
  });
}

function f1(x) { return x * 2; }
function f2(x) { return x + 2; }
function f3(x) { return Math.pow(x, 2); }
function f4(x) { return x.split('').concat().reverse().join('').split(' '); }
function f5(x) { return x.concat().reverse(); }
function f6(x) { return x.join('_'); }

chained([f1, f2, f3])(0); // 4
chained([f1, f2, f3])(2); // 36
chained([f3, f2, f1])(2); // 12

chained([f4, f5, f6])('lorem ipsum'); // merol_muspi
