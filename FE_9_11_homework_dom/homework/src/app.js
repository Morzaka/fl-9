var rootNode = document.getElementById('root');

let header = document.createElement('div');
let heading = document.createElement('h1');
let inputField = document.createElement('input');
let addButton = document.createElement('div');

header.className = 'header';
heading.innerText = 'TODO Cat List';

inputField.className = 'input-todo';
inputField.placeholder = 'Add New Action';

addButton.className = 'addItemButton';
addButton.innerHTML = '<i class="material-icons">add_box</i>';

header.appendChild(inputField);
header.appendChild(addButton);
header.appendChild(document.createElement('hr'));

let main = document.createElement('div');

main.innerHTML = createItem();

function createItem() {
  let listItem = document.createElement('li');
  listItem.className = 'listItem';
  const unchecked = '<i class="material-icons">check_box_outline_box</i>';
  const bin = '<i class="material-icons">delete</i>';

  return `${unchecked} Some todo text ${bin}`;
}

let container = document.createElement('div');
container.appendChild(header);
container.appendChild(main);

rootNode.appendChild(container);