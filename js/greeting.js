const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child")
const greeting = document.querySelector("#greeting");
greeting.addEventListener("transitionstart", event => {
    console.log("transition is started!");
})

const HIDDEN_CLASS = "hidden"
const LOCALSTORAE_KEY = "username";

function onLoginSubmit(event){
    //loginform을 저장하고 안보이게 한다
    event.preventDefault();
    const userName = loginInput.value;
    //locatstorage에 저장
    localStorage.setItem(LOCALSTORAE_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASS);

    //greeting에 내용을 추가하고 보이게 한다
    printUserName();
}

function printUserName() {
    const userName = localStorage.getItem(LOCALSTORAE_KEY);
    greeting.innerText = `Hello, ${userName}`;
    greeting.classList.add("showup");
    greeting.classList.remove("hidden");
}

//localstorage에 저장되어 있는 값
const savedUserName = localStorage.getItem(LOCALSTORAE_KEY);

if(savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // disapaer the form
    printUserName();
}