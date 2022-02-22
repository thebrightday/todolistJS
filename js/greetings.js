// const a =10;
// const b =3;
// let MyName ="kci";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello "+MyName);

// MyName = "kim";
// console.log("Your New Name is " +MyName); 

// //bool
// const amIFat = true;
// console.log(amIFat)

// let amIFat2;
// console.log(amIFat2, amIFat)

// // //Get Item from Array
// // const daysOfWeek = ["mon","tue","wed","thu","fri","sat"]
// // console.log(daysOfWeek[5]);
// // console.log(daysOfWeek)

// //Add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek)


// //function
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age)

// }

// sayHello("nico", 10);
// sayHello("dal", 20);
// sayHello("lynn", 23);

// function plus(a,b){
//     console.log(a+b);
// }
// function divide(a,b){
//     console.log(a/b);
// }
// plus(8,60)
// divide(10,2)

// const toBuy = ["potato","tomato","pizza"];

// console.log(toBuy)
// toBuy[2]="water";
// console.log(toBuy)
// toBuy.push("meat")
// console.log(toBuy)

// //recap
// const player = {
//     name: "nico",
// //    age: 98,
// };


// const calculator={
//     add: function(a,b){
//         return a+b
//     },
//     minus: function(a,b){
//         return a-b
//     },
//     power: function(a,b){
//         return a**b
//     }
// }

// const plusResult = calculator.add(3,5)
// console.log(plusResult)

// //const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner +2;
// }

// //const krAge = calculateKrAge(age);

// console.log(krAge)

// const age = parseInt(prompt("How old are you?"));


// console.log(isNaN(age));

// if(isNaN(age) || age <0){
//     console.log("Please write a real positive number");
// } else if (age < 18){
//     console.log("You are too young")
// } else if (age >=18 && age<=50){
//     console.log("You can drink")
// } else if (age >60 && age <= 80) {
//     console.log("You should exercise")
// } else if (age === 100){
//     console.log("Wow you are wise")
// } else if (age >80) {
//     console.log("You can do whatever you want")
// } else {
//     console.log("You can't drink")
// }

// const title = document.getElementById("something")
// title.innerText = "Got you!"



// const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick(){
//     h1.style.color = "blue"
// }
// function handleMouseEnter(){
//     h1.innerText="Mouse is here"
// }
// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!"
// }
// function handlewindowResize(){
//     document.body.style.backgroundColor = "tomato"
// }
// function handleWindowCopy(){
//     alert("copier")
// }
// function handleWindowOffline(){
//     alert("SOS no WIFI")
// }
// function handleWindowOnline(){
//     alert("all good")
// }

// h1.addEventListener("click", handleTitleClick)
// h1.addEventListener("mouseenter", handleMouseEnter)
// h1.addEventListener("mouseleave", handleMouseLeave)

// window.addEventListener("resize", handlewindowResize)
// window.addEventListener("copy", handleWindowCopy)
// window.addEventListener("offline", handleWindowOffline)
// window.addEventListener("online", handleWindowOnline)

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     // const clickedClass = "clicked";
//     // if(h1.classList.contains(clickedClass)){
//     //     h1.classList.remove(clickedClass);
//     // } else {
//     //     h1.classList.add(clickedClass)
//     // }
//     h1.classList.toggle("clicked")
// }

// h1.addEventListener("click", handleTitleClick);

const loginInput=document.querySelector("#login-form input")
const loginForm=document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")
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
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLinkClick)
}else {
    paintGreetings(savedUsername)
}