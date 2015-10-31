/**
 * 006_jenny_secret_message.js.js
 * http://www.codewars.com/kata/jennys-secret-message
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Jenny has written a function that returns a greeting for a user. However,
 * she's in love with Johnny, and would like to greet him slightly different.
 * She added a special case to her function, but she made a mistake.
 *
 * Can you help her?
 */

function greet(name) {
  if (name === 'Johnny') {
    return 'Hello, my love!';
  } else {
    return 'Hello, ' + name + '!';
  }
}

greet('Simon'); // Hello, Simon!
greet('Johnny'); // Hello, my love!
