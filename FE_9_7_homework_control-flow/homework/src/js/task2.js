`use strict`;

let startGame = confirm(`Do you want to play a game?`);
const maxAttempts = 3;

if (!startGame) {
  alert(`You did not become a millionaire, but can`);
} else {
  while (startGame) {
    let max = 5;
    let maxAttemptPrize = 10;
    let attemptPrize = maxAttemptPrize;
    let totalPrize = 0;
    let attempts = maxAttempts;

    while (startGame && attempts > 0) {
      let randomNumber = Math.round(Math.random() * max);
      console.log(randomNumber);

      let userNumber = prompt(
        `Enter a number from 0 to ${max} :
Attempts left: ${attempts} 
Total prize: ${totalPrize} $ 
Possible prize on current attempt : ${attemptPrize} $
      `);

      if (!userNumber) {
        break;
      }

      if (+userNumber === randomNumber) {
        totalPrize = totalPrize + attemptPrize;
        attempts = maxAttempts;
        startGame = confirm(`Congratulation! Your prize is: ${totalPrize} $. Do you want to continue?`);

        if (!startGame) {
          break;
        } else {
          max = max * 2;
          maxAttemptPrize = maxAttemptPrize * 3;
          attemptPrize = maxAttemptPrize;
        }

      } else {
        attempts--;
        attemptPrize = Math.floor(attemptPrize / 2);
      }
    }

    startGame = confirm(`Thank you for a game. Your prize is: ${totalPrize} $. Do you want to play again?`);
  }

}