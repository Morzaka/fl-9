'use strict';

function getClosetToZero() {
  let minNumber;
  for (let i = 1; i < arguments.length; i++ ){
    if(Math.abs(arguments[i]) < arguments[0]) {
      minNumber = arguments[i];
    }
  }
  return minNumber;
}