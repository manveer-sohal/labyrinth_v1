import Input from "/src/input";
import Player from "/src/player";
import Game from "/src/game";
import Draw from "/src/draw";

//make the canvas
let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

//variables
let gameWidth = window.outerWidth;
let gameHeight = window.outerHeight;
let player = new Player(gameWidth, gameHeight);
let input = new Input(player);
let game = new Game(gameWidth, gameHeight);
let draw = new Draw();
//gameloop

let LastTime = 0;

function gameloop(timestamp) {
  let deltaTime = timestamp - LastTime;
  LastTime = timestamp;

  ctx.clearRect(0, 0, gameWidth, gameHeight);
  //player.draw(ctx);
  //game.drawMap(ctx);
  //draw.draw(ctx);
  player.update(deltaTime);

  requestAnimationFrame(gameloop);
}
requestAnimationFrame(gameloop);
