export default class Draw {
  constructor() {
    let canvas = document.getElementById("gamescreen");
    this.ctx = canvas.getContext("2d");
    this.stopped = false;
  }

  draw(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;

    //top of left wall
    //if (this.positionX < 500 && this.positionY > 250 ) {
    //this.positionY = 250;
    //console.log("top of left wall is touched");
    //}
    //left of left wall
    if (this.positionX < 500 && this.positionY > 260) {
      this.positionX = 500;
      this.stopped = true;
      console.log(this.positionX, "left wall has been touched");
    }
    //rigth wall
    if (this.positionX > 850) {
      this.positionX = 850;
      this.stopped = true;
    }
    if (this.positionY < 9) {
      this.positionY = 9;
      this.stopped = true;
    }
    this.ctx.fillStyle = "#f0f";
    this.ctx.fillRect(this.positionX, this.positionY, 50, 50);
    this.ctx.fillStyle = "#f00";
    //left wall
    //this.ctx.fillRect(0, 300, 500, 600);
    //top wall
    this.ctx.fillRect(0, -191, 1000, 200);
    this.ctx.fillRect(900, 0, 500, 670);
  }
}
