$(document).ready(function(){

	$(".phone-inp").mask("+7 (999) 999-99-99");

    $(".slide img").lazyload({
        event : "sporty"
    });

	$('input, textarea').click(function(){
		$(this).css({"border-color": "#929292"});
	});

	$("a.smooth").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top);
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	$('.sandwich').click(function(){
		$('nav').toggleClass('active');
	});
    $('nav ul li a, header .header-bg, header .wrap, header .top-head > *:not(nav), section').click(function(){
        $('nav').removeClass('active');
    });
    if ((($(window).width()) < 880)) {
        $('.sandwich').click(function(){
            $('header').toggleClass('active');
            if ($('header').hasClass('active')) {
                $('body').css({'overflow-y':'hidden'});
            }
            else {
                $('body').css({'overflow-y':'auto'});
            }
        });
        $('nav ul li a').click(function(){
            $('nav').removeClass('active');
            $('header').removeClass('active');
            $('body').css({'overflow-y':'auto'});
        });
    }

    var pagerSlider1 = $('.projects #bx-pager1');
    var pagerSlider2 = $('.projects #bx-pager2');
    var projectSlider1 = $('.p1 .media-slider');
    var projectSlider2 = $('.p2 .media-slider');
    function initiateSliders() {
            pagerSlider1.bxSlider({
                mode: 'horizontal',
                speed: 500,
                slideWidth: 140,
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                slideMargin: 20,
                touchEnabled:false,
                infiniteLoop: true
            }); 
            pagerSlider2.bxSlider({
                mode: 'horizontal',
                speed: 500,
                slideWidth: 140,
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                slideMargin: 20,
                touchEnabled:false,
                infiniteLoop: true
            });       
            projectSlider1.bxSlider({
                mode: 'horizontal',
                speed: 500,
                slideWidth: 670,
                touchEnabled:false,
                pagerCustom: '#bx-pager1',
                infiniteLoop: true
            });
    		projectSlider2.bxSlider({
            	mode: 'horizontal',
            	speed: 500,
            	slideWidth: 670,
            	touchEnabled:false,
            	pagerCustom: '#bx-pager2',
            	infiniteLoop: true
            });
            $('.projects .pager-slider .bx-prev').on( "click", function() {
                projectSlider1.goToPrevSlide();
                projectSlider2.goToPrevSlide();
            });
            $('.projects .pager-slider .bx-next').on( "click", function() {
                projectSlider1.goToNextSlide();
                projectSlider2.goToNextSlide();
            });
    }

    // Переключение табов
	var tabSort = "p2";
	$('.projects .tabs-wrp .tab').removeClass('active');
    $('.projects .col').hide();
    $('.projects .tabs-wrp .tab.' + tabSort).addClass('active');
    $('.projects .col.' + tabSort).show();
    initiateSliders();

    $('.projects .tabs-wrp .tab').click(function(){
        var tabSort = $(this).attr('class').split(' ')[1];
        $('.projects .tabs-wrp .tab').removeClass('active');
        $('.projects .col').hide();
        $('.projects .tabs-wrp .tab.' + tabSort).addClass('active');
    	$('.projects .col.' + tabSort).show();

        pagerSlider1.destroySlider();
        pagerSlider2.destroySlider();
        projectSlider1.destroySlider();
        projectSlider2.destroySlider();
        $('.projects .p1 .pager-slider').html(pagerSlider1);
        $('.projects .p2 .pager-slider').html(pagerSlider2);
        initiateSliders();

    });


    // Открывает поп-ап с фотографиями
	var photoSlider;
	$('.style-wrp .open-photo-popup').click(function(){
        var type = $(this).attr('class').split(' ')[1];
        $('.dialogs .popup').removeClass('active').hide();
        $('.popup.photo.'+ type).show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.popup.photo.'+ type).addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});

        photoSlider = $('.popup.photo.' + type + ' .photo-slider');
        photoSlider.bxSlider({
            mode: 'horizontal',
        	speed: 500,
        	slideWidth: 970,
			slideMargin: 0,
        	touchEnabled:false,
        	infiniteLoop: true,
            onSliderLoad: function() {
                $("body").keydown(function(e) {
                    if (e.keyCode == 37) { // left
                        photoSlider.goToPrevSlide();
                    } else if(e.keyCode == 39) { // right
                        photoSlider.goToNextSlide();
                    }
                });
            }
        });

        $(".dialogs .close, .dialogs .close-bg").click(function() {
            // var keeppager = $(pager);
             //productslider.goToSlide(0);
            photoSlider.destroySlider();
            // photoSlider.after(keeppager);
        });
        return false;
    });

	$('.about-us').each(function () {
		var block = $(this);
		var couter = 0;
		$(window).scroll(function() {
		var top = block.offset().top;
		var bottom = block.height()+top;
			top = top - $(window).height() + 600;
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (couter === 0){
					$('.about-us .side-window').addClass('open');
					couter++;
				}
			} 
		});
	});

    // Обработка Блока Наши услуги сворачивание списка
    $('.services .col .item ul li ul').slideUp();
    $('.services .col .item ul li .dot').click(function(){
        $(this).parent().find('ul').slideToggle();
    });
    // Открываем боковое окно с видео
	$('.work .item a').click(function(){
        $('.side-window-closer').show();
        $('.side-window').removeClass('open');
        $('body').css({'overflow-y':'auto'});
        var type = $(this).attr('class').split(' ')[0];
		$('.work .side-window.' + type).addClass('open');
		$('body').css({'overflow-y':'hidden'});
		return false;
	});
    // Закрываем боковое окно с текстом
	$('.side-window .close,.close-window, .side-window-closer').click(function(){
        $('.side-window-closer').hide();
		$('.side-window').removeClass('open');
		$('body').css({'overflow-y':'auto'});
		return false;
	});

    //Открывает поп-ап Requset
    $('.open-request').click(function(){
        var category = $(this).attr('class').split(' ')[1];
        $('.dialogs .popup').removeClass('active').hide();
        $('.callback.request.' + category).show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.callback.request.' + category).addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });
    //Подставляет правильные цены и площади в попап
    $('.open-request.projectprice').click(function(){
        var squarecount = $(this).find('.dot').clone();
        var squareprice = $(this).find('.hov-text').clone();
        $('.popup.request.projectprice .squarecount').html(squarecount);
        $('.popup.request.projectprice .squareprice').html(squareprice);
    });

    //Открывает поп-ап обратный звонок
    $('.open-callback-popup').click(function(){
        $('.dialogs .popup').removeClass('active').hide();
        $('.callback-popup').show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.callback-popup').addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    //Открывает поп-ап с формой нужной категории
    $('.open-form').click(function(){
        var category = $(this).attr('class').split(' ')[2];
        $('.dialogs .popup').removeClass('active').hide();
        $('.popup.form.' + category).show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.popup.form.'+ category).addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });
    
    //Открывает поп-ап c отзывами
    $('.recommend .readmore').click(function(){
        var category = $(this).attr('class').split(' ')[1];
        $('.dialogs .popup').removeClass('active').hide();
        $('.reviews-popup.' + category).show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.reviews-popup.' + category).addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });
    //Открывает поп-ап c политикой конфидециальности
    $('.open-polytic').click(function(){
        $('.dialogs .popup').removeClass('active').hide();
        $('.polytic-popup').show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.polytic-popup').addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $(".dialogs .close, .dialogs .close-bg").click(function() {
        $('.dialogs .popup').removeClass('active');
        $(".dialogs").animate({"opacity":0}, 200, function() {
            $(".dialogs").hide();
            $('.dialogs .popup').hide();
            $('.dialogs .thanks-popup').hide();
        });
        $('body').css({'overflow-y':'auto'});
    });

    $('.target-under-100').on('click', function(){
        yaCounter38127315.reachGoal('under100');
        ga('send', 'event', 'square', 'under100');
    });
    $('.target-under-300').on('click', function(){
        yaCounter38127315.reachGoal('under300');
        ga('send', 'event', 'square', 'under300');
    });
    $('.target-above-300').on('click', function(){
        yaCounter38127315.reachGoal('above300');
        ga('send', 'event', 'square', 'above300');
    });
    

	$(".fancybox-r").fancybox({
        padding: 0,
        openEffect : 'elastic',
        openSpeed  : 600,
        closeEffect : 'elastic',
        closeSpeed  : 600,
        closeClick : true,
        helpers : {
            overlay : {
                speedOut : 0
            }
        }
    });
	
});	
$(window).load(function(){

    var time = 30000;
     setTimeout(function(){
        $('.about-us .side-window').removeClass('open');
     },time);

    var timeout = setTimeout(function() {$(".slide img").trigger("sporty")}, 2000);
    
});