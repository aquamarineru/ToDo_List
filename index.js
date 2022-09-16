//---------------Selectors-----------------------//
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const total = document.querySelector("#total");


const todos = [
    { done: false, text: '' }

];


input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const newInput = {
            done: false,
            text: input.value
        }
        todos.unshift(newInput)
        input.value = '';
        render()
    }
})

btn.addEventListener('click', function addTodoHandler() {
    const newInput = {
        done: false,
        text: input.value
    }
    todos.unshift(newInput)
    input.value = '';
    render()
})
function render() {

    const myListAsHTML = todos.map((item, i) =>
        `<li >
        ${item.done}
        ${item.text}
         <button onclick="check(${i})"><i class = 'fas fa-check'></i></button>
        <button onclick="remove(${i})"><i class = 'fas fa-trash'></i></button>
         </li>`)
        .join("")

    list.innerHTML = myListAsHTML
    console.log(myListAsHTML);

    /*  for (const todo of todos) {
         value = todo;
     }
     list.innerHTML += `
         <li>
         ${value.text}
         </li>
             `; */
}
render()

function toggleDone(i) {
    todos[i].done = !todos[i]
    console.log(todos[i])
    render()
}

function remove(i) {
    todos.splice(i, 1)
    render()
}

render()

let showOnlyPending = false;
pendingToggleEl.addEventListener('click', function (event) {
    showOnlyPending = !showOnlyPending
    pendingToggleEl.innerText = showOnlyPending ? "remove filter" : "show only pending"
    render()
    console.log(showOnlyPending)

})



