/**
 * 020_anonymous_returns.js
 * http://www.codewars.com/kata/anonymous_returns
 *
 * Sjaak van den Berg
 * @svdb
 */

name = 'The Window';

var alpha = {
  name: 'My Alpha',
  getNameFunc: function() {
    var _this = this;
    return function() {
      return _this.name;
    };
  },
};

// Alternatives

var alpha2 = {
  name: 'My Alpha',
  getNameFunc: function() {
    return function() {
      return this.name;
    }.bind(this);
  },
};

alpha.getNameFunc()(); // 'My Alpha'
