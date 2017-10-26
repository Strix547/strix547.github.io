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