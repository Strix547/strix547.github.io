var $page = $('html, body');

$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    items: 1
});

lightGallery(document.getElementById('lightgallery'));