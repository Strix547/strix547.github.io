$('.certificate-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.certificate-slider').find('.owl-nav').removeClass('disabled');
$('.certificate-slider').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-nav').removeClass('disabled');
});
$('.certificate-slider').find('.owl-dots').removeClass('disabled');
$('.certificate-slider').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-dots').removeClass('disabled');
});

$('.slider1').owlCarousel({
    dots: true,
    items: 1
});
$('.slider1').find('.owl-dots').removeClass('disabled');
$('.slider1').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-dots').removeClass('disabled');
});

$('.slider2').owlCarousel({
    dots: true,
    items: 1
});
$('.slider2').find('.owl-dots').removeClass('disabled');
$('.slider2').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-dots').removeClass('disabled');
});

$('.slider3').owlCarousel({
    dots: true,
    items: 1
});
$('.slider3').find('.owl-dots').removeClass('disabled');
$('.slider3').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-dots').removeClass('disabled');
});

$('.slider4').owlCarousel({
    dots: true,
    items: 1
});
$('.slider4').find('.owl-dots').removeClass('disabled');
$('.slider4').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-dots').removeClass('disabled');
});

$('.slider5').owlCarousel({
    dots: true,
    items: 1
});
$('.slider5').find('.owl-dots').removeClass('disabled');
$('.slider5').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-dots').removeClass('disabled');
});