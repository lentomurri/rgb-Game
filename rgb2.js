var colors;
var h1all = document.querySelectorAll("h1");
var h1 = document.querySelector("#pick");
var result = document.querySelector("#result");
var gameover = false;
var squares = document.querySelectorAll(".square");
var replay = document.querySelector("#replay");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");

//BUTTONS EVENT LISTENERS
//switch classes of button selected
hardButton.addEventListener("click", function() {
  game(6);
  remove(hardButton);
  remove(easyButton)
  turnOn(this);
})
easyButton.addEventListener("click", function() {
  game(3);
  remove(hardButton);
  remove(replay)
  turnOn(this);
})

//replay button
  replay.addEventListener("click", function() {
    game(6);
    remove(hardButton);
    remove(easyButton)
    turnOn(this);
  })

  //remove turned on for every class
  function remove(val) {
    val.classList.remove("turnedOn");
  }
 //add turnedOn for every class
  function turnOn(val) {
    val.classList.add("turnedOn");
  }

  //END OF BUTTON LISTENERS

 //reset game to basic
  function reset() {
    //reset text part
    result.textContent = "";
    replay.textContent = "New Colors"

    //reset background oh h1
    for (var i = 0; i < h1all.length; i++) {
      h1all[i].style.backgroundColor = document.body.style.backgroundColor;
  }
  //reset between easy and hard mode
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.display = "inline-block";
      squares[i].style.visibility = "visible";
    }
    //restart clicking function
    gameover = false;
  }

//function that runs the entire game
  function game(val) {
    reset();
    //create array of colors
    colors = generateRandom(val)
    //assign colors to squares
    solution();
     start();
  }




  //creates pool of colours
  function generateRandom(val) {
  //make an array
  var arr = [];
  for (var i = 0; i < val; i++) {
    arr.push(rgb());
  }
  return arr;
  }

  //creates solutions and stick it to the h1
  var solution = function () {
    var a = colors[Math.floor(Math.random() * colors.length)];
    h1.textContent = a;
  }

  //function to assign colours to squares
  function start() {for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
       if (gameover === false && this.style.backgroundColor === h1.textContent) {
         changeColours();
       }
       else if (gameover === false) {
         this.style.visibility = "hidden";
         result.textContent = "TRY AGAIN!"
       }
    });
      if (colors[i] === undefined) {
        squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
  }

  //create rgb colours
  function rgb() {
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";
  }

//function to change colours after win
  function changeColours() {
    //change colour to winning colour
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = h1.textContent;
    }
    //change h1 to winning colour
    for (var i = 0; i < h1all.length; i++) {
    h1all[i].style.backgroundColor = h1.textContent;
  }
  //change text
  result.textContent = "YOU WIN!";
  replay.textContent = "Play again?"
  gameover = true;
}

game(6);
