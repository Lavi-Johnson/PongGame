/**
 * Created by Lavi on 4/28/16.
 */
function ActorController(canvasContext, canvasHeight, canvasWidth) {
  var actorsList;
  this.addActors = function(actors) {
    for (var i = 0, length = actors.length; i < length; i++) {
      Assert.is(actors[i] instanceof Actor, 'When adding actors, element ' + i + ' was not of class actor!');
      actorsList.push(actors[i]);
    }
  };
  this.tick = function() {
    for (var i = 0, length = actorsList.length; i < length; i++) {
      actorsList[i].tick();
    }
  };
}