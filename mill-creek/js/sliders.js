const headerSlider = new Swiper('#main-slider', {
  navigation: {
    nextEl: '.btn-next-unique',
    prevEl: '.btn-prev-unique',
  }
})

const licenseSlider = new Swiper('#license-slider', {
  slidesPerView: 3,
  spaceBetween: -120,
  initialSlide: 1,
  navigation: {
    nextEl: '.btn-next-unique',
    prevEl: '.btn-prev-unique',
  }
})

