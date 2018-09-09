const rootNode = document.getElementById('root');
let counter = 1000;
const zero = 0;
const todoItems = [];
let temporaryValue = '';

function main() {
  window.location.hash = '';
  rootNode.innerText = '';
  let h1 = document.createElement('h1');
  h1.innerText = 'Simple TODO application';
  let btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = 'Add new task';
  let emptyBlock = document.createElement('h2');
  emptyBlock.innerText = 'TODO is empty';
  let list = document.createElement('ul');
  list.id = 'list';

  rootNode.appendChild(h1);
  rootNode.appendChild(btn);
  if (todoItems.length === zero) {
    rootNode.appendChild(emptyBlock);
  }
  rootNode.appendChild(list);

  function buid(i) {
    function qqwe() {
      let emptyBlock = document.createElement('h2');
      emptyBlock.innerText = 'TODO is empty';
      rootNode.appendChild(emptyBlock);
    }

    let li = document.createElement('li');
    let img = document.createElement('img');
    img.className = 'img';
    if (todoItems[i].isDone) {
      img.src = './assets/img/done-s.png';
    } else {
      img.src = './assets/img/todo-s.png';
    }
    img.addEventListener('click', () => {
      if (todoItems[i].isDone) {
        img.src = './assets/img/todo-s.png';
        todoItems[i].isDone = false;
        todoItems.push(todoItems[i]);
        todoItems.splice(i, 1);
        main();
      } else {
        img.src = './assets/img/done-s.png';
        todoItems[i].isDone = true;
        todoItems.push(todoItems[i]);
        todoItems.splice(i, 1);
        main();
      }
    });
    let par = document.createElement('div');
    par.className = 'paragraph';
    par.innerText = `${todoItems[i].description}`;
    let del = document.createElement('img');
    del.className = 'remove img';
    del.src = './assets/img/remove-s.jpg';
    li.appendChild(img);
    li.appendChild(par);
    li.appendChild(del);
    list.appendChild(li);

    let qwe = document.getElementsByClassName('paragraph');
    for (let i = 0; i < qwe.length; i++) {
      qwe[i].onclick = function () {
        temporaryValue = `edit${i + 1}`;
        window.location.hash = `edit${i + 1}`;
      }
    }
    let close = document.getElementsByClassName('remove');
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let listItem = this.parentElement;
        let ul = document.getElementById('list');
        ul.removeChild(listItem);
        todoItems.splice(i);
      }
    }
  }

  for (let i = 0; i < todoItems.length; i++) {
    if (!todoItems[i].isDone) {
      buid(i);
    }
  }
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].isDone) {
      buid(i);
    }
  }

  function addChangeHash() {
    window.location.hash = 'addNewAction';
  }

  btn.addEventListener('click', addChangeHash);
  console.log(todoItems);
}

main();

function addNewItems() {
  let h1 = document.createElement('h1');
  h1.innerText = 'Add new TODO action';
  let inpt = document.createElement('input');
  inpt.id = 'input';
  inpt.placeholder = 'Input your action here!';
  inpt.type = 'text';
  let place = document.createElement('div');
  place.className = 'place';
  let cancel = document.createElement('button');
  cancel.className = 'cancel btns';
  cancel.innerText = 'cancel';
  let add = document.createElement('button');
  add.className = 'add btns';
  add.innerText = 'add';

  rootNode.appendChild(h1);
  rootNode.appendChild(inpt);
  rootNode.appendChild(place);
  place.appendChild(cancel);
  place.appendChild(add);
  document.querySelector('input').focus();

  cancel.addEventListener('click', cancelIt);

  function cancelIt() {
    window.location.hash = '';
  }

  add.addEventListener('click', doIt);

  function doIt() {
    let value = document.getElementById('input').value;
    if (value === '') {
      return alert('You didn`t write any action');
    }
    todoItems.push({
      isDone: false,
      id: `${counter + 1}`,
      description: `${value}`
    });
    counter++;
    window.location.hash = '';
    return todoItems;
  }
}

function rename() {
  const howMany = 5;
  let n = window.location.hash.substr(howMany);
  n--;
  let h1 = document.createElement('h1');
  h1.innerText = 'Edit your action here';
  let inpt = document.createElement('input');
  inpt.id = 'editor';
  inpt.value = todoItems[n].description;
  let place = document.createElement('div');
  place.className = 'place';
  let back = document.createElement('button');
  back.className = 'back';
  back.innerText = 'back';
  let save = document.createElement('button');
  save.className = 'save ';
  save.innerText = 'save';

  rootNode.appendChild(h1);
  rootNode.appendChild(inpt);
  rootNode.appendChild(place);
  place.appendChild(back);
  place.appendChild(save);

  back.addEventListener('click', backToHome);

  function backToHome() {
    window.location.hash = '';
  }

  save.addEventListener('click', saveIt);

  function saveIt() {
    let value = document.getElementById('editor').value;
    if (value === '') {
      return alert('You didn`t write any action');
    }
    todoItems[n].description = value;
    window.location.hash = '';
    return todoItems;
  }
}

window.addEventListener('hashchange', function () {
  if (window.location.hash === '#addNewAction') {
    rootNode.innerText = '';
    addNewItems();
  } else if (window.location.hash === `#${temporaryValue}`) {
    rootNode.innerText = '';
    rename();
  } else {
    rootNode.innerText = '';
    main();
  }
});