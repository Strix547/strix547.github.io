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
            750:{
                items:2
            },
            1020:{
                items:3
            },
            1300:{
                items:4
            }
        }
    });
    $('.review-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 1
    });
    $(".bottom-line").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });
    $(".mark li").click(function(e) {
        e.preventDefault();
        $(".mark li").removeClass('active');
        $(this).addClass('active');
    })
    $(function() {
        $('form').submit(function(e) {
            var $form = $(this);
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize()
            }).done(function() {
                alert("Спасибо за заявку. В ближайшее время с вами свяжется администратор.");
            }).fail(function() {
                alert("Ваше сообщение не было отправлено");
            });
            e.preventDefault();
        });
    });
});

