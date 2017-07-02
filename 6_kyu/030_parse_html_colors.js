/**
 * 030_parse_html_colors.js
 * https://www.codewars.com/kata/parse-html-slash-css-colors
 *
 * Sjaak van den Berg
 * https://www.twitter.com/svdb
 */

/**
 * In this kata you parse RGB colors represented by strings.
 * The formats are primarily used in HTML and CSS. Your task
 * is to implement a function which takes a color as a string
 * and returns the parsed color as a map (see Examples).
 *
 * Input:
 * The input string represents one of the following:
 * 6-digit hexadecimal - "#RRGGBB"
 * e.g. "#012345", "#789abc", "#FFA077"
 *
 * Each pair of digits represents a value of the channel in
 * hexadecimal: 00 to FF
 * 3-digit hexadecimal - "#RGB"
 * e.g. "#012", "#aaa", "#F5A"
 *
 * Each digit represents a value 0 to F which translates to
 * 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.
 *
 * Preset color name
 * e.g. "red", "BLUE", "LimeGreen"
 *
 * You have to use the predefined map PRESET_COLORS. The
 * keys are the names of preset colors in lower-case and the
 * values are the corresponding colors in 6-digit hexadecimal
 * (same as 1. "#RRGGBB").
 *
 * Examples:
 * parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }
 * parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }
 * parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }
 */

let assert = require('assert')

const PRESET_COLORS = {
  aliceblue: '#f0f8ff', antiquewhite: '#faebd7', aqua: '#00ffff',
  aquamarine: '#7fffd4', azure: '#f0ffff', beige: '#f5f5dc',
  bisque: '#ffe4c4', black: '#000000', blanchedalmond: '#ffebcd',
  blue: '#0000ff', blueviolet: '#8a2be2', brown: '#a52a2a',
  burlywood: '#deb887', cadetblue: '#5f9ea0', chartreuse: '#7fff00',
  chocolate: '#d2691e', coral: '#ff7f50', cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc', crimson: '#dc143c', cyan: '#00ffff',
  darkblue: '#00008b', darkcyan: '#008b8b', darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9', darkgrey: '#a9a9a9', darkgreen: '#006400',
  darkkhaki: '#bdb76b', darkmagenta: '#8b008b', darkolivegreen: '#556b2f',
  darkorange: '#ff8c00', darkorchid: '#9932cc', darkred: '#8b0000',
  darksalmon: '#e9967a', darkseagreen: '#8fbc8f', darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f', darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1', darkviolet: '#9400d3', deeppink: '#ff1493',
  deepskyblue: '#00bfff', dimgray: '#696969', dimgrey: '#696969',
  dodgerblue: '#1e90ff', firebrick: '#b22222', floralwhite: '#fffaf0',
  forestgreen: '#228b22', fuchsia: '#ff00ff', gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff', gold: '#ffd700', goldenrod: '#daa520',
  gray: '#808080', grey: '#808080', green: '#008000', greenyellow: '#adff2f',
  honeydew: '#f0fff0', hotpink: '#ff69b4', indianred: '#cd5c5c',
  indigo: '#4b0082', ivory: '#fffff0', khaki: '#f0e68c', lavender: '#e6e6fa',
  lavenderblush: '#fff0f5', lawngreen: '#7cfc00', lemonchiffon: '#fffacd',
  lightblue: '#add8e6', lightcoral: '#f08080', lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2', lightgray: '#d3d3d3', lightgrey: '#d3d3d3',
  lightgreen: '#90ee90', lightpink: '#ffb6c1', lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa', lightskyblue: '#87cefa',
  lightslategray: '#778899', lightslategrey: '#778899',
  lightsteelblue: '#b0c4de', lightyellow: '#ffffe0', lime: '#00ff00',
  limegreen: '#32cd32', linen: '#faf0e6', magenta: '#ff00ff',
  maroon: '#800000', mediumaquamarine: '#66cdaa', mediumblue: '#0000cd',
  mediumorchid: '#ba55d3', mediumpurple: '#9370db', mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee', mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc', mediumvioletred: '#c71585',
  midnightblue: '#191970', mintcream: '#f5fffa', mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5', navajowhite: '#ffdead', navy: '#000080',
  oldlace: '#fdf5e6', olive: '#808000', olivedrab: '#6b8e23',
  orange: '#ffa500', orangered: '#ff4500', orchid: '#da70d6',
  palegoldenrod: '#eee8aa', palegreen: '#98fb98', paleturquoise: '#afeeee',
  palevioletred: '#db7093', papayawhip: '#ffefd5', peachpuff: '#ffdab9',
  peru: '#cd853f', pink: '#ffc0cb', plum: '#dda0dd', powderblue: '#b0e0e6',
  purple: '#800080', rebeccapurple: '#663399', red: '#ff0000',
  rosybrown: '#bc8f8f', royalblue: '#4169e1', saddlebrown: '#8b4513',
  salmon: '#fa8072', sandybrown: '#f4a460', seagreen: '#2e8b57',
  seashell: '#fff5ee', sienna: '#a0522d', silver: '#c0c0c0',
  skyblue: '#87ceeb', slateblue: '#6a5acd', slategray: '#708090',
  slategrey: '#708090', snow: '#fffafa', springgreen: '#00ff7f',
  steelblue: '#4682b4', tan: '#d2b48c', teal: '#008080', thistle: '#d8bfd8',
  tomato: '#ff6347', turquoise: '#40e0d0', violet: '#ee82ee',
  wheat: '#f5deb3', white: '#ffffff', whitesmoke: '#f5f5f5',
  yellow: '#ffff00', yellowgreen: '#9acd32'
}

const parseHTMLColor = color => {
  let hex = color.toLowerCase()
  let rgb = []
  for (let key in PRESET_COLORS)
    if (key === color.toLowerCase())
      hex = PRESET_COLORS[key]
  if (hex.length < 5) rgb.push(hex[1] + hex[1], hex[2] + hex[2], hex[3] + hex[3])
  else rgb.push(hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7))
  rgb = rgb.map(hex => parseInt(hex, 16))
  return { r: rgb[0], g: rgb[1], b: rgb[2] }
}

// Using regex

const parseHTMLColorRegex = c => {
  if (!c.match("#")) c = PRESET_COLORS[c.toLowerCase()]
  c = c.replace('#', '')
  if (c.length < 6) c = c.replace(/(.)/g, "$1$1")
  return {
    r: parseInt(c.substring(0, 2), 16),
    g: parseInt(c.substring(2, 4), 16),
    b: parseInt(c.substring(4, 6), 16)
  }
}

// Tests

describe('color', function() {
  describe('#parseHTMLColor()', function() {
    it('should return { r: 128, g: 255, b: 160 }', function() {
      assert.deepEqual(parseHTMLColor('#80FFA0'), { r: 128, g: 255, b: 160 })
    })
    it('should return { r: 51, g: 187, b: 119 }', function() {
      assert.deepEqual(parseHTMLColor('#3B7'), { r: 51, g: 187, b: 119 })
    })
    it('should return { r: 128, g: 255, b: 160 }', function() {
      assert.deepEqual(parseHTMLColor('LimeGreen'), { r: 50, g: 205, b: 50 })
    })
  })
})
