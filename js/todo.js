const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todoes = [];

const LOCALSTORAGE_KEY = "todoes";

function saveTodoes() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todoes));
}

function deleteTodo(event) {
    //event.target =>> button
    const li = event.target.parentElement;
    
    todoes = todoes.filter(todo => todo.id !== parseInt(li.id));
    saveTodoes();
    //delete li
    li.remove();
}

function printTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✕";
    deleteBtn.addEventListener("click", deleteTodo);
    li.appendChild(deleteBtn);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    li.appendChild(span);
    const time = document.createElement("span");
    if(newTodo.time !== null) {
        time.innerText = ` | ${newTodo.time}`;
        li.appendChild(time);
    }

    todoList.appendChild(li);
}

function handleSumbit(event) {
    //sumbit 기본 동작 방지하기
    event.preventDefault();

    const todoTime = document.querySelector(".time");
    let saveTime = 0;
    console.log(todoTime.value);

    if(todoTime.value === "") {
        console.log("time will be null")
        saveTime = null;
    } else {
        saveTime = todoTime.value;
    }
    const newTodo = todoInput.value;
    const newTodoObj = {
        "text":newTodo,
        "id":Date.now(),
        "time":saveTime,
    };
    todoes.push(newTodoObj);
    todoInput.value = "";
    printTodo(newTodoObj);
    saveTodoes();
}
todoForm.addEventListener("submit", handleSumbit);

const savedTodoes = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (savedTodoes !== null) {
    todoes = savedTodoes;
    savedTodoes.forEach(printTodo);
}