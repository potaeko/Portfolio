

//video button
var video = document.querySelector('#hero-video');
var videoBtn = document.querySelector('#hero-video-btn');

function videoFunction() {
    if (video.paused) {
        video.play();
        videoBtn.innerHTML = "(pause)";
    } else {
        video.pause();
        videoBtn.innerHTML ="(code)";
    }
}


//animated
$(window).on('load', function(){
    $('.main-name').addClass('animated flipInX delay-1s');
    $('.sub-name').addClass('animated zoomInUp delay-1s');
    $('#hero-video-btn').addClass('animated zoomIn delay-1s');
});




function hover(element,i) {
  var hoverSrc = ['src/busaba.gif', 'src/chutima.gif'];
  element.setAttribute('src', hoverSrc[i]);
}

function unhover(element,i) {
  var unhoverSrc = ['src/busaba restaurant.jpg','src/chutima.jpg'];
  element.setAttribute('src', unhoverSrc[i]);
}
