'use strict';

const videoID = [59777392, 76979871, 154373242, 417698855, 405883269];

const videos = document.getElementById('videos');

let options = {
  id: 59777392,
  autoplay: true,
  color: '00adef',
  loop: true,
};

let player = new Vimeo.Player('myVideo', options);
player.setVolume(0);

const playVimeo = function (id) {
  // load new video
  player
    .loadVideo(id)
    .then(function (id) {
      console.log(`Vimeo video ${id} successfully loaded`);
    })
    .catch(function (error) {
      console.log(`Vimeo video ${id} player error: ${error.name}`);
    });

  // Start playing video
  player
    .play()
    .then(function () {
      console.log(`Vimeo video ${id} is played`);
    })
    .catch(function (error) {
      console.log(`Vimeo video ${id} play error: ${error.name}`);
    });
};

videos.addEventListener('click', (e) => {
  let id = e.target.id;

  if (!id) id = e.target.parentNode.id;
  id = parseInt(id.charAt(id.length - 1));
  id = videoID[id - 1];

  playVimeo(id);
});
