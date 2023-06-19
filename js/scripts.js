
(function ($) {
  $(document).ready(function () {
    "use strict";

   
    

    // LOCOMOTIVE
  /*  gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true,
      class: 'is-inview'
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();*/


       // BACK BUTTON RELOAD
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload()
      }
    };


    // ACCORDION
    var allPanels = $('.accordion > dd').hide();
    $('.accordion > dt > a').click(function () {
      $(this).parent().next().slideToggle();
      return false;
    });


    /* HAMBURGER */
    $('.hamburger').on('click', function () {
      $(".hamburger").toggleClass("active")
      $(".side-widget").toggleClass("active")
      $(".section-wrapper").toggleClass("no-transform")
    })

    /* SEARCH */
    $('.search-button').on('click', function () {
      $(".search-box").toggleClass("active")
      $(".section-wrapper").toggleClass("no-transform")
    })


    // PAGE TRANSITION
    $('body a').on('click', function (e) {

      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");


          }
        } else {
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);

        }
      }
    });


    // TAB
    $(".tab-nav li").on('click', function (e) {
      $(".tab-item").hide();
      $(".tab-nav li").removeClass('active');
      $(this).addClass("active");
      var selected_tab = $(this).find("a").attr("href");
      $(selected_tab).stop().show();
      return false;
    });


  });
  // END DOCUMENT READY


  // DATA BACKGROUND IMAGE
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", "url(" + $(this).data("background") + ")");
    }
  });


  // DATA BACKGROUND COLOR
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", $(this).data("background"));
    }
  });


  // IMAGE BOX CAROUSEL
  var swiper = new Swiper('.image-box-carousel', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    }
  });


  // SLIDER
  var sliderimages = new Swiper('.slider-images', {
    spaceBetween: 0,
    direction: 'vertical',
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    touchRatio: 0,

    pagination: {
      el: '.swiper-pagination-slider',
      clickable: true,
      renderBullet: function(index, className) {
          return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="4" stroke-width="7"></circle></svg></span>';
      },
  },

    loop: true,
    loopedSlides: 1,
    thumbs: {
      swiper: slidertexts
    }
  });


  // Product Slider
  new Swiper('.product-slider', {
      loop: true,
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 20,
      clickable: true,
      speed: 1000,
      parallax: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.upk-button-next',
        prevEl: '.upk-button-prev',
        clickable: true,
      },
      on: {
        slideNextTransitionEnd: (swiper) => {
          $('.product-slider .swiper-slide-active.swiper-slide').addClass('test');
          $('.product-slider .swiper-slide-next.swiper-slide').addClass('test');
       
        },
        slidePrevTransitionEnd: (swiper) => {
          $('.product-slider .swiper-slide').removeClass('test');
        }
  },
      pagination: {
           el: '.swiper-pagination-products',
           clickable: true,
           renderBullet: function(index, className) {
               return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="7"></circle></svg></span>';
           },
       },
      breakpoints: {
          1024: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 2,
          },
          480: {
              slidesPerView: 1,
          }
      }
  });


  // News Events Slider
  new Swiper('.news-slider', {
      loop: true,
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 15,
      speed: 2000,
      clickable: true,
      slideToClickedSlide: true,
      autoplay: 
      {
        delay: 2000,
      },
      navigation: {
        nextEl: '.upk-button-next',
        prevEl: '.upk-button-prev',
        clickable: true,
      },
      pagination: {
           el: '.swiper-pagination-news',
           clickable: true,
           renderBullet: function(index, className) {
               return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="7"></circle></svg></span>';
           },
       },
      breakpoints: {
          1024: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 2,
          },
          480: {
              slidesPerView: 1,
          }
      }
  });
   
  new Swiper('.product-images-slider', {
    loop: true,
    slidesPerView: 1,
    paginationClickable: true,
    speed: 1000,
    observer: true,
     observeParents: true,
    clickable: true,
    slideToClickedSlide: true,
    autoplay: 
    {
      delay: 2000,
    },

    pagination: {
         el: '.swiper-pagination-news',
         clickable: true,
         renderBullet: function(index, className) {
             return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="7"></circle></svg></span>';
         },
     }
   
});

  // RELATED NEWS slider

  var swiper = new Swiper(".featured-news-slider", {
      
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    clickable: true,
    speed: 2000,
    slideToClickedSlide: true,
    autoplay: 
    {
      delay: 1000,
    },
    navigation: {
      nextEl: ".top-right-arrow-prev",
      prevEl: ".top-right-arrow-next",
    },

  });
  
  // news event grid slider

  var swiper = new Swiper('.news-grid-slider', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    slidesPerColumn: 2,
    spaceBetween: 20,
    slidesPerColumnFill: 'row',
  
    pagination: {
           el: '.swiper-pagination-news',
           clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="7"></circle></svg></span>';
            },
        },
  });

// work slider

  new Swiper('.work-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    speed: 2000,
    clickable: true,
    slideToClickedSlide: true,
    autoplay: 
    {
      delay: 2000,
    },
    
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        }
    }
  });


  // SLIDER THUMBS
  var slidertexts = new Swiper('.slider-texts', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

  });

  if ($(".slider-images")[0]) {
    sliderimages.controller.control = slidertexts;
    slidertexts.controller.control = sliderimages;
  } else {

  }


  var newproductslider = new Swiper(".fortesting", {
    parallax: true,
    speed: 1200,
    effect: 'fade',
    direction: "vertical",
    autoplay: true,
    navigation: {
      nextEl: '.upk-button-next',
      prevEl: '.upk-button-prev',
      clickable: true,
    },
      pagination: {
           el: '.swiper-pagination-products',
           clickable: true,
           renderBullet: function(index, className) {
               return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="7"></circle></svg></span>';
           },
       },
    });


  // KINETIC TEXTS
  var slidertexts = new Swiper('.kinetic-texts', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 1,
    effect: 'fade',
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

  });


  /* awards SLIDER */
  


  var sliderSelector = '.certificate-swiper-container',
  options = {
    init: false,
    loop: true,
    speed:600,
                                          slidesPerView: 4, // or 'auto'
                                          spaceBetween: 10,
                                          centeredSlides : true,
                                          effect: 'coverflow', // 'cube', 'fade', 'coverflow',
                                          coverflowEffect: {
                                            rotate: 45, // Slide rotate in degrees
                                            stretch: -5, // Stretch space between slides (in px)
                                            depth: 90, // Depth offset in px (slides translate in Z axis)
                                            modifier: 0.9, // Effect multipler
                                            slideShadows : true, // Enables slides shadows
                                          },
                                          grabCursor: true,
                                          parallax: true,
                                          pagination: {
                                            el: '.swiper-pagination',
                                            clickable: true,
                                          },
                                          navigation: {
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                          },
                                          breakpoints: {
                                            1023: {
                                              slidesPerView: 4,
                                              spaceBetween: 0
                                            }
                                          },
                                          // Events
                                          on: {
                                            imagesReady: function(){
                                              this.el.classList.remove('loading');
                                            }
                                          }
                                        };
                                        var mySwiper = new Swiper(sliderSelector, options);
                                        

                                        mySwiper.init();


  // SLIDER
  var artsliderimages = new Swiper('.art-slider-images', {
    spaceBetween: 0,
    speed: 1500,
    effect: 'fade',
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    loop: true,
    loopedSlides: 4,
    thumbs: {
      swiper: artslidercontent
    },
    breakpoints: {
      1024: {
        loopedSlides: 3,
      },
      768: {
        loopedSlides: 2,
      },
      640: {
        loopedSlides: 1
      },
      320: {
        loopedSlides: 1
      }
    }
  });


  // SLIDER THUMBS
  var artslidercontent = new Swiper('.art-slider-content', {
    spaceBetween: 20,
    direction: 'vertical',
    slidesPerView: 4,
    loop: true,
    speed: 1500,
    loopedSlides: 4,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.upk-button-next',
      prevEl: '.upk-button-prev',
      clickable: true,
    },
    pagination: {
      el: '.swiper-pagination-awards',
      clickable: true,
      renderBullet: function(index, className) {
          return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="7"></circle></svg></span>';
      },
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });

  if ($(".art-slider-images")[0]) {
    artsliderimages.controller.control = artslidercontent;
    artslidercontent.controller.control = artsliderimages;
  } else {

  }


})(jQuery);

