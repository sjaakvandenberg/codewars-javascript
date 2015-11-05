/**
 * 014_the_range_function.js
 * http://www.codewars.com/kata/the-range-function
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Let's implement the range function:
 * range([start], end, [step])
 * - start defaults to 0
 * - step defaults to 1
 * - ranges that stop before they start are considered to be zero-length
 */

function range(start, end, step) {
  if (end === undefined) {
    end = start || 0; start = 0;
  }

  step = isNaN(step) ? 1 : step;
  var size = Math.ceil((end - start) / (step || 1));
  var result = [];
  for (var i = 0; i < size; i++) {
    result[i] = start + i * step;
  }

  return result;
}

// Alternatives

function range2(start, end, step) {
  var result = [];
  var a = arguments.length === 1 ? 0 : start;
  var b = arguments.length === 1 ? start : end;
  var c = step != void(0) ? step : 1;
  if (b < a) return result;
  for (var i = a; (step == 0 ? result.length + a : i) < b; i += c) {
    result.push(i);
  }

  return result;
}

function range3(start, end, step) {
  if (arguments.length === 1) return range(0, start, 1);
  if (arguments.length === 2) return range(start, end, 1);
  var result = [];
  for (var i = 0; i < (end - start) / (step || 1); i++) {
    result.push(start + (i * step));
  }

  return result;
}

range(1, 11);     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(1, 4, 0);   // [1, 1, 1]
range(0);         // []
range(10, 0);     // []
range(10);        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(0, 30, 5);  // [0, 5, 10, 15, 20, 25]
