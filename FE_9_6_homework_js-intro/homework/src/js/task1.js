`use strict`;

const calcBtn = document.getElementById(`calculation`);
calcBtn.addEventListener(`click`, priceCalculation);

const promptAmount = `Please input your amount below`;
const alertAmount = `Please, enter a valid amount. It should be NUMBER greater than zero!`;
const promptDiscount = `Please enter your discount in percentage from 1 to 100`;
const alertDiscount = `Please, use only NUMBER in range from 1 to 100!`;

function getInputData(promptMessage, promptPlaceholder, alertMessage, indicator) {
  let inputNum = prompt(promptMessage, promptPlaceholder);
  while ((isNaN(+inputNum)) || (inputNum < 0) || (parseInt(inputNum, 10) === 0) ||
  (inputNum.length === 0) || (+inputNum > indicator)) {
    alert(alertMessage);
    inputNum = prompt(promptMessage, promptPlaceholder);
  }
  if (inputNum === null) {
  } else {
    return inputNum;
  }
}

function priceCalculation() {
  let amount = getInputData(promptAmount, 4950, alertAmount, Infinity);
  let discount = getInputData(promptDiscount, 30, alertDiscount, 100);
  let saved = (amount * discount) / 100;
  console.log(
    `Price without discount: ${parseInt(amount * 100) / 100}
\nDiscount: ${discount}
\nPrice with discount: ${parseInt((amount - saved) * 100) / 100}
\nSaved: ${parseInt(saved * 100) / 100}`
  );
}