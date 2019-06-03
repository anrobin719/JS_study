var todoList = [];
var addBtn = document.querySelector("#add");
getTodo();
addBtn.addEventListener("click", addTodo);


function getTodo() {
    var storedTodo = localStorage.getItem("storageTodo");
    if(storedTodo !== null) {
        todoList = JSON.parse(storedTodo);
    }
    showTodo();
}

function addTodo() {
    var list = document.querySelector("#list").value;
    if(list !== null) {
        todoList.push(list);
        document.querySelector("#list").value = "";
        document.querySelector("#list").focus();
    }
    localStorage.setItem("storageTodo", JSON.stringify(todoList));
    showTodo();
}

function showTodo() {
    var ul = `<ul>`
    for(i = 0; i < todoList.length; i++) {
        ul += `<li>${todoList[i]}<span class="delete" id="${i}">x</span></li>`;
    }
    ul += `</ul>`
    document.querySelector("#listSpace").innerHTML = ul;

    var delBtn = document.querySelectorAll(".delete");
    for(i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("click", delTodo);
    }
}

function delTodo() {
    var index = this.getAttribute("id");
    todoList.splice(index, 1);
    localStorage.setItem("storageTodo", JSON.stringify(todoList));
    showTodo();
}

