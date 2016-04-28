(function(){
  var game         = new Game();
  var canvasWidth  = game.getCanvasWidth();
  var canvasHeight = game.getCanvasHeight();
  var controller   = new ActorController(game.getCanvasCtx(), canvasHeight, canvasWidth);
  // Add actors.
  function gameLoop() {
    controller.tick();
    // defer(gameLoop, 33.33);
  }

})();
