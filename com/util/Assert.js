/**
 * Created by Lavi on 4/28/16.
 */
var Assert = (function() {
  var isDebugMode = true;
  return {
    is: function(bool, message){
      if (!bool && isDebugMode) {
        throw new Error(message);
      }
    },
    setDebugModeTo: function(debugMode) {
      isDebugMode = debugMode;
    }
  };
})();