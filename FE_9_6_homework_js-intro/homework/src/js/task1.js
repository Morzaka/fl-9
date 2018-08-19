'use strict';

const calcBtn = document.getElementById('calculation');
calcBtn.addEventListener('click', priceCalculation);

function getInputData(promptMessage, promptPlaceholder, alertMessage, indicator) {
  let inputNum = prompt(promptMessage, promptPlaceholder);
  if ((isNaN(+inputNum)) || (inputNum < 0) || (parseInt(inputNum, 10) === 0) || +inputNum > indicator) {
    alert(alertMessage);
    getInputData();
  } else if (inputNum === null) {
  } else {
    return inputNum;
  }
}

function priceCalculation() {
  let amount = getInputData(`Please input your amount below`, 4950, `Please, enter a valid amount. It should be NUMBER greater than zero!`, Infinity);
  let discount = getInputData(`Please enter your discount in percentage from 1 to 100`, 30, 'Please, use only NUMBER in range from 1 to 100!', 100);
  let saved = (amount * discount) / 100;
  console.log(
    `Price without discount: ${amount}
\nDiscount: ${discount}
\nPrice with discount: ${amount - saved}
\nSaved: ${saved}`
  );
}