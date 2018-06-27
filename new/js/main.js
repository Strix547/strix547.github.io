$(document).ready(function() {
    $('.requestCall').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal1')
                    .css('display', 'flex')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    $('header .bottom-line .burger').click( function(event) {
        event.preventDefault();
        var menu = document.querySelector("header .bottom-line ul");
        menu.classList.toggle("active");
    });

    $('.submitApplication').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal2')
                    .css('display', 'flex')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#overlay, .modal .close').click( function(){
        $('#modal1,#modal2')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    $(function() {
        $('form').submit(function(e) {
            var $form = $(this);
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize()
            }).done(function() {
                alert("Ваше сообщение успешно отправлено");
            }).fail(function() {
                alert("Ваше сообщение не было отправлено");
            });
            e.preventDefault();
        });
    });
});
