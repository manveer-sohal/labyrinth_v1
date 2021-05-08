export default class game {
  constructor(positionX, positionY, gameWidth, gameHeight) {
    this.positionX = 700;
    this.positionY = 500;
    //this.gameWidth = outerWidth;
    //this.gameHeight = outerHeight;
  }

  getPlayerPosition(positionX, positionY, ctx) {
    this.positionX = positionX;
    this.positionY = positionY;

    //console.log(this.positionX);
  }
}
