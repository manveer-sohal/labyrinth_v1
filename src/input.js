import Player from "/src/player";

export default class Input {
  constructor(player) {
    let canvas = document.getElementById("gamescreen");
    let ctx = canvas.getContext("2d");
    //let player = new Player();
    document.addEventListener("keydown", onKeyDown);
    function onKeyDown() {
      switch (event.keyCode) {
        case 37:
          player.moveLeft(ctx);
          //alert(window.pageXOffset + window.pageYOffset);
          break;

        case 39:
          player.moveRigth();
          break;

        case 38:
          player.moveUp();
          break;

        case 40:
          player.moveDown();
          break;
      }
    }

    document.addEventListener("keyup", onkeyup);
    function onkeyup() {
      switch (event.keyCode) {
        case 37:
          player.stopX();
          break;

        case 39:
          player.stopX();
          break;

        case 38:
          player.stopY();
          break;

        case 40:
          player.stopY();
          break;
      }
    }
  }
}
