var diffEls = document.querySelectorAll(".diff__btn");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var header = document.querySelector(".colorHeader");
var colors = [];
var n = diffEl
var nineBtn = document.querySelector("diff__btn");
var sixBtn = document.querySelector(".six");
createBlocks(n);
resetGame();

function checkColors(e) {
  // your code here
  const color = e.target.style.backgroundColor;
  if (color === rgbEl.innerHTML) {
    //loop through all color blocks
    for (var i = 0; i < colorsBlocks.length; i++) {
      //change each color to match given color
      console.log(i)
      colorsBlocks[i].style.background = color;
    }
    statusEl.innerHTML = "YOU WON! A new game will start in a second";
    setTimeout(() => {
      resetGame();
    }, 2000);
  } else {
    e.target.style.background = "";
    statusEl.innerHTML = "Try Again";
  }
}

function resetGame() {
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  // header.style.background = "";
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
  // your code here
  for(let i = 0 ; i <= 1 ; i++){ 
    diffEls[i].addEventListener('click', ()=>{
    diffEls[0].classList.remove('active');
    diffEls[1].classList.remove('active');
    diffEls[i].classList.add('active');
    diffEls[i].innerHTML === '6' ? n = 6 : n = 9;
    resetGame()
  })
}
}
setNumberOfTiles()

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}

