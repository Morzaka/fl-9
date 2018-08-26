const minusOne = -1;

function reverseNumber (someNum) {
  let num = someNum.toString();
  let reversNum = '';
  for (let i = num.length + minusOne; i >= 0; i--) {
    reversNum += num[i];
  }
  reversNum = reversNum[reversNum.length + minusOne] === '-' ? '-' + reversNum.slice(0, minusOne) : reversNum;
  return +reversNum;
}

console.log(reverseNumber(1000));