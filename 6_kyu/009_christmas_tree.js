/**
 * 009_christmas_tree.js
 * http://www.codewars.com/kata/christmas-tree
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Create a function `christmasTree(height)` that returns a christmas tree of
 * the correct height.
 *
 * `christmasTree(5)` should return:
 *      *
 *     ***
 *    *****
 *   *******
 *  *********
 *
 * Height passed is always an integer between 0 and 100. Use \n for newlines
 * between each line. Pad with spaces so each line is the same length. The last
 * line having only stars, no spaces.
 */

function christmasTree(height) {
  var tree = '';
  var spaces = Array(height).join(' ');

  for (var i = 0; i < height; i++) {
    var stars = Array((i * 2) + 2).join('*');
    if (tree !== '') tree += '\n';
    tree += spaces + stars + spaces;
    spaces = spaces.slice(0, -1);
  }

  return tree;
}

// Alternative

function christmasTree2(height) {
  var tree = [];
  for (var i = 1; i <= height; i++) {
    tree.push(
      ' '.repeat(height - i) +
      '*'.repeat((i - 1) * 2 + 1) +
      ' '.repeat(height - i)
    );
  }

  return tree.join('\n');
}

String.prototype.repeat = function(n) {
  return new Array(n + 1).join(this);
};

christmasTree(0); // ''
christmasTree(1); // '*'
christmasTree(2); // ' * \n***'
christmasTree(3); // '  *  \n *** \n*****'
christmasTree(4); // '   *   \n  ***  \n ***** \n*******'
