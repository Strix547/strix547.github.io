$(document).ready(function() {
    $('#register, #register2').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal1')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#overlay, .modal .close').click(function () {
        $('#modal1,#modal2,#modal3')
            .animate({opacity: 0, top: '30%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    $('#sign-in').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal1')
                    .animate({opacity: 0, top: '30%'}, 200,
                        function () {
                            $(this).css('display', 'none');
                        });
                $('#modal2')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#register2').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal2')
                    .animate({opacity: 0, top: '30%'}, 200,
                        function () {
                            $(this).css('display', 'none');
                        });
                $('#modal1')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#lostPassword').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal2')
                    .animate({opacity: 0, top: '30%'}, 200,
                        function () {
                            $(this).css('display', 'none');
                        });
                $('#modal3')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#sign-in2').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal3')
                    .animate({opacity: 0, top: '30%'}, 200,
                        function () {
                            $(this).css('display', 'none');
                        });
                $('#modal2')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#register3').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal3')
                    .animate({opacity: 0, top: '30%'}, 200,
                        function () {
                            $(this).css('display', 'none');
                        });
                $('#modal1')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

});

function showAllSectionsTop() {
    document.addEventListener("click", function (evt) {
        var btn = document.querySelector(".search-block .sections");
        var menu = document.querySelector(".search-block .sections .menu");
        if (evt.target != btn) {
            menu.style.display = "none";
            menu.style.opacity = "0";
        }
    });
    var All = document.querySelector(".search-block .sections");
    var menu = document.querySelector(".search-block .sections .menu");
    All.addEventListener("click", function () {
        menu.style.display = "block";
        menu.style.opacity = "1";
    });
}

function showAllSectionsBottom() {
    var btnAll = document.querySelector("#all-sections");
    var block = document.querySelector("header .bottom-line .all");
    var menu = document.querySelector(".bottom .bottom-line .menu");
    btnAll.addEventListener("click", function (evt) {
        evt.preventDefault();
        menu.style.display = "block";
        menu.style.opacity = "1";
    });
    block.addEventListener("mouseleave", function () {
            menu.style.display = "none";
            menu.style.opacity = "0";
    });
}

showAllSectionsTop();
showAllSectionsBottom();