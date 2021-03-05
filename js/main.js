/*
	Marvel Theme Scripts
*/

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top");
			} else {
				header.removeClass("navbar-fixed-top");
			}

		});
	});

/*=========================================================================
        Isotope Active
=========================================================================*/
	$('.portfolio_items').imagesLoaded( function() {

		 // Add isotope click function
		$('.portfolio_filter li').on('click', function(){
	        $(".portfolio_filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".portfolio_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio_items").isotope({
	        itemSelector: '.single_item',
	        layoutMode: 'masonry',
	    });
	});

/*=========================================================================
        Testimonial Carousel
=========================================================================*/
    $('#testimonial_carousel').imagesLoaded( function() {
    	var testiSelector = $('#testimonial_carousel');
    	testiSelector.owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 500,
            items: 1,
            nav: false
        });
    });

    
/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
        Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	});      

/*=========================================================================
    Typed js Active
=========================================================================*/
    $(".typed").typed({
        strings: ["A Wine Lover.", "A Wine Enthusiast.", "Amo Vino."],
        loop: true,
        typeSpeed: 150
    });

/*=========================================================================
	NiceScroll Active
=========================================================================*/
    $(window).on('load', function() {
        $("html").niceScroll({
            background: "#060606",
            cursorcolor:"#ddd",
            cursorwidth:"16px",
            scrollspeed: 40,
            mousescrollstep: 60,
            cursorborder:"0px solid #eaeaea",
            cursorborderradius: "0px",
            autohidemode: false,
            zindex: "999"
        });  
    });
             
/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();
				 
/*=========================================================================
  Scroll To Top
=========================================================================*/     
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
             
/*=========================================================================
	MAILCHIMP
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

})(jQuery);
