const todoInput = document.getElementById("todoinput");
const todoButton = document.getElementById("todobutton");
const todoList = document.getElementById("todolist");
const filterOption = document.getElementById("todoselect")

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");

    todoDiv.classList.add("todo");

}

