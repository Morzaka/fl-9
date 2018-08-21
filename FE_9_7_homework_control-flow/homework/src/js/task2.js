`use strict`;

const maxAttempts = 3;
let startGame = confirm(`Do you want to play a game?`);

if (!startGame) {
  alert(`You did not become a millionaire, but can`);
} else {
  while (startGame) {
    let maxNumber = 5;
    let maxAttemptPrize = 10;
    let attemptPrize = maxAttemptPrize;
    let total = 0;
    let attempts = maxAttempts;

    while ((startGame && attempts) > 0) {
      let randomNumber = Math.round(Math.random() * maxNumber);
      let userNumber = prompt(
        `Enter a number from 0 to ${maxNumber} :
Attempts left: ${attempts} 
Total prize: ${total} $ 
Possible prize on current attempt : ${attemptPrize} $
      `);
      if (!userNumber) {
        break;
      }
      if (+userNumber === randomNumber) {
        total += attemptPrize;
        attempts = maxAttempts;
        startGame = confirm(`Congratulation! Your prize is: ${total} $. Do you want to continue?`);

        if (!startGame) {
          break;
        } else {
          maxNumber *= 2;
          maxAttemptPrize *= 3;
          attemptPrize = maxAttemptPrize;
        }
      } else {
        attempts--;
        attemptPrize = Math.floor(attemptPrize / 2);
      }
    }

    startGame = confirm(`Thank you for a game. Your prize is: ${total} $. Do you want to play again?`);
  }
}