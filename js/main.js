

(function ($) {
	"use strict";




// manu bar js End
  $(".menu_bar").click(function(){
    $(".header_menu").addClass("active");
  });
$(".menu-x").click(function(){
    $(".header_menu").removeClass("active");
  });
// menu bar js End






// preloader js Start
  $(window).on("load", function (event) {
        
        $("#preloader").delay(1000).fadeOut(500);

        /* Odometer */
        setTimeout(function() { 
            $(".odometer").waypoint(
                function () {
                    var odo = $(".odometer");
                    odo.each(function () {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                },
                {
                    offset: "80%",
                    triggerOnce: true,
                }
            );
        }, 1000);
    });

    $(".preloader-close").on("click", function () {
        $("#preloader").delay(0).fadeOut(500);
    });
// preloader js End



  


//----- hero slider
	$(".testimonial_slider_wrapper").owlCarousel({
		items: 4,
		dots: false,
		nav: true,
		autoplay: false,
		loop: true,
		navText: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
    responsive : {
			// breakpoint from 0 up
			0 : {
				items:1,
			},
			// breakpoint from 480 up
			480 : {
				items:1,
			},
			// breakpoint from 768 up
			768 : {
				items:2,
			},
			1351 : {
				items:3,
			},
			1451 : {
				items:4,
			}
		}
	});
	//----- hero slider
















//===== Sticky Menu-Bar Start
  $(window).on('scroll',function(event) {    
    var scroll = $(window).scrollTop();
      if (scroll < 20) {
        $(".header_area").removeClass("sticky");
      }else{
        $(".header_area").addClass("sticky");
      }
    });
  //===== Sticky Menu-Bar End








// Scroll Percentage js Start

    // Page Scroll Percentage

   $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });


    function scrollTopPercentage() {
        const scrollPercentage = () => {
            const scrollTopPos = document.documentElement.scrollTop;
            const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
            const scrollElementWrap = $("#scroll-percentage");

            scrollElementWrap.css("background", `conic-gradient( var(--orange-color) ${scrollValue}%, var(--white-color) ${scrollValue}%)`);
            
            // ScrollProgress
            if ( scrollTopPos > 100 ) {
                scrollElementWrap.addClass("active");
            } else {
                scrollElementWrap.removeClass("active");
            }

            if( scrollValue < 96 ) {
                $("#scroll-percentage-value").text(`${scrollValue}%`);
            } else {
                $("#scroll-percentage-value").html('<i class="fal fa-long-arrow-up"></i>');
            }
        }
        window.onscroll = scrollPercentage;
        window.onload = scrollPercentage;

        // Back to Top
        function scrollToTop() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        
        $("#scroll-percentage").on("click", scrollToTop);
    }

    scrollTopPercentage();

// Scroll Percentage js End





  











}(jQuery));	










(function ($) {
	"use strict";

// Hero section js Start
	//------- counterUp
	$('.coundown').counterUp({
		delay: 10,
		time: 1000
		});
	//------- counterUp
		
// Hero section js End


}(jQuery));	








(function ($) {
	"use strict";

// Hero section js Start


// Hero section js End







}(jQuery));	























(function ($) {
	"use strict";

// slide section js Start
ScrollReveal().reveal('.headline');

// slider section js End




}(jQuery));	






(function ($) {
	"use strict";

// slide section js Start


// slider section js End




}(jQuery));	