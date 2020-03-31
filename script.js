var todoItems = [];

class Item {
  constructor(data) {
    this._data = data;
  }
  get data() {
    return this._data;
  }
  set data(updateData) {
    this._data = updateData;
  }
}

function newItem() {
  let data = document.getElementById("new-todo").value;
  let item = new Item(data);
  todoItems.push(item);
  listItems();
}

function listItems() {
  let li = "";
  for (let data in todoItems) {
    let todo = todoItems[data].data;
    li += `<li class="list-group-item list-group-item-action list-group-item-info">${todo}</li><button class="btn btn-outline-danger btn-sm" onclick="delItem()">Done</button>`;
  }
  console.log(li);
  $("#todo-list").html(li);
}

function delItem() {
  let div = this.parentElement;
  console.log(div);
  div.style.display = "none";
}