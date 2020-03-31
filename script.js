function newTodo() {
  let ul = document.getElementById('todo-list');
  let list = document.createElement("li");
  let br = document.createElement('br');

  let newDelButton = document.createElement('button');
  newDelButton.className = "btn btn-outline-danger btn-sm";
  newDelButton.innerHTML = 'Done';
  newDelButton.id = "done";
  newDelButton.addEventListener('click', delItem);

  let newToDo = document.createTextNode(document.getElementById("new-todo").value);
  list.appendChild(newToDo);
  list.appendChild(br);
  list.appendChild(newDelButton)
  list.className = "list-group-item list-group-item-action list-group-item-info";
  ul.appendChild(list);
  document.getElementById("new-todo").value = "";
}

function delItem() {
  let div = this.parentElement;
  div.style.display = "none";
}