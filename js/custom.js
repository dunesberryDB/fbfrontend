AOS.init({
  // Global settings:
  disable: false,
  once: false,
  startEvent: 'DOMContentLoaded',
  offset: 200, // offset (in px) from the original trigger point
  anchorPlacement: 'top-bottom',

});
        $(document).ready(function(){
   $('.objective-info-slider').owlCarousel({
        items:1,
        loop:false,
       smartSpeed: 750
    });
});
      $('.objective-img-slider').owlCarousel({
        items:1,
        loop:false,
        center:false,
        margin:15,
        URLhashListener:true,
        autoplayHoverPause:true,
        smartSpeed: 750,
        nav: true,
        startPosition: 'URLHash'
    });

      $(".objective-info-container ul li a").click(function() {
    $('.objective-info-container ul li a').removeClass('active');
    $(this).addClass("active");
});

var owl = $(".objective-img-slider");
owl.owlCarousel();
$(".sus-next-btn").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".sus-prev-btn").click(function () {
  owl.trigger("prev.owl.carousel");
});
$(".sus-prev-btn").addClass("disabled");
$(owl).on("translated.owl.carousel", function (event) {
  if ($(".owl-prev").hasClass("disabled")) {
    $(".sus-prev-btn").addClass("disabled");
  } else {
    $(".sus-prev-btn").removeClass("disabled");
  }
  if ($(".owl-next").hasClass("disabled")) {
    $(".sus-next-btn").addClass("disabled");
  } else {
    $(".sus-next-btn").removeClass("disabled");
  }
});



      // jQuery(document).ready(function($) {
      //   $("a").click(function(e) {
      //     e.preventDefault();
      //     $id = $(this).attr("href");
      //     $("body,html").animate({
      //       scrollTop: $($id).offset().top
      //     }, 300);
      //   });
      // });
      if ($("#home-banner").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('home-banner'),
          handler: function() {

            $('.icons-nav ul li a').removeClass('active');
            $('a[href$="#home-banner"]').addClass('active');
          }
        });
      }
      if ($("#about-us").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('about-us'),
          handler: function() {
            $('.icons-nav').fadeToggle('d-block');
            $('.icons-nav ul li a').removeClass('active');
            $('a[href$="#about-us"]').addClass('active');
           
          },
          offset: 1

        });
      }
      if ($("#about-us").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('about-us'),
          handler: function(direction) {
            if (direction === 'up')
            {
              $('.icons-nav ul li a').removeClass('active');
              $('a[href$="#about-us"]').addClass('active');
                
            }
           
          },
          offset: -100

        });
      }

      if ($("#statistics-section").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('statistics-section'),
          handler: function() {
           
            $('.icons-nav ul li a').removeClass('active');
            $('a[href$="#statistics-section"]').addClass('active');
           
          },
          offset: 1

        });
      }

      if ($("#statistics-section").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('statistics-section'),
          handler: function(direction) {
            if (direction === 'up')
            {
              $('.icons-nav ul li a').removeClass('active');
              $('a[href$="#statistics-section"]').addClass('active');
            }
           
          },
          offset: -100

        });
      }

