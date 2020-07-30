$(document).ready(function() {

    jQuery(document).ready(function() {
        var s = jQuery(".navbar ");
        var pos = s.position();
        jQuery(window).scroll(function() {
            var windowpos = $(window).scrollTop();
            if (windowpos >= pos.top & windowpos >= 70) {
                s.addClass("sticky ");
                s.addClass(" ");
            } else {
                s.removeClass("sticky ");
            }
        });
        AOS.init({
            once: true,
            disable: function() {
                var maxWidth = 576;
                return window.innerWidth < maxWidth;
            }
        });

    });
    $('.below a').on('click', function(e) {

        e.preventDefault();
        // document.getElementById(target).scrollIntoView({ block: 'start',  behavior: 'smooth' });
        let target = document.querySelector(event.target.hash);
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });
   

     $( ".overlay-form" ).click(function(e) {
          e.preventDefault();
            $(".kz-lead-form").addClass("is-open")
            $("body").addClass("scroll-body")
        });

        $( ".kz-lead-form-close" ).click(function(e) {
          e.preventDefault();
            $(".kz-lead-form").removeClass("is-open")
              $("body").removeClass("scroll-body")
        });
         $( "#overlayClose" ).click(function(e) {
          e.preventDefault();
            $(".kz-lead-form").removeClass("is-open")
              $("body").removeClass("scroll-body")
        });

});