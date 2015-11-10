/**
 * 008_the_if_function.js
 * http://www.codewars.com/kata/the-if-function
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Who likes keywords? Nobody likes keywords, so why use them?
 *
 * You know what keyword I use too much? `if`! We should make a function called
 * `_if`, with its arguments as a logical test and two functions/lambdas where
 * the first function is executed if the boolean is true, and the second if
 * it's false, like an if/else statement, so that we don't have to mess around
 * with those nasty keywords! Even so, It should support truthy/falsy types
 * just like the keyword.
 *
 * _if(true, function(){console.log('True')},function(){console.log('false')});
 */

function _if(bool, func1, func2) {
  bool ? func1() : func2();
}

_if(true,
function() {
  console.log('Y');
},

function() {
  console.log('N');
});  // Y

_if(false,
function() {
  console.log('Y');
},

function() {
  console.log('N');
}); // N

_if(2 > 1,
function() {
  console.log('Y');
},

function() {
  console.log('N');
}); // Y

_if(2 < 1,
function() {
  console.log('Y');
},

function() {
  console.log('N');
}); // N
