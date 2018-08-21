`use strict`;

let login = null;
let password = null;

for (;login !== `User`;) {
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
}

if (login) {
  for (;password !== `SuperUser`;) {
    password = prompt(`Please enter your password:`);
    if (!password) {
      alert(`Canceled`);
      break;
    }
    if (password !== `SuperUser`) {
      alert(`Wrong password`);
    }
  }
}

if (password) {
  alert(new Date().getHours() < 20 ? `Good day!` : `Good evening!`);
}