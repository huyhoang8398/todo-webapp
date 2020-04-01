var todoItems = [];

class Item {
  constructor(data, confirm) {
    this.data = data;
    this.confirm = confirm;
  }
}

function saveData() {
  let str = JSON.stringify(todoItems);
  localStorage.setItem("todos", str);
}

function getData() {
  let str = localStorage.getItem("todos");
  todoItems = JSON.parse(str);
  if (!todoItems) {
    todoItems = [];
  }
}

function newItem() {
  let data = document.getElementById("new-todo").value;
  let confirm = false;
  if (!data) {
    alert("You should add todo item!");
  } else {
    let item = new Item(data, confirm);
    todoItems.push(item);
    saveData();
    document.getElementById("new-todo").value = "";
    listItems();
  }
}

function listItems() {
  let li = "";
  for (let data in todoItems) {
    let todo = todoItems[data].data;
    if (todoItems[data].confirm) {
      li += `<li class="list-group-item list-group-item-action list-group-item-info" id="data${data}">${todo}</br></br><button class="nes-btn is-warning mr-5" onclick="delItem(this.id)" id="delbut${data}">Done</button><label><input type="checkbox" class="nes-checkbox" id="confirm${data}" onclick="checkedItem(this.id)" checked/><span>Check</span></label></li>`;
    } else {
      li += `<li class="list-group-item list-group-item-action list-group-item-info" id="data${data}">${todo}</br></br><button class="nes-btn is-warning mr-5" onclick="delItem(this.id)" id="delbut${data}">Done</button><label><input type="checkbox" class="nes-checkbox" id="confirm${data}" onclick="checkedItem(this.id)" /><span>Check</span></label></li>`;
    }
  }
  $("#todo-list").html(li);
}
function delItem(index) {
  let dataDelID = "data" + index.slice(-1);
  document.getElementById(dataDelID).style.display = 'none';
  todoItems.splice(index.slice(-1), 1);
  saveData();
}

function checkedItem(index) {
  let checkedID = index.slice(-1);
  let checkboxID = "confirm" + checkedID;
  let checkBox = document.getElementById(checkboxID);
  todoItems[checkedID].confirm = checkBox.checked;
  saveData();
}

getData();
listItems();