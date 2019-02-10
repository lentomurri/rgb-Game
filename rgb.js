//play again button
var playAgain = document.querySelector("#replay");
//var to create easyMode
var easyGame = false;
//how many squares are in the array
var which = 5;
//easy and hard button mode
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");
var squares = document.querySelectorAll(".square");

playAgain.addEventListener("click", assign)

//HARD AND EASY BUTTON EVENTS
//events on easy: toggle class
easyButton.addEventListener("click", function() {
  hard.classList.remove("turnedOn");
  this.classList.toggle("turnedOn");
  easyGame = true;
  solution();
  assign();
});

//hard button function
hardButton.addEventListener("click", function() {
  easyGame = false;
  assign();
  this.classList.add("turnedOn");
  easyButton.classList.remove("turnedOn")
})


//PLAY AGAIN FUNCTION

//create color solution + apply it to h1 #pick
function rgb() {
  //create min and max and fish a random number between that
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

var compare = function() {
  //check if RGB is the same as the solution
  if (gameover == false && this.style.backgroundColor === square.style.backgroundColor) {
    //make body turn to colour
    document.body.style.backgroundColor = square.style.backgroundColor;
    result.textContent = "YOU WIN!"
    gameover = true;
  }
  else if (gameover == false) {
    this.style.visibility = "hidden";
    result.textContent = "Try Again!"
  }
}


//function to assign rgb to particular square
function assign() {
  //create variable for easyGame on
  for(var i = 3; i <=5; i++) {
    squares[i].style.display = "inline-block";
  }
  if (easyGame) {
    which = 4;
    for(var i = 3; i <=5; i++) {
      squares[i].style.display = "none";
    }
  }
//assign solution RGB to particular square
document.querySelector("#pick").textContent = rgb();
square.style.backgroundColor = document.querySelector("#pick").textContent;
}
//pick winning square
function solution() {
  if (easyGame) {
    which = 4;
  }
  return "#" + squares[Math.floor(Math.random() * (which - 1))].id;
}

var square = document.querySelector(solution());


//assigns different colours to all squares
function randomColours() {
  for(var i = 0; i <= 5; i++) {
      if (squares[i].id !== square.id) {
    squares[i].style.backgroundColor = rgb();
  }
}
}

function compare() {

}

assign();
randomColours();
