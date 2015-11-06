/**
 * 017_extract_the_ids_from_the_data_set.js
 * http://www.codewars.com/kata/extract-the-ids-from-the-data-set
 *
 * Sjaak van den Berg
 * @svdb
 */

/**
 * Complete the method so that it returns an array of all ID's passed in. The
 * data structure will be similar to the following:
 *
 * var data = {
 *   id: 1,
 *   items: [
 *     {id: 2},
 *     {id: 3, items: [
 *       {id: 4},
 *       {id: 5}
 *     ]}
 *   ]
 * }
 *
 * extractIds(data) // should return [1, 2, 3, 4, 5]
 * The method should be able to handle the case of empty data being passed in.
 *
 * Note: The only arrays that need to be traversed are those assigned to the
 * "items" property.
 */

var data = {
  id: 1,
  items: [
   { id: 2 },
   { id: 3, items: [
     { id: 4 },
     { id: 5 },
   ], },
 ],
};

function extractIds(data) {
  return [].concat.apply([], Object.keys(data).map(function(item) {
    return item === 'id' ? data[item] : extractIds(data[item]);
  }));
}

// Alternatives

function extractIds2(data) {
  var id       = undefined == data.id    ? [] : [data.id];
  var children = undefined == data.items ? [] : data.items;
  return Array.prototype.concat.apply(id, children.map(extractIds2));
}

function extractIds3(data) {
  return Array.prototype.concat.apply([], Object.keys(data).map(function(key) {
    if (key === 'id') return [data[key]];
    else return extractIds3(data[key]);
  }));
}

function extractIds4(data) {
  var results = [];
  for (var i in data) {
    if (i === 'id') {
      results.push(data.id);
    } else if (i === 'items') {
      data[i].forEach(function(e) {
        results = results.concat(extractIds4(e));
      });
    }
  }

  return results;
}

// ES6

let extractIds = data => JSON.stringify(data) === '{}' ? [] : JSON.stringify(data).match(/\d+/g).map(e => +e);

extractIds(data); // [1,2,3,4,5]
