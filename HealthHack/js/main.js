$('.why-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.tabs-nav li').click(function(e) {
    var a = $(this),
        parent = a.parents('.tabs'),
        nav = parent.children('.tabs-nav').children('li'),
        box = parent.children('.tabs-box').children('div');

    if (!a.hasClass('active')) {
        a.addClass('active')
            .siblings().removeClass('active');

        box.eq(a.index()).addClass('active')
            .siblings().removeClass('active');
    }

    e.preventDefault();
});

! function(i) {
    var o, n;
    i(".title_block").on("click", function() {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
            o.hasClass("active_block") ? (o.removeClass("active_block"),
                n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                o.siblings(".active_block").removeClass("active_block").children(
                    ".info").stop(!0, !0).slideUp())
    })
}(jQuery);