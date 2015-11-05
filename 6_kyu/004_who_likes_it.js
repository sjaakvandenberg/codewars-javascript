/**
 * 004_who_likes_it.js
 * http://www.codewars.com/kata/who-likes-it
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * You probably know the 'like' system from Facebook and other pages. People
 * can 'like' blog posts, pictures or other items. We want to create the text
 * that should be displayed next to such an item.
 *
 * Implement a function `likes :: [String] -> String`, which must take in input
 * array, containing the names of people who like an item. It must return the
 * display text as shown in the examples:
 */

function likes(arr) {
  if (arr.length === 0) { return `no one likes this`; };
  if (arr.length === 1) { return `${arr[0]} likes this`; };
  if (arr.length === 2) { return `${arr[0]} and ${arr[1]} like this`; };
  if (arr.length === 3) { return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`; };
  return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
}

// Alternative

function likes2(arr) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this',
  ];
  var i = Math.min(names.length, 4);

  return templates[i].replace(/{name}|{n}/g, function(val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}

likes([]);                                // no one likes this
likes(['Peter']);                         // Peter likes this
likes(['Jacob', 'Alex']);                 // Jacob and Alex like this
likes(['Max', 'John', 'Mark']);           // Max, John and Mark like this
likes(['Alex', 'Jacob', 'Mark', 'Max']);  // Alex, Jacob and 2 others like this
