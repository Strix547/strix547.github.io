$(document).ready(function(){
  $('.main-slider').slick({
    infinite: true,
    prevArrow: '<div class="arrow arrow-left"><i class="fa fa-chevron-left"></i></div>',
    nextArrow: '<div class="arrow arrow-right"><i class="fa fa-chevron-right"></i></div>'
  });
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 5,
    prevArrow: '<div class="arrow arrow-left"><i class="fa fa-chevron-left"></i></div>',
    nextArrow: '<div class="arrow arrow-right"><i class="fa fa-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 774,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 774,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 562,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.brands-slider').slick({
    infinite: true,
    slidesToShow: 8,
    prevArrow: '<div class="arrow arrow-left"><i class="fa fa-chevron-left"></i></div>',
    nextArrow: '<div class="arrow arrow-right"><i class="fa fa-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.product-block-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    asNavFor: '.product-block-slider-nav',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          prevArrow: '<div class="arrow arrow-left"><i class="fa fa-chevron-left"></i></div>',
          nextArrow: '<div class="arrow arrow-right"><i class="fa fa-chevron-right"></i></div>'
        }
      }
    ]
  });
  $('.product-block-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-block-slider',
    focusOnSelect: true,
    draggable: false,
    vertical: true,
    prevArrow: '<div class="arrow arrow-up"><i class="fa fa-chevron-up"></i></div>',
    nextArrow: '<div class="arrow arrow-down"><i class="fa fa-chevron-down"></i></div>'
  });
});