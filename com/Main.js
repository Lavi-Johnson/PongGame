(function(){
  var game         = new Game();
  var canvasWidth  = game.getCanvasWidth();
  var canvasHeight = game.getCanvasHeight();
  var controller   = new ActorController(game.getCanvasCtx(), canvasHeight, canvasWidth);
})();
