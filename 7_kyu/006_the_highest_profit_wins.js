/**
 * 006_the_highest_profit_wins.js
 * http://www.codewars.com/kata/the-highest-profit-wins
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Ben has a very simple idea to make some profit: he buys something and sells
 * it again. Of course, this wouldn't give him any profit at all if he was
 * simply to buy and sell it at the same price. Instead, he's going to buy it
 * for the lowest possible price and sell it at the highest.
 *
 * Write a function that returns both the minimum and maximum number of the
 * given list/array.
 *
 * minMax([1,2,3,4,5])   == [1,5]
 * minMax([2334454,5])   == [5, 2334454]
 * minMax([1])           == [1, 1]
 */

function minMax(arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min)
      min = arr[i];
    else if (arr[i] > max)
      max = arr[i];
  }

  return [min, max];
}

// Alternative using Math

function minMax2(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  return [min, max];
}

minMax([4, 5, 6, 7, 8]); // [4, 8]
minMax([8, 7, 6, 5, 4]); // [4, 8]
minMax([-3, 55, -4, 9]); // [-4, 55]
minMax([-3.75, 9.1, 4]); // [-3.75, 9.1]
