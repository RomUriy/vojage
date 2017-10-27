$(document).ready(function() {

  // Animations:
  var wow = new WOW(
    {
      boxClass:     'wow',
      animateClass: 'animated',
      offset:       0,
      mobile:       true,
      live:         true,
      callback:     function(box) {

      },
      scrollContainer: null
    }
  );
  wow.init();


  //Calendar
  $( ".datepicker" ).datepicker();


  // Plyne menu:
  var menu = $('.menu_main');
  var links = menu.find('a');


  links.on("click", function(){
    var href = $(this).attr('href');
    var position = $(href).offset();
    $('html, body').animate({scrollTop: position.top}, 2000);
  });

  // Button GET STARTED:
  var div = $('.text_on_photo');
  var start = div.find('a');
  console.log(start);

  start.on('click', function(){
    $('html, body').animate({scrollTop:0}, 1000);
  });


  // Slider

  console.log('dziala');

  function slider() {
    var circle = $('#circles').children();
    var ul = $('.slider').find('ul');
    var li = ul.find('li');
    var index = 0;
    var width = li.width()*3+80; //1130


    var timerId = setInterval(function() {
      index=index+1;
      if (index>=(li.length/3)) {
        index = 0;
      }
      ul.animate({left: -(index*width)});
    }, 4000);

    ul.width(li.length * width);

    circle.on('click', function(){
      index=$(this).attr('data-index');

      ul.animate({left: -(index*width)});
    });

  }
  $(window).on('load', function(){
    console.log('onload');
    slider();
  });



  // MENU MOBILE:
  var button = $('.three_linii');
  var menu = $(".header");
  var close = $('.cancel');

  button.on('click', function() {
    menu.toggle(function(){
      if (menu.is(':visible')) {
      } else {
      }
    });
  });

  close.on('click', function(){
    menu.toggle(function(){
      if (menu.is(':visible')) {
      } else {
      }
    });
  });

  var menu_mobile = $('.menu_mobile');
  var link = menu_mobile.find('a');
  var menu = $(".header");
  // console.log(link);

  link.on('click', function(){
    var href = $(this).attr('href');
    var position = $(href).offset();
    $('html, body').animate({scrollTop: position.top}, 2000);
    menu.toggle(function(){
      if (menu.is(':visible')) {
      }
    });

  });



  // Arrow UP
  var arrow = $('.arrow').find('i');
  // console.log(arrow);

  arrow.hide();

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  });

  arrow.on('click', function(){
    $('html, body').animate({scrollTop:0}, 1000);
  });

  //BUTTON MOBILE:
  var button_mobile = $('.button_mobile');
  var mobile_booking = $('.mobile_booking');
  var close = $('.close');

  button_mobile.on('click', function(){
    mobile_booking.toggle(function(){
      if (mobile_booking.is(':visible')) {
      }
    });
  });

  close.on('click', function(){
    mobile_booking.toggle(function(){
      if (mobile_booking.is(':visible')) {
      }
    });
  });

  var volume_up = $('#menu').find(".fa-volume-up");
  var volume_off = $('#menu').find(".fa-volume-off");
  var video = $('#home').find("video");

  volume_up.on("click", function (){
    if(video.prop('muted')) {
      video.prop('muted', false);
      // video.prop("volume", 0.5);
    } else {
      video.prop('muted', true);
    }
  });

  volume_off.on("click", function (){
    if(video.prop('muted')) {
      video.prop('muted', false);
      // video.prop("volume", 0.5);
    } else {
      video.prop('muted', true);
    }
  });


  // Volume up oraz volume off z wykorzystaniem show() i hide();

  // volume_up.on('click', function(){
  //   volume_up.hide(function(){
  //     volume_off.show();
  //   });
  // });
  //
  // volume_off.on('click', function(){
  //   volume_off.hide(function(){
  //     volume_up.show();
  //   });
  // });

  // Volume up oraz volume off z wykorzystaniem class;
  volume_up.on('click', function(){
    if (volume_up.hasClass('display_none')) {
      volume_up.removeClass('display_none');
    } else {
      volume_up.addClass('display_none',  function(){
        volume_off.addClass('display_block');
      });
    }

  });

  volume_off.on('click', function(){
    if (volume_off.hasClass('display_block')) {
      volume_off.removeClass('display_block', function(){
        volume_up.removeClass('display_none');
      });
    } else {
      volume_off.addClass('display_block');
    }

  });

  var play = $('.right_side').find('i');
  var youtube = $('.youtube');
  var close_page = $('.close_page').find('i');

  play.on('click', function(){
    youtube.toggle(function(){
      if (youtube.is(':visible')) {
      }
    });
  });

  close_page.on('click', function(){
    youtube.toggle(function(){
      if (youtube.is(':visible')) {
      }
    });
  });



});



// document.addEventListener('DOMContentLoaded', function() {
//
//   var pauseVideo = document.querySelectorAll('iframe')[0];
//   console.log(pauseVideo);
//   var close_page_youtube = document.querySelector('.close_page');
//   // console.log(close_page_youtube);
//   var close_p = document.getElementsByTagName('i')[6];
//   console.log(close_p);
//
//   close_p.addEventListener('click', function(){
//     pauseVideo.stopVideo();
//
//   });
//
// });
