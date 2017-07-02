/**
 * 027_duck_duck_goose.js
 * http://www.codewars.com/kata/last
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Given an array of Player objects and an index (1-based),
 * return the name of the chosen Player.
 */

const duckDuckGoose = (p, g) => p[(g - 1) % p.length].name

// Tests

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = [ "a", "b", "c", "d", "c", "e", "f", "g", "h", "z" ]
let players = ex_names.map((n) => new Player(n))

console.log(duckDuckGoose(players, 1))  // a
console.log(duckDuckGoose(players, 3))  // c
console.log(duckDuckGoose(players, 10)) // z
console.log(duckDuckGoose(players, 20)) // z
console.log(duckDuckGoose(players, 30)) // z
console.log(duckDuckGoose(players, 18)) // g
console.log(duckDuckGoose(players, 28)) // g
console.log(duckDuckGoose(players, 12)) // b
console.log(duckDuckGoose(players, 2))  // b
console.log(duckDuckGoose(players, 7))  // f
