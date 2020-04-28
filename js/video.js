// play video when user enters room. Pause when leaving
const video = document.getElementById('videoone');
video.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const userPositionx = this.el.getAttribute('position')["x"];
	const userPositionz = this.el.getAttribute('position')["z"];
	//console.log(this.el.getAttribute('position'));
    if (userPositionx <= -12 && userPositionz >= 4.25) {
      video.play();
    } else {
      video.pause();
    }
  }
});

const video2 = document.getElementById('videotwo');
video2.pause();
AFRAME.registerComponent('listener2', {
  tick: function () {
    const userPositionx = this.el.getAttribute('position')["x"];
	const userPositionz = this.el.getAttribute('position')["z"];
	//console.log(this.el.getAttribute('position'));
    if (userPositionx >= 8 && userPositionz >= 4.25) {
      video2.play();
    } else {
      video2.pause();
    }
  }
});

// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  video.play();
  video2.play();
  video.pause();
  video2.pause();
  splash.style.display = 'none';
});
