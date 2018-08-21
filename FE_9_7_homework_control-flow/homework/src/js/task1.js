`use strict`;

let login;
let password;

do {
  login = prompt(`Please enter your login:`);
  if (!login) {
    alert(`Canceled`);
    break;
  }

  if (login.length < 4) {
    alert(`I don't know any users having name length less than 4 symbols`);
    continue;
  }

  if (login !== `User`) {
    alert(`I don't know you.`);
  }
} while (login !== `User`);

if (login) {
  do {
    password = prompt(`Please enter your password:`);
    if (!password) {
      alert(`Canceled`);
      break;
    }
    if (password !== `SuperUser`) {
      alert(`Wrong password`);
    }
  } while (password !== `SuperUser`);
}

if (password) {
  alert(new Date().getHours() < 20 ? `Good day!` : `Good evening!`);
}