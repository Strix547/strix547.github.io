$(document).ready(function() {
    $("header .arrow-down").on("click", function (evt) {
        evt.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });
    $("#contacts .hide").on("click", function (evt) {
        var form = document.querySelector("#contacts form");
        var info = document.querySelector("#contacts .info");
        var overlay = document.querySelector("#contacts .overlay");
        var map = document.querySelector("#contacts #map");
        if (!$(this).data('status')) {
            $(this).html('Развернуть');
            $(this).data('status', true);
        }
        else {
            $(this).html('Свернуть');
            $(this).data('status', false);
        }
        map.classList.toggle("visible");
        info.classList.toggle("hidden");
        form.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
    });
    $('.openModal').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#overlay').click( function(){
        $('#modal')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    $("header .burger").toggle(function() {
            $("header .top-line nav, header .top-line .telephones").fadeIn();
            return false;
        },
        function() {
            $("header .top-line nav, header .top-line .telephones").fadeOut();
            return false;
        });
    $('.members').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        responsive:{
            0:{
                items:1,
                margin: 0
            },
            1270:{
                items:2
            }
        }
    });
});