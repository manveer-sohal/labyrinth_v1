//import Game from "/src/game";
import Draw from "/src/draw";

export default class Player {
  constructor() {
    this.positionX = 700;
    this.positionY = 500;
    this.Xspeed = 0;
    this.Yspeed = 0;
    this.speed = 7;
    this.vertical = false;
    this.horizontal = false;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    //this.mapY = 200;
    //this.mapX = 0;
    //this.game = new Game();
    this.draw = new Draw();
    this.counter = 0;
  }

  moveLeft() {
    this.Xspeed = 0;
    this.Xspeed = -this.speed;
    this.horizontal = true;
  }

  moveRigth() {
    this.Xspeed = 0;
    this.Xspeed = this.speed;
    this.horizontal = true;
    console.log(this.positionX, "rigth");
  }

  moveUp() {
    this.Yspeed = 0;
    this.Yspeed = -this.speed;
    this.vertical = true;
    console.log(this.Yspeed, "up");
  }
  moveDown() {
    this.Yspeed = 0;
    this.Yspeed = this.speed;
    this.vertical = true;
    console.log(this.Yspeed, "down");
  }

  stopX() {
    this.Xspeed = 0;
    this.horizontal = false;
    this.vertical = false;
  }

  stopY() {
    this.Yspeed = 0;
    this.horizontal = false;
    this.vertical = false;
  }
  draw(ctx) {
    this.game.getPlayerPosition(this.positionX, this.positionY, ctx);
  }

  diagonal() {
    this.Yspeed /= 1.5;
    this.Xspeed /= 1.5;
    this.vertical = false;
    this.horizontal = false;
  }

  update(deltaTime) {
    if (this.vertical == true && this.horizontal == true) {
      this.diagonal();
    } else this.positionY += this.Yspeed;
    this.positionX += this.Xspeed;
    this.draw.draw(this.positionX, this.positionY);
  }
}
