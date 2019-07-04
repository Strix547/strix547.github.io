$(document).ready(function(){
  $('.custom-select').selectric();

  $('.custom-search > input').on('focus', function() {
    $(this).next().show();
  });
  $('.custom-search > label').on('click', function() {
    $(this).prev().val('');
    $(this).hide();
  });

  $('.custom-range input').jRange({
    from: 0,
    to: 100,
    step: 1,
    format: '%s',
    width: 117,
    isRange: true,
    showLabels: false,
    showScale: false,
    onstatechange: function() {
      const priceFrom = $("#price-input").val().split(',')[0],
            priceTo = $("#price-input").val().split(',')[1];
         
      $("#price-from").val(priceFrom);
      $("#price-to").val(priceTo);
    }
  });
  $('.count-block').on('input change paste', function() {
    $(this).val(this.value.replace(/[^0-9\-]/, ''));
  });
  $('.count-block .controls > div').on('click', function() {
    var input = $(this).closest('.count-block').find('input');
    var value = parseInt(input.val()) || 0;
    if ($(this).hasClass('minus')) {
      value = value - 1;
    }
    if ($(this).hasClass('plus')) {
      value = value + 1;
    }
    input.val(value).change(); 
  });
});