var video = document.querySelector('#hero-video');

var videoBtn = document.querySelector('#hero-video-btn');

function videoFunction() {
    if (video.paused) {
        video.play();
        videoBtn.innerHTML = "(pause)";
    } else {
        video.pause();
        videoBtn.innerHTML ="(play)";
    }
};