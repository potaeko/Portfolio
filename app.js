

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




function hover1(element) {
    element.setAttribute('src', 'src/busaba.gif');
  }
  
  function unhover1(element) {
    element.setAttribute('src', 'src/busaba restaurant.jpg');
  }

  function hover2(element) {
    element.setAttribute('src', 'src/chutima.gif');
  }
  
  function unhover2(element) {
    element.setAttribute('src', 'src/chutima.jpg');
  }