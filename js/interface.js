( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/



	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}




    /*-------------------------------------------------------------------------------
	  Slider 
	-------------------------------------------------------------------------------*/


	
	if (typeof $.fn.revolution !== 'undefined') {
      
      $("#rev_slider").revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:8000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          }
        },
        viewPort: {
          enable:true,
          outof:"pause",
          visible_area:"80%"
        },
        responsiveLevels:[2048,1750,1192],
        gridwidth:[1180,1180,980],
        gridheight:[550],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"on",
        stopAfterLoops:0,
        shuffle:"off",
        autoHeight:"on",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }

  	$('.arrow-left').on('click', function(){
   	    $("#rev_slider").revprev();
  	});
  
	$('.arrow-right').on('click', function(){
	    $("#rev_slider").revnext();
	});

	$('.slide-number .total-count').text($('#rev_slider li').size());

    $('#rev_slider').bind("revolution.slide.onchange",function (e,data) {
	    $('.slide-number .count').text(data.slideIndex);
    });



    /*-------------------------------------------------------------------------------
	  Object Map
	-------------------------------------------------------------------------------*/



	$('.object-label').on('click', function(){
		$('.object-label').not(this).find($('.object-info')).fadeOut(200);
		$(this).find('.object-info').fadeToggle(200);
	});



   
	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
		                	$('.col-message, .success-message').show();
		                },

		                error: function(){
			                $('.col-message, .error-message').show();
			            }
			        });
			    }
			});
		});
	}
})(jQuery);
