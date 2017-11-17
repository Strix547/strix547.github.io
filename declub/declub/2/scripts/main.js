$(document).ready(function() {

  $("._phone").mask("+7 (999) 999-99-99");
  // Mask

  var contactForm = $('.validate');
  // contactForm.validationEngine();
  contactForm.submit(function(e) { 
    e.preventDefault();
    if ($(this).validationEngine('validate')) {
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", 
        data: th.serialize()
      }).done(function() {
        window.location.href="thankyou.php"
      });
    }
    return false;
  });
  // validate forms

  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // preloader

  $('._mnu a[href^="#"]').click(function(e) {
    e.preventDefault();
    $(window).stop(true).scrollTo(this.hash, {
      duration:1000, 
      interrupt:true
    });
  });
  // Scrollto
	
	$('._carousel').owlCarousel({
		loop:true,
		items: 1,
		autoplay:true,
    autoplayTimeout:3000,
    dots: true,
    nav: true,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>"
      ],
    autoplayHoverPause:true  
	});
  // Carousel

  $('._navtabs a:first').addClass ('-active');
  $('._sleder_wrap ._tab:first').css ('display', 'block');
  $('._navtabs').delegate('a:not(.-active)', 'click', function() {
    $(this).addClass('-active').siblings().removeClass('-active')
    .parents('._sleder_wrap').find('._tab').hide()
    .eq($(this).index()).fadeIn('slow');
  });
  // Tabs carousel

  $("._hdn").click(function(){
    var did = $(this).attr("id")
    var text = $(this).text();
    if (text == "Свернуть"){
      $(this).html("<i class='fa fa-plus-circle'></i><span>Развернуть</span>");
    }
    else{
      $(this).html("<i class='fa fa-minus-circle'></i><span>Свернуть</span>");
    }
    $(".-section_hidden_"+did).slideToggle();
  });
  // Show hide btn

  var maxHeight = 0;
  $(".design_projects ._item ._descr").each(function(){
    if ( $(this).height() > maxHeight ) 
    {
      maxHeight = $(this).height();
    }
  });
  $(".design_projects ._item ._descr").css("min-height", maxHeight);
  // Auto height

  $('._callback').magnificPopup({
    type:'inline',
    midClick: true 
  });
  // ModalForm

  $('._detail_modal').magnificPopup({
    type:'image',
    gallery:{
      enabled:true
    },
    image: {
     titleSrc: function(item) {
      return item.el.parents('._item').find('._descr').html();
     }
   }
  });
  // Modal proj

  $('._slider_items').each(function() {
    $(this).magnificPopup({
      delegate: '._thumbs ._carousel .-gal',
      type:'image',
      gallery:{
        enabled:true,
        tCounter: ''
      },
      image: {
       titleSrc: function(item) {
        return item.el.parents('._slider_items').find('._descr').html();
       }       
     }
   });
  });
  // Gallery proj modal

  $("body").on("contextmenu", false);
  $("body").on("copy", false);
  // copy
});