$(document).ready(function() {
  console.log('ready...');
  var logTime = function(player) {
    var timeInterval = setInterval(function() {
      console.log('> ' + player.currentTime);
    }, 5000);
  }

  $('video').mediaelementplayer({
    success: function(player) {
      console.log('playing: ' + player.src);
      logTime(player);
    }
  });
});
