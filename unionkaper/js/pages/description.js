$(function() {
    var elem = document.querySelector('.js-switch');
    var init = new Switchery(elem);
    $(".pick_date").AnyTime_picker({ format: "%M" });
});