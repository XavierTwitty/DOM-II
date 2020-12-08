// Your code goes here

// mouseover
let welcomeToFunBus = document.querySelector(".intro h2");
// console.log(welcomeToFunBus);
welcomeToFunBus.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "blue";

    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

//keydown
// let whatIsKeydown = document
//   .querySelector(".main-navigation")

document.addEventListener("keydown", () => console.log("hey"));

// function myFuction(e) {
//   console.log(e.target.value);

// wheel

let sizeWheel = document.querySelector(".logo-heading");
sizeWheel.addEventListener("click", resize);
sizeWheel.addEventListener("dblclick", resize2);
function resize() {
  sizeWheel.style.fontSize = "20px";
}

function resize2() {
  sizeWheel.style.fontSize = "50px";
}

//load

// let loading = document.querySelector(".main-navigation");
window.addEventListener("load", (e) => {
  console.log("page is fully loaded");
});

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");
// });

// let loadNav = document.addEventListener("load", (event) => {
//   console.log("nav loaded");
// });

//focus
const password = document.querySelector("#demo");
password.addEventListener("focus", addEvent);
function addEvent() {
  password.target.style.background = "blue";
}
//resize

//scroll

//select

function logSelection(event) {
  const log = document.querySelector(".container-home");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log = `you selected ${selection}`;
}

const input = document.querySelector("#demo");
input.addEventListener("select", logSelection);

//drag / drop
