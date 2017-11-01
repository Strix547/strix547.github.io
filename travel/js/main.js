var swiper = new Swiper('.swiper-container' ,{
	effect: 'coverflow',
	loop: true,
	centeredSlides: true,
	slidesPerView: 3,
	initialSlide: 3,
	keyboardControl: true,
	mousewheelControl: true,
	lazyLoading: true,
	preventClicks: false,
	preventClicksPropagation: false,
	lazyLoadingInPrevNext: true,
	nextButton: '.swiper-button-next',
	   prevButton: '.swiper-button-prev',
		coverflow: {
		rotate: 0,
		stretch: 0,
		depth: 250,
		modifier: 1,
		slideShadows : false,
	}
});
$('.slick-slider').slick({
	speed: 300,
	responsive: [
	  {
	    breakpoint: 1000,
	    settings: {
	      slidesToShow: 2,
	      slidesToScroll: 1,
	      infinite: true,
	      dots: false
	    }
	  },
	  {
	    breakpoint: 600,
	    settings: {
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      infinite: true,
	      dots: false
	    }
	  },
	  {
	    breakpoint: 480,
	    settings: {
	      slidesToShow: 1,
	      slidesToScroll: 1
	    }
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
});