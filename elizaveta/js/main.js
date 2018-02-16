$(document).ready(function() {
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

(function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();

$("#pull").click(function() {
    $("#menu").toggleClass("open-menu");
});

$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest("#menu").length == 0) {
        $("#menu").removeClass("open-menu");
        $("#pull").removeClass("is-active");
    }
});
