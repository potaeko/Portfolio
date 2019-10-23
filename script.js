/* =============================================
                 Preloader
    select 'window' on load and function 
    make sure that whole website is loaded
============================================= */
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

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
    $('.about-header-wrapper').addClass('animated fadeIn delay-.5s');
    $(".about-logo-item").each(function(){
        $(this).addClass('animated bounceInLeft ');
    });
    $('.about-skills-left').addClass('animated fadeInLeft delay-1s');
    $('.about-skills-right').addClass('animated fadeInRight delay-1s');
    $('.portfolio-header').addClass('animated fadeIn delay-.5s');
    $('.portfolio-wrapper-center').addClass('animated fadeIn delay-1s');
    $('.portfolio-left').addClass('animated fadeInLeft delay-1s');
    $('.portfolio-right').addClass('animated fadeInRight delay-1s');
    $('#contact').addClass('animated flipInX delay-2s');
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
        showHideNav();
        backToTop();
    });

    function showHideNav(){
        // if scroll top lower than 100px we wwant to hide Nav bar
        if($(this).scrollTop()<20){
            //hide nav, select nav element
            $("nav").removeClass("top-nav");
        }
        else{
            //show nav
            $("nav").addClass("top-nav");
        }
    }

    function backToTop(){
        if($(window).scrollTop()>50 && $(window).width()>900) {
            //Show Back To Top Button
            $("#back-to-top").removeClass("hide");
            $("#back-to-top").fadeIn();
        }
        else{
            //Hide Back To Top Button
            $("#back-to-top").fadeOut();
        }
    }

});

/*===============================================
                   NAVIGATION
                Smooth scrolling
================================================*/

$(function(){
    $("a.smooth-scroll").click(function(event){
        //prevent default event to open url
        event.preventDefault(); 

        var section_id = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop: $(section_id).offset().top-56
        }, 1000, "easeInOutExpo");
    });
});
