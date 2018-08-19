`use strict`;

const calcBtn = document.getElementById(`calculation`);
calcBtn.addEventListener(`click`, priceCalculation);

const promptAmount = `Please input your amount below`;
const alertAmount = `Please, enter a valid amount. It should be NUMBER greater than zero!`;
const promptDiscount = `Please enter your discount in percentage from 1 to 100`;
const alertDiscount = `Please, use only NUMBER in range from 1 to 100!`;

function getInputData(promptMessage, alertMessage, indicator) {
  let inputNum = prompt(promptMessage);
  while (isNaN(+inputNum) || inputNum < 0 || parseInt(inputNum, 10) === 0 || inputNum.length === 0
  || +inputNum > indicator) {
    alert(alertMessage);
    inputNum = prompt(promptMessage);
  }
  return inputNum;
}

function round(num) {
  return parseInt(num * 100) / 100;
}

function priceCalculation() {
  let amount = getInputData(promptAmount, alertAmount, Infinity);
  let discount = getInputData(promptDiscount, alertDiscount, 100);
  let saved = amount * discount / 100;
  let withDiscount = amount - saved;
  console.log(
    `Price without discount: ${round(amount)}
\nDiscount: ${discount}
\nPrice with discount: ${round(withDiscount)}
\nSaved: ${round(saved)}`
  );
}