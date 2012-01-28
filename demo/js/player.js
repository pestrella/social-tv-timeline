$(document).ready(function() {
  console.log('ready...');
  var logTime = function(player) {
    var timeInterval = setInterval(function() {
      console.log('> ' + player.currentTime);
    }, 5000);
  }

  var timelineScrolling = function(player) {
    var timeInterval = setInterval(function() {
      console.log('move it!');
      $('#lane').animate({"left": "-=20px"}, "slow");
    }, 5000);
  }

  $('video').mediaelementplayer({
    success: function(player) {
      console.log('playing: ' + player.src);
      //logTime(player);
      /* TODO: requires callback which moves the timeline
       * e.g. timeline.moveTo(player.currentTime);
       */
      timelineScrolling(player);
    }
  });
});
