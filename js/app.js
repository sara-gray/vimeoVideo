'use strict';

const videoID = [59777392, 76979871, 154373242, 417698855, 405883269];

const videos = document.getElementById('videos');

let options = {
  id: 59777392,
  width: 640,
  loop: true
};

let player = new Vimeo.Player('myVideo', options);
player.setVolume(0);

const playVimeo = function (id) {
  // unload video
  // load new video

  player.loadVideo(id).then(function (id) {
    // the video successfully loaded
    console.log(`Vimeo video ${id} loaded`);
  }).catch(function (error) {
    console.log('vimeo error');
    switch (error.name) {
      case 'TypeError':
        // the id was not a number
        break;

      case 'PasswordError':
        // the video is password-protected and the viewer needs to enter the
        // password first
        break;

      case 'PrivacyError':
        // the video is password-protected or private
        break;

      default:
        // some other error occurred
        break;
    }
  });
  // Start playing
  player.play().then(function () {
    // the video was played
    console.log(`Vimeo video ${id} played`);
  }).catch(function (error) {
    switch (error.name) {
      case 'PasswordError':
        // the video is password-protected and the viewer needs to enter the
        // password first
        break;

      case 'PrivacyError':
        // the video is private
        break;

      default:
        // some other error occurred
        break;
    }
  });
}

videos.addEventListener('click', (e) => {
  let id = e.target.id;

  if (!id) id = e.target.parentNode.id;
  id = parseInt(id.charAt(id.length - 1));
  id = videoID[id - 1];

  playVimeo(id);

});