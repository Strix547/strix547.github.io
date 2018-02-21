$(document).ready(function() {
    $("a.group").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'overlayShow' : true,
        'overlayOpacity' : 0.5,
        'speedIn'		:	600,
        'speedOut'		:	200
    });
    $("header .top-line").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });

    if($(window).width() > 1280) {
        var menu = document.querySelector('#menu');
        menu.style.position = 'static';
        menu.style.visibility = 'visible';
        menu.style.height = 'auto';
    }

    $("#phone").mask("+7 (999) 999 - 99 - 99");
});

(function () {
    var toggle = document.querySelector('#pull');

    toggle.onclick = function () {
        var menu = document.querySelector("#menu");
        this.classList.toggle('is-active');
        if (menu.classList.contains("open-menu")) {
            $("#menu").removeClass("open-menu");
        } else {
            $("#menu").addClass("open-menu");
        }
    }
})();

$(document).click( function(event){
    if( $(event.target).closest("#menu").length || $(event.target).closest("#pull").length )
        return;
    $("#menu").removeClass("open-menu");
    $("#pull").removeClass("is-active");
    event.stopPropagation();
});


