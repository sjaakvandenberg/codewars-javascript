/**
 * 017_basic_js_calculating_averages.js
 * http://www.codewars.com/kata/basic-js-calculating-averages
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Let's build a calculator that can calculate the average for an arbitrary
 * number of arguments. The test expects you to provide a Calculator object
 * with an average method:
 * Calculator.average();
 * The test also expects that when you pass no arguments, it returns 0. The
 * arguments are expected to be integers.
 *
 * It expects Calculator.average(3,4,5) to return 4.
 */

var Calculator = {
  average: function() {
    var sum = 0;
    if (arguments.length === 0) return 0;
    for (var i = 0; i < arguments.length; i++) { sum += arguments[i]; }
    return sum / arguments.length;
  },
};

Calculator.average(3, 4, 5);        // 4
Calculator.average(10, 40, 25, 25); // 25
Calculator.average();               // 0
