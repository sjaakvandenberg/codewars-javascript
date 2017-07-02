/**
 * 022_query_string.js
 * http://www.codewars.com/kata/do-you-know-how-to-make-query-string
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * Write a function that converts an object to query string
 * toQueryString({ "bar": [ 2, 3 ], "foo": 1 }) # => "bar=2&bar=3&foo=1"
 */

const toQueryString = obj => {
  let strings = []
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      for (let subkey in obj[key])
        strings.push(`${key}=${obj[key][subkey]}`)
    } else strings.push(`${key}=${obj[key]}`)
  }
  return strings.join('&')
}

console.log(toQueryString({ foo: 1, bar: 2 })) // foo=1&bar=2
console.log(toQueryString({ foo: [1, 3], bar: [2, 4] })) // foo=1&foo=3&bar=2&bar=4
console.log(toQueryString({ a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' })) // a=Z&b=Y&c=X&d=W&e=V&f=U&g=T
