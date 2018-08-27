'use strict';

function findType(arg) {
  return typeof arg;
}

function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function map(array, func) {
  let newArr = [];
  forEach(array, function (el) {
    newArr.push(func(el))
  });
  return newArr;
}

function filter(array, func) {
  let newArr = [];
  forEach(array, function (el) {
    if (func(el)) {
      newArr.push(func(el))
    }
  });
  return newArr;
}


console.log(filter([2, 5, 8], function(el) { return el > 3 }));
//console.log(findType(null)); // returns “object”