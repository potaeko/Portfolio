
/* =============================================
                Video Button
============================================= */
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


/* =============================================
                Animated CSS
============================================= */
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
          },2000);
      });
      
      this.destroy();
  },{offset: 'bottom-in-view'});
  
});


/* =============================================
                Portfolio
============================================= */

$('document').ready(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|UC Browser/i.test(navigator.userAgent) ) {
     $('.videoShow').hide();
     $('.imageShow').show();
    }

    else {
     $('.videoShow').show();
     $('a').remove('.img-response');
     $('.imageShow').hide();
    }
});

function playHover(el){
   el.play();
}

function pauseUnhover(el){
  el.pause();
  el.currentTime = 0;
}

/*===============================================
                   NAVIGATION
    Show/Hide transparent black navigation
================================================*/
$(function(){
    $(window).scroll(function(){
        // if scroll top lower than 100px we wwant to hide Nav bar
        if($(this).scrollTop()<20){
            //hide nav, select nav element
            $("nav").removeClass("top-nav");
            // $("#back-to-top").fadeOut();
        }
        else{
            //show nav
            $("nav").addClass("top-nav");
            // $("#back-to-top").fadeIn();
        }
    });
});

//Smooth scrolling
// $(document).ready(function(){
//     $('body').scrollspy({
//         target: "#myScrollspy", 
//         offset: 50});   
//   });


// $(function(){
//     $("a.smooth-scrolling").click(function(event){
//         //stop open link url
//         event.preventDefault(); 
//         //this = a
//         //get/return id like #about, #work, #team and etc, if clicked 
//         var section = $(this).attr("href");
        
//         //animate
//         $('html, body').animate({
//             scrollTop: $(section).offset().top-64
//         }, 1250,"easeInOutExpo"); //how long animation will run 1.25sec

//     });
// });

// //Close mobile menu on click : click menu == click toggle button to close
// $(function(){
//         //class name for a tag in li
//     $(".navbar-collapse ul li a").on("click touch",function(){
//         //class name of toggle button
//         $(".navbar-toggle").click();
//     });

// });