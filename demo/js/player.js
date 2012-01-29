$(document).ready(function() {
  console.log('ready...');

  var timelineScrolling = function(player) {
    var timeInterval = setInterval(function() {
      console.log('length: ' + player.duration);
      console.log('move it!');
      $('#lane').animate({"left": "-=20px"}, "slow");
    }, 5000);
  }

  $('video').mediaelementplayer({
    success: function(player) {
      console.log('playing: ' + player.src);
      //timelineScrolling(player);

      player.addEventListener('seeked', function(event) {
        //console.log('you seeked!');
        var videoLength = player.duration;
        var elapsed = player.currentTime;
        var timelineWidth = $('#lane').width();
        var seekPosition = Math.round((elapsed / videoLength) * timelineWidth);
        console.log('seek position: ' + seekPosition);

        var timelineRemainder = timelineWidth - seekPosition;
        var videoRemainder = Math.round(videoLength - elapsed);
        console.log('must scroll ' + videoRemainder + 'secs of timeline');

        var node = $('#lane');
        console.log(node);
        node
          .stop()
          .animate({left: -1 * seekPosition}, {duration: 500})
          .animate({left: -1 * timelineRemainder}, {duration: videoRemainder * 1000});
      });
    },
    play: function(player) {
      console.log('start.');
      var videoLength = player.duration;
      var elapsed = player.currentTime;
      var timelineWidth = $('#lane').width();

      var timelineRemainder = timelineWidth - seekPosition;
      var videoRemainder = Math.round(videoLength - elapsed);

      $('#lane').stop().animate({left: -1 * timelineRemainder}, {duration: videoRemainder * 1000});
    }
  });
});
