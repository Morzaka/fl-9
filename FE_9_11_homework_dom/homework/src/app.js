let listItemCounter = 0;
let maxListItem = 10;
let firstNumberOfList = 10;
const message = document.querySelector('.par');

let deleteIcon = '<i class="material-icons" id="del">delete</i>';
let checkBoxNo = '<i class="material-icons" id="checkBoxNo">check_box_outline_blank </i>';
let checkBoxYes = '<i class="material-icons" id="checkBoxYes">check_box </i>';

document.getElementById('add').addEventListener('click', function () {
  let value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
  }
});


function removeItem() {
  let item = this.parentNode;
  let parent = item.parentNode;
  listItemCounter--;
  if (listItemCounter <= maxListItem) {
    document.getElementById('item').disabled = false;
    document.getElementById('add').disabled = false;
    message.style.display = 'none';
  }

  parent.removeChild(item);
}

function completeItem() {
  let item = this;
  item = item.innerHTML = checkBoxYes;
}

function addItemTodo(text) {
  let list = document.getElementById('todo');
  let item = document.createElement('li');
  item.innerText = text;
  listItemCounter++;
  if (listItemCounter === maxListItem) {
    document.getElementById('item').disabled = true;
    document.getElementById('add').disabled = true;
    message.style.display = 'block';

  }

  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = deleteIcon;
  remove.addEventListener('click', removeItem);

  let complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = checkBoxNo;
  complete.addEventListener('click', completeItem);

  item.appendChild(complete);
  item.appendChild(remove);

  list.insertBefore(item, list.childNodes[firstNumberOfList]);
}