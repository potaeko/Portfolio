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
}


//animated
$(window).on('load', function(){
    $('.main-name').addClass('animated bounceInLeft delay-1s');
    $('.sub-name').addClass('animated zoomInUp delay-1s');
});