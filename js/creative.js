/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    //Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 200
        }
    });
   // $(window).off('.affix')


   //  $('#experiences').affix({
   //  offset:500
   //  });
   //  $('#experiences').removeData('bs.affix').removeClass('affix affix-top affix-bottom')
   //  $('#experiences').on('affix.bs.affix', function () {
   //  alert('Fired!');
   // });
    
    $(window).scroll(function(){
        if ($(document).scrollTop()<300) {
             $('#mainNav').removeClass("affix");
                  $('#mainNav').removeClass("black");
        }else{
        
             if (($(document).scrollTop()-$('#experiences').offset().top)>-200) {
               // alert("ha");
                $('#mainNav').removeClass("affix");
                 $('#mainNav').addClass("black");
               // $('#mainNav').addClass("navbar-rev");
            // $('#mainNav').addClass("mynav-black");
            }else{
                 $('#mainNav').removeClass("black");
                     $('#mainNav').addClass("affix");

            }
    }
    });
    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict


