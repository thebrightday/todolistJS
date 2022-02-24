const loginInput=document.querySelector("#login-form input")
const loginForm=document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")
const logout = document.querySelector("#logout")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

const link = document.querySelector("a")

function handleLinkClick(event){
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
    document.getElementById("todo-form").classList.remove("hidden")

}


function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `안녕하세요 ${username} 님`
    greeting.classList.remove(HIDDEN_CLASSNAME)
    logout.classList.remove(HIDDEN_CLASSNAME)
}

function logoutfn(){
    localStorage.clear()
    greeting.classList.add(HIDDEN_CLASSNAME)
    logout.classList.add(HIDDEN_CLASSNAME)
    document.getElementById("todo-form").classList.add("hidden")
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    location.reload()
}

logout.addEventListener("click", logoutfn)

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLinkClick)
}else {
    paintGreetings(savedUsername)
}
