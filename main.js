document.querySelector("#reset").addEventListener("click", resetName);
function resetName() {
  location.reload();
}

let answerQ1 = document.getElementById("first").value;
document.querySelector("#name").addEventListener("click", myFunctionA);

let answerQ2 = document.getElementById("second").value;
document.querySelector("#name").addEventListener("click", myFunctionB);

let answerQ3 = document.getElementById("third").value;
document.querySelector("#name").addEventListener("click", myFunctionC);

let answerQ4 = document.getElementById("fourth").value;
document.querySelector("#name").addEventListener("click", myFunctionD);

let answerQ5 = document.getElementById("fifth").value;
document.querySelector("#name").addEventListener("click", myFunctionE);

function myFunctionA() {
  let a = document.getElementById("first").value;
  if (a.length <= 0) {
    wrong();
  }
  if (a.length >= 1) {
    getName();
  }
}

function myFunctionB() {
  let b = document.getElementById("second").value;
  if (b.length <= 0) {
    wrong();
  }
  if (b.length >= 1) {
    getName();
  }
}

function myFunctionC() {
  let c = document.getElementById("third").value;
  if (c.length <= 0) {
    wrong();
  }
  if (c.length >= 1) {
    getName();
  }
}

function myFunctionD() {
  let d = document.getElementById("fourth").value;
  if (d.length <= 0) {
    wrong();
  }
  if (d.length >= 1) {
    getName();
  }
}

function myFunctionE() {
  let e = document.getElementById("fifth").value;
  if (e.length <= 0) {
    wrong();
  }
  if (e.length >= 1) {
    getName();
  }
}

// Got this code from my rock paper scissors

// let myArray = ["Rock", "Paper", "Scissors"];
// let botsWeapon = myArray[Math.floor(Math.random() * myArray.length)];

let myArray = [
  "Asap",
  "Lil",
  "Wiz",
  "YT",
  "Young",
  "Wu-",
  "Mula",
  "Gucci",
  "Polo",
];
let firstName = myArray[Math.floor(Math.random() * myArray.length)];

let mySecondArray = [
  "Brick",
  "Ak-47",
  "Love",
  "Gang",
  "Bing",
  "Bong",
  "Money",
  "dOlLaZ",
  "Leon",
];
let LastName = mySecondArray[Math.floor(Math.random() * myArray.length)];

console.log(firstName);
console.log(LastName);

function getName() {
  document.querySelector("p").innerText = firstName + " " + LastName;
  console.log("its working");
}
function wrong() {
  document.querySelector(".result").innerText = "Fill in the Boxes Please";
  console.log("its not working");
}
