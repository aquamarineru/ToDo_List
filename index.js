//---------------Selectors-----------------------//
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener('click', addTodoHandler)

todos = [];

function addTodoHandler() {
    let val = input.value;
    console.log(val);
    input.value = '';

    todos.push(val);
    console.log(todos);

    addTodo()
}
function addTodo() {
    let value = '';
    for (const todo of todos) {
        value = todo;
    }
    list.innerHTML += `
        <li>${value}</li>
    `;

}





/* function addTodo(event) {

      console.log(event.target.value)
       console.log(todoInput.value) 
   if (event.key === "Enter") {
       myWeekTodo.push(todoInput.value)
       console.log(myWeekTodo)
       input.value = "";

console.log("Done!");

 */