if ($("#our-products").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('our-products'),
          handler: function() {

            $('.icons-nav ul li a').removeClass('active');
            $('a[href$="#our-products"]').addClass('active');
          },
          offset: 1
        });
        }

        if ($("#our-products").length) {
          var waypoint = new Waypoint({
            element: document.getElementById('our-products'),
            handler: function(direction) {
              if (direction === 'up')
              {
                $('.icons-nav ul li a').removeClass('active');
                $('a[href$="#our-products"]').addClass('active');
              }
             
            },
            offset: -100
  
          });
        }

        if ($("#sustainability").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('sustainability'),
          handler: function() {

            $('.icons-nav ul li a').removeClass('active');
            $('a[href$="#sustainability"]').addClass('active');
          },
          offset: 1
        });
        }

        if ($("#sustainability").length) {
          var waypoint = new Waypoint({
            element: document.getElementById('sustainability'),
            handler: function(direction) {
              if (direction === 'up')
              {
                $('.icons-nav ul li a').removeClass('active');
                $('a[href$="#sustainability"]').addClass('active');
              }
             
            },
            offset: -100
  
          });
        }

        // if ($("#certificates-awards").length) {
        // var waypoint = new Waypoint({
        //   element: document.getElementById('certificates-awards'),
        //   handler: function() {

        //     $('.icons-nav ul li a').removeClass('active');
        //     $('a[href$="#certificates-awards"]').addClass('active');
        //   },
        //   offset: 1
        // });
        // }

        // if ($("#certificates-awards").length) {
        //   var waypoint = new Waypoint({
        //     element: document.getElementById('certificates-awards'),
        //     handler: function(direction) {
        //       if (direction === 'up')
        //       {
        //         $('.icons-nav ul li a').removeClass('active');
        //         $('a[href$="#certificates-awards"]').addClass('active');
        //       }
             
        //     },
        //     offset: -100
  
        //   });
        // }

        if ($("#join-our-community").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('join-our-community'),
          handler: function() {

            $('.icons-nav ul li a').removeClass('active');
            $('a[href$="#join-our-community"]').addClass('active');
          },
          offset: 1
        });
        }

        if ($("#join-our-community").length) {
          var waypoint = new Waypoint({
            element: document.getElementById('join-our-community'),
            handler: function(direction) {
              if (direction === 'up')
              {
                $('.icons-nav ul li a').removeClass('active');
                $('a[href$="#join-our-community"]').addClass('active');
              }
             
            },
            offset: -100
  
          });
        }



      if ($("#news-events").length) {
        var waypoint = new Waypoint({
          element: document.getElementById('news-events'),
          handler: function() {

            $('.icons-nav ul li a').removeClass('active');
            $('a[href$="#news-events"]').addClass('active');
          },
          offset: 1
        });
        }
      //  document.addEventListener("DOMContentLoaded", function() {
      //       window.addEventListener('scroll', function() {
      //           if (window.scrollY > 5) {

      //               document.getElementById('navbar_top').classList.add('fixed-top');

      //               // add padding top to show content behind navbar
      //               navbar_height = document.querySelector('.navbar').offsetHeight;
      //               document.body.style.paddingTop = navbar_height + 'px';
      //           } else {
      //               document.getElementById('navbar_top').classList.remove('fixed-top');

      //               // remove padding top from body
      //               document.body.style.paddingTop = '0';
      //           }
      //       });
      //   });

        $(document).ready(function() {

  var initScrollTop = $(window).scrollTop();
  $(".our-products-bg").css({'background-position-y' : (initScrollTop/30)+'%'});
  $(".our-products-bg").css({'background-position-x' : (initScrollTop/20)+'%'});
  $(".numbers-section").css({'background-position-x' : (initScrollTop/10)+'%'});
  $(".numbers-section").css({'background-position-y' : (initScrollTop/30)+'%'});
  $(".sketch-moving").css({'background-position-y' : (initScrollTop/80)+'%'});
  $(".newsevent-section").css({'background-position-x' : (initScrollTop/10)+'%'});
  $(".number-bg-image").css({'background-position-y' : (initScrollTop/10)+'%'});
  $(".number-bg-image").css({'background-position-x' : (initScrollTop/10)+'%'});
  $(".award-section").css({'background-position-x' : (initScrollTop/10)+'%'});
  $(window).scroll(function() {

    var scrollTop = $(window).scrollTop();

    $(".our-products-bg").css({'background-position-y' : (scrollTop/30)+'%'});
    $(".our-products-bg").css({'background-position-x' : (scrollTop/50)+'%'});
    $(".numbers-section").css({'background-position-x' : (scrollTop/30)+'%'});
    $(".numbers-section").css({'background-position-y' : (scrollTop/40)+'%'});
    $(".sketch-moving").css({'background-position-y' : (scrollTop/10)+'%'});
    $(".award-section").css({'background-position-x' : (scrollTop/50)+'%'});
    $(".newsevent-section").css({'background-position-x' : (scrollTop/60)+'%'});
    $(".number-bg-image").css({'background-position-y' : (scrollTop/60)+'%'});
    $(".number-bg-image").css({'background-position-x' : (initScrollTop/20)+'%'});
  });

});

$(window).on("load", function() {
  $(".loader").addClass("completein", 100);
  setTimeout(function() {
    $(".preloader").addClass("complete");
  }, 400);
  setTimeout(function() {
    $(".preloader").addClass("fadeit");
  }, 1500);
});


 $(".farabi-mega-menu").hover(
function() {
  $('.mega-menu-item-list>li').removeClass("aos-init aos-animate");
  $('.dropdown-menu.mega-menu', this).addClass("show").stop(true).slideDown("slow");
  $('.mega-menu-item-list>li', this).addClass("aos-init aos-animate");
},
function() {

  $('.dropdown-menu.mega-menu', this).removeClass("show").stop(true).slideUp("6000");
  $('.mega-menu-item-list>li', this).removeClass("aos-init aos-animate");
});


var waypoint = new Waypoint({
  element: document.getElementById('navbar-top'),
  handler: function(direction) {

    if(direction == 'down') {
      $("#site-header").addClass("test");
    }
    else
    {
      $("#site-header").removeClass("test");
    }
  },
  offset: '-300'
});


(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('site-header');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) {

      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

})();