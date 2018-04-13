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
        var map = document.querySelector("#contacts .map");
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
    $("header .burger").on("click", function (evt) {
        var nav = document.querySelector("header .top-line nav");
        var telephones = document.querySelector("header .top-line .telephones");
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
        if (telephones.style.display === "flex") {
            telephones.style.display = "none";
        } else {
            telephones.style.display = "flex";
        }
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