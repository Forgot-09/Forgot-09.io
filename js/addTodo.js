const inputTodoName = document.querySelector("#toDoMain .text");
const inputTime = document.querySelector("#toDoMain .time");
const addTodoBtn = document.querySelector("#toDoMain .addTodo")
const helpSpan = document.querySelector("#toDoMain span")
let state = true;


const button = document.querySelector("#toDoMain button");
button.addEventListener("click", (event) => {
    
    if(state) {
        addTodoBtn.classList.add("rotate_anm_in");
        inputTodoName.classList.remove("hidden");
        inputTime.classList.remove("hidden");
        state = false;
        setTimeout
        setTimeout(addTodoBtn.classList.remove("rotate_anm_out"), 1000);
    } else {
        addTodoBtn.classList.add("rotate_anm_out");
        inputTodoName.classList.add("hidden");
        inputTime.classList.add("hidden");
        state = true;
        setTimeout(addTodoBtn.classList.remove("rotate_anm_in"), 1000);
    }
})