var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  };
};

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  todos.unshift(todoText)
  todoInput.value=""

  renderTodos()
})

// function addNewTodo() {
//   var newTodo = todoInput.value
//   todos.push(newTodo)
//   renderTodos()
// };

// function submitForm(event){
//   event.preventDefault();
//   document.priceOptionForm.submit();
//   document.priceOptionForm.method='post';
// }

// document.onkeydown = function submitform() {
//   if(window.event.keyCode == 13) {
//     submitForm;
//   };
// };

