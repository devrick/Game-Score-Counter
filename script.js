// My first attempt
// var p1 = document.querySelector("#p1");
// var p2 = document.querySelector("#p2");
// var p1Btn = document.querySelector("#p1Btn");
// var p2Btn = document.querySelector("#p2Btn");
// var resetBtn = document.querySelector("#reset");
// var max = document.querySelector("#max");

// var p1Score = 0;
// var p2Score = 0;

// var maxScore = 5;
// max.textContent = maxScore;

// p1Btn.addEventListener("click", function() {
//   p1Score++;
//   p1Print();

//   if(p1Score === maxScore){
//     p1.style.color = "green";
//   }
// });

// p2Btn.addEventListener("click", function() {
//   p2Score++;
//   p2Print();

//   if(p2Score === maxScore) {
//     p2.style.color = "green";
//   }
// });

// resetBtn.addEventListener("click", function() {
//   p1Score = 0;
//   p2Score = 0;
//   p1.style.color = "black";
//   p2.style.color = "black";

//   p1Print()
//   p2Print()
// });


// function p1Print() {
//   p1.textContent = p1Score;
// }

// function p2Print() {
//   p2.textContent = p2Score;
// }


var p1Btn = document.querySelector("#p1Btn");
var p2Btn = document.querySelector("#p2Btn");
var resetBtn = document.querySelector("#reset");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var maxScore = document.querySelector("#max");
var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;

var winningScore = 5;

p1Btn.addEventListener("click", function() {
  if(!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
      p1.classList.add("winner");
      gameOver = true;
    }
    p1.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    if(p2Score === winningScore) {
      p2.classList.add("winner");
      gameOver = true;
    }
    p2.textContent = p2Score;
  }
});

resetBtn.addEventListener("click", function() {
  reset();
});

numInput.value = winningScore;

numInput.addEventListener("change", function() {
  if(Number(this.value) < 1) {
    this.value = 1;
  }
  maxScore.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1.textContent = p1Score;
  p2.textContent = p2Score;
  p1.classList.remove("winner");
  p2.classList.remove("winner");
  gameOver = !gameOver;
}