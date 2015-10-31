/**
 * 007_regular_ball_super_ball.js
 * http://www.codewars.com/kata/regular-ball-super-ball
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Create a class Ball.
 *
 * Ball objects should accept one argument for "ball type" when instantiated.
 * If no arguments are given, ball objects should instantiate with a ball type
 * of "regular."
 */

function Ball(ballType) {
  !ballType ? this.ballType = 'regular' : this.ballType = ballType;
};

// Alternative

function Ball2(ballType) {
  this.ballType = ballType || 'regular';
};

var ball1 = new Ball();
var ball2 = new Ball('mega');
ball1.ballType; // 'regular'
ball2.ballType; // 'mega'
