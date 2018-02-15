$(document).ready(function() {
    $('#pull').click( function(event){
        event.preventDefault();
        var menu = document.querySelector("header .top-line nav ul");
        if (menu.style.display === "block") {
            $('header .top-line ul')
                .css('display', 'none')
                .animate({display: 'none', opacity: 0, top: '-100px'}, 400);
        } else {
            $('header .top-line ul')
                .css('display', 'block')
                .animate({display: 'block', opacity: 1, top: '0'}, 400);
        }

    });

    $("header .top-line").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });
});