/**
 * 010_this_is_a_problem.js
 * http://www.codewars.com/kata/this-is-a-problem
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * We want to create a constructor function 'NameMe', which takes first name
 * and last name as parameters. The function combines the first and last names
 * and saves the value in "name" property.
 *
 * We already implemented that function, but when we actually run the code, the
 * "name" property is accessible, but the "firstName" and "lastName" is not
 * accessible. All the properties should be accessible. Can you find what's
 * wrong with it?
 */

function NameMe(first, last) {
  this.firstName = first;
  this.lastName  = last;
  this.name      = this.firstName + ' ' + this.lastName;
}

var n = new NameMe('John', 'Hancock');
n.firstName;  // 'John'
n.lastName;   // 'Hancock'
n.name;       // 'John Hancock'
