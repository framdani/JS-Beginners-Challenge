var start = document.querySelector(".start");
var icone = document.querySelector(".decoration");
var text = document.querySelector(".text");
let canvas = document.getElementById("canvas");
let cmpt=0;
function Game() {
  this.score = null;
  this.speed = null;
  this.density = null;
  this.playElement = document.querySelector(".start");
  this.scoreElement = document.querySelector(".text");
  this.canvasElement = document.getElementById("canvas");
  this.timer = null;
  this.startedTime = null; //time from start game
  this.intervalId = null;
  this.updateTime = null;
  this.densityStep = null;
  this.balloonsArray = null;
  var thiz = this;
  this.updater = function () {
    thiz.updateGame();
  };
}
Game.prototype.startGame = function () {
  this.playElement.style.display = "none";
  this.intervalId = setInterval(this.updater, this.updateTime);
};
Game.prototype.pauseGame = function () {
  clearInterval(this.intervalId);
};
Game.prototype.updateScore = function(score){
  this.scoreElement.innerText = score;
  this.scoreElement.style.color="white";
  this.scoreElement.style.fontFamily= "Pacifico";
  
  
  
};
Game.prototype.updateGame = function () {
  this.densityStep += this.density;
  if (this.densityStep >= 1 && this.balloonsArray.length < 10) {
    for (var i = 0; i < parseInt(this.densityStep, 10); i++) {
      var tempBalloon = new Balloon(0, -53, "green", "normal");
      tempBalloon.positionX = tempBalloon.generateRandomXPos();
      ;
      var bal = document.createElement("div");
      bal.className = "balloon " + tempBalloon.color;
      bal.style.left = tempBalloon.positionX + "px";
      bal.style.bottom = tempBalloon.positionY + "px";
      var thiz = this;
      var index = this.balloonsArray.length;
      bal.onclick = function () {
        thiz.score +=100;
        thiz.updateScore("score : "+thiz.score);
        this.parentNode.removeChild(bal);
        if(thiz.score == 1000)
       alert("Good job ! You win!");
       
      };
      this.canvasElement.appendChild(bal);
      var tempObj = {};
      tempObj.bal= bal;
      tempObj.speed = tempBalloon.getRandomSpeed();
      tempObj.points = tempBalloon.points;
      this.balloonsArray.push(tempObj);
      //console.log(tempObj.speed);
    }
    this.densityStep = 0;
  }
  for (var i = 0; i < this.balloonsArray.length; i++) {
    this.balloonsArray[i].bal.style.bottom =
      parseInt(this.balloonsArray[i].bal.style.bottom, 10) +
      (3 + this.balloonsArray[i].speed) +
      "px";
  }
 
};

Game.prototype.initGame = function () {
  this.score = 0;
  this.speed = 0.01;
  this.density = 1000 / 4000;
  this.remainingLives = 5;
  this.updateTime = 100;
  this.densityStep = 1;
  this.balloonsArray = [];
  //this.scoreElem = document.getElementById('score-count');
};
function Balloon(x, y, color, type) {
  this.positionX = x;
  this.positionY = y;
  this.color = color;
  this.type = type;
}
Balloon.prototype.getRandomSpeed = function () {
  return Math.floor(Math.random() * 101) / 90;
};
Balloon.prototype.generateRandomXPos = function () {
 // console.log("document width = ", Math.floor(Math.random() * 450));
  return Math.floor(Math.random() * 450);
};
function hide() {
  icone.style.backgroundImage = "url('')";
  //text.style.display = "none";
  text.innerText="score:";
  canvas.style.width = "600px";
  canvas.style.height = "400px";
  canvas.style.position = "absolute";
}
window.addEventListener("load", function () {
  var a = new Game();
  a.initGame();
  start.addEventListener("click", function (event) {
    hide();
    a.startGame();
  });
});

