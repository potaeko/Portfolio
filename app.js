

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
$(function(){
  new WOW().init();
});

$(window).on('load', function(){
    $('.main-name').addClass('animated flipInX delay-1s');
    $('.sub-name').addClass('animated zoomInUp delay-1s');
    $('#hero-video-btn').addClass('animated zoomIn delay-1s');
});

/* =============================================
                Progress Bars
============================================= */

$(function(){
  $("#progress-elements").waypoint(function(){
      $(".progress-bar").each(function(){
          $(this).animate({
              width: $(this).attr("aria-valuenow") + "%"
          },1500);
      });
      
      this.destroy();
  },{offset: 'bottom-in-view'});
  
});




//Portfolio Gif
function hover(element,i) {
  var hoverSrc = ['src/busaba.gif', 'src/chutima.gif','src/solo.gif','src/vesco.gif'];
  element.setAttribute('src', hoverSrc[i]);
}

function unhover(element,i) {
  var unhoverSrc = ['src/busaba restaurant.jpg','src/chutima.jpg','src/solo.jpg','src/vesco.jpg'];
  element.setAttribute('src', unhoverSrc[i]);
}
