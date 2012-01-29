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
        //var videoLength = player.duration;
        var videoLength = 866; //sec hardcoded lenght! don't change the video :)
        var elapsed = player.currentTime;
        var timelineWidth = $('#lane').width();
        var seekPosition = Math.round((elapsed / videoLength) * timelineWidth);

        var timelineRemainder = timelineWidth - seekPosition;
        var videoRemainder = Math.round(videoLength - elapsed);
        console.log('video length: ' + videoLength + 'sec, elapsed time: ' + elapsed + 'sec, timeline should scroll: ' + seekPosition + 'px, remaining timeline: ' + timelineRemainder + 'px, video time remaining: ' + videoRemainder);

        $('#lane')
          .stop()
          .animate({left: -1 * seekPosition}, {duration: 500})
          .animate({left: -1 * timelineRemainder}, {duration: videoRemainder * 1000});
      });

      player.addEventListener('play', function(event) {
        console.log('play >');
        //var videoLength = player.duration;
        var videoLength = 866; //sec, hardcoded lenght! don't change the video :)
        var elapsed = player.currentTime;
        var timelineWidth = $('#lane').width();
        var seekPosition = Math.round((elapsed / videoLength) * timelineWidth);

        var timelineRemainder = timelineWidth - seekPosition;
        var videoRemainder = Math.round(videoLength - elapsed);

        /* massive hack coming up... */
        var seekPosition = (seekPosition == 0) ? timelineWidth : seekPosition;
        console.log('video length: ' + videoLength + 'sec, elapsed time: ' + elapsed + 'sec, timeline should scroll: ' + seekPosition + 'px, remaining timeline: ' + timelineRemainder + 'px, video time remaining: ' + videoRemainder);

        $('#lane')
          .stop()
          .animate({
             left: -1 * timelineRemainder
           }, {
             duration: videoRemainder * 1000,
             step: function(now, fx) {
               //console.log('... we srolling.');
             }
           });

      })
    }
  });
});
