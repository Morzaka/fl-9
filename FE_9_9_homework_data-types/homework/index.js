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
  forEach(array, (el) => newArr.push(func(el)));
  return newArr;
}

function filter(array, func) {
  let newArr = [];
  forEach(array, (el) => {
    if (func(el)) {
      newArr.push(el)
    }
  });
  return newArr;
}

function getAdultAppleLovers(data) {
  let newArr = filter(data, el => el.age > 18 && el.favoriteFruit === 'apple');
  return map(newArr, el => el.name);
}

function keys(obj) {
  let arrayOfKeys = [];
  for (let key in obj) {
    if (key) {
      arrayOfKeys.push(key);
    }
  }
  return arrayOfKeys;
}

function values(obj) {
  let arrayOfValues = [];
  for (let key in obj) {
    if (key) {
      arrayOfValues.push(obj[key])
    }
  }
  return arrayOfValues;
}

function showFormattedDate(dateObj) {
  let locale = 'en-us';
  return `It is ${dateObj.getDate()} of ${dateObj.toLocaleString(locale, {month: 'short'})}, ${dateObj.getFullYear()}`;
}