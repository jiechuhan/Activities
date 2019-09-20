var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var todoCount = 0;

function renderList() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for (i=0; i<todos.length; i++) {
        var todo = todos[i]
        var li = document.createElement("li");
        li.textContent = todo
        todoList.appendChild(li)
    }
}

renderList()


// function addTodoList(event) {
//     event.preventDefault();
//     var thing = todoInput.value;
//     var li = document.createElement("li");
//     li.id = todos.length;
    
//     todos.push[{thing}];
//     todoList.append(li);
// }