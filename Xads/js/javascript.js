$(document).ready(function() {
    var pull = document.querySelector("#pull");
    var menu = document.querySelector("header .menu");
    pull.onclick = function (e) {
        e.preventDefault();
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    };
});

$(document).ready(function() {
    $('header a.sign-in').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#authorization')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('a.sign-up').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#registration')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('a.rules').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#rules')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('.modal_close, #overlay').click( function(){
        $('#authorization,#registration,#rules')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    $('#authorization a.sign-up').click( function(){
        $('#authorization')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                }
            );
    });
    $('#registration a.rules').click( function(){
        $('#registration')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                }
            );
    });
});
