import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = throttle(function (data) {
    const currentTime = data.seconds;
localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', onPlay);

const savedTime =
  parseFloat(localStorage.getItem('videoplayer-current-time')) ?? 0;

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
    console.log('The player seeked to:', seconds, 'seconds');
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'The time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        console.log('Some other error occurred:', error);
        break;
    }
  });
