// Variables
let userse = [];
let pcse = [];
let level = 0;
let isStarted = false;
let info = document.querySelector(".info");
let btnList = ["yellow", "red", "green", "purple"];
let body = document.querySelector("body");
let userScore = -1;
let userName = prompt("Welcome Please enter your Name :)");
let hScore = -1;
let sbtn = document.querySelector(".sbtn");
let pp = document.querySelector(".ppb");
let x = 0;
let audio = new Audio("./Assets/Sounds/BackgroundMusic.mp3");
let error = new Audio();
error.src = "./Assets/Sounds/error.wav";
let clickSound = new Audio();
clickSound.src = "./Assets/Sounds/click.wav";

function levelUP() {
  userse = [];
  level++;
  hScore++;
  userScore++;
  if (hScore < level) {
    hSrore = level - 1;
  }
  info.innerHTML = `Your Level is ${level} <br> <b>Highest score is ${hScore} by ${userName}<b>`;
  // Random Random
  let randInd = Math.floor(Math.random() * 4);
  let randcolor = btnList[randInd];
  let randBtn = document.querySelector(`.${randcolor}`);
  pcse.push(randcolor);
  pcFlash(randBtn);
}
//function flashByPC
function pcFlash(btn) {
  btn.classList.add("pcFlash");
  setTimeout(function () {
    btn.classList.remove("pcFlash");
  }, 300);
  console.log(`pc list => ${pcse}`);
}
//function flashByUSER
function uFlash(btn) {
  btn.classList.add("uFlash");
  setTimeout(function () {
    btn.classList.remove("uFlash");
  }, 300);
}
//function ButtonPRESS
function btnPrss() {
  clickSound.play();
  uFlash(this);
  let color = this.getAttribute("id");
  userse.push(color);
  console.log(`user list => ${userse}`);
  ans(userse.length - 1);
}
//function RESET(GAME OVER)
function resetme() {
  info.innerHTML = `Game Over press Go button to restart <br>${userName} your score is ${userScore}`;
  body.classList.add("alert");
  error.play();
  setTimeout(() => {
    body.classList.remove("alert");
  }, 300);
  isStarted = false;
  level = 0;
  userse = [];
  pcse = [];
  userScore = 0;
  hScore = hScore - 1;
  sbtn.classList.remove("hide");
}
//function for Macthing Patterns of button
function ans(idx) {
  if (userse[idx] === pcse[idx]) {
    if (userse.length === pcse.length) {
      setTimeout(levelUP, 1000);
    }
  } else {
    resetme();
  }
}
//Clicking Event on buttons
sbtn.addEventListener("click", () => {
  if (isStarted == false) {
    isStarted = true;
    console.log("Game Started");
    levelUP();
    sbtn.classList.add("hide");
  }
});
//Selecting AllBUTTINS for listner event
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPrss);
}

pp.addEventListener("click", function () {
  if (x == 0) {
    this.classList.remove("uline");
    audio.play();
    x = 1;
  } else {
    this.classList.add("uline");
    audio.pause();
    x = 0;
  }
});
