$(document).ready(function() {
    $("a.group").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'overlayShow' : true,
        'overlayOpacity' : 0.5,
        'speedIn'		:	600,
        'speedOut'		:	200
    });
    $('.gallery-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop: true,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

