/**
 * 002_tribonacci_sequence.js
 * http://www.codewars.com/kata/tribonacci-sequence
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * As the name may already reveal, it works basically like a Fibonacci, but
 * summing the last 3 (instead of 2) numbers of the sequence to generate the
 * next. And, worse part of it, regrettably I won't get to hear non-native
 * Italian speakers trying to pronounce it :(
 *
 * So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting
 * input (AKA signature), we have this sequence:
 *
 * [1, 1, 1, 3, 5, 9, 17, 31, ...]
 *
 * But what if we started with [0, 0, 1] as a signature? As starting with
 * [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by
 * once place, you may be tempted to think that we would get the same sequence
 * shifted by 2 places, but that is not the case and we would get:
 *
 * [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
 *
 * Well, you may have guessed it by now, but to be clear: you need to create a
 * fibonacci function that given a signature array/list, returns the first n
 * elements - signature included of the so seeded sequence.
 *
 * Signature will always contain 3 numbers; n will always be a non-negative
 * number; be ready for anything else which is not clearly specified ;)
 */

function tribonacci(sig, n) {
  var arr = [];
  arr.unshift(sig[0], sig[1], sig[2]);
  for (var i = 0; i < n; i++) {
    arr[i + 3] = arr[i + 2] + arr[i + 1] + arr[i];
  }

  return arr.slice(0, n);
}

// Alternatives

function tribonacci2(sig, n) {
  for (var i = 0; i < n - 3; i++) {
    sig.push(sig[i] + sig[i + 1] + sig[i + 2]);
  }

  return sig.slice(0, n);
}

tribonacci([1, 1, 1], 9); // [1, 1, 1, 3, 5, 9, 17, 31, 57]
tribonacci([0, 0, 1], 9); // [0, 0, 1, 1, 2, 4, 7, 13, 24]
tribonacci([0, 1, 1], 9); // [0, 1, 1, 2, 4, 7, 13, 24, 44]
tribonacci([1, 0, 1], 9); // [1, 0, 1, 2, 3, 6, 11, 20, 37]
