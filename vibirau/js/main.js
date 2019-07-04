$(document).ready(function(){
  $("#catalog-link").click(function() {
    $("#catalog-list").toggle();
  });
  $("#profile-link").click(function() {
    $("#sign-up").show();
    $("#modal-background").show();
  });
  $("#sign-up-link").click(function() {
    $("#sign-up").show();
    $("#sign-in").hide();
  });
  $("#sign-in-link").click(function() {
    $("#sign-in").show();
    $("#sign-up").hide();
  });
  $("#modal-background").click(function() {
    $("#sign-up, #sign-in, #modal-background").hide();
  });
  const ratingBlock = $(".rating-block");

  Array.from(ratingBlock).forEach(item => {
    let starCount = item.querySelector('.number').innerHTML;
    for (let i = 0; i < item.children.length; i++) {
      if (starCount <= 0) break;
      item.children[i].children[0].classList = 'fa fa-star';
      starCount--;
    }
  });
  $(".delete-button").click(function() {
    $(this).parent().parent().hide();
  });
  $(".edit-input").click(function() {
    $(this).prev().prop('readonly', false);
  });
  $('.input.hidden > .fa-eye').click(function () {
    $(this).prev().toggleClass('password');
    if ($(this).prev().hasClass('password')) {
      $(this).prev().attr('type', 'password');
    } else {
      $(this).prev().attr('type', 'text');
    }
  });
  $(".input input").focus(function() {
    $(this).parent().addClass('active');
  });
  $(".input input").focusout(function() {
    $(this).parent().removeClass('active');
  });
  $(".input").each(function() {
    if ($(this).hasClass('editable')) {
      $(this).children('input').prop('readonly', true);
    }
  });
  $(".edit-input").click(function() {
    $(this).parent().addClass('completed');
    $(this).parent().removeClass('editable');
    $(this).prev().prev().prop('readonly', false);
  });
  $(".complete").click(function() {
    $(this).parent().removeClass('completed');
    $(this).parent().removeClass('active');
    $(this).parent().addClass('editable');
    $(this).prev().prev().prop('readonly', true);
  });
});

$(document).mouseup(function (e){
  var div = $("#catalog-list");
  if (!div.is(e.target)
      && div.has(e.target).length === 0) {
          $("#catalog-list").hide();
  }
});