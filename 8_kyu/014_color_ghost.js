/**
 * 014_color_ghost.js
 * http://www.codewars.com/kata/color-ghost
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Create a class Ghost
 *
 * Ghost objects are instantiated without any arguments.
 *
 * Ghost objects are given a random color attribute of white" or "yellow" or
 * "purple" or "red" when instantiated.
 *
 * ghost = new Ghost();
 * ghost.color // => "white" or "yellow" or "purple" or "red"
 */

function Ghost() {
  var ghostColor = Math.random();
  if (ghostColor < 0.25)
    this.color = 'white';
  else if (ghostColor < 0.5)
    this.color = 'yellow';
  else if (ghostColor < 0.75)
    this.color = 'purple';
  else
    this.color = 'red';
}

// Alternative using array

function Ghost2() {
  var colors = ['white', 'yellow', 'purple', 'red'];
  var index  = Math.floor(Math.random() * colors.length);
  this.color = colors[index];
}

var ghost1 = new Ghost();
var ghost2 = new Ghost();
var ghost3 = new Ghost();
var ghost4 = new Ghost();

ghost1.color; // 'purple'
ghost2.color; // 'yellow'
ghost3.color; // 'white'
ghost4.color; // 'white'
