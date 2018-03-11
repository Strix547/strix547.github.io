$(function() {
    var elem = document.querySelector('.js-switch');
    var init = new Switchery(elem);
    $(".pick_date").AnyTime_picker({ format: "%M" });

    var grayBlock = document.querySelector(".under-header.gray-block");

    document.body.addEventListener("click", function (e) {
        var modals = document.querySelectorAll(".modal");
        if (e.target.classList.contains("close")) {
            for (var i = 0; i < modals.length; i++) {
                modals[i].style.display = "none";
            }
        }
    });

    grayBlock.addEventListener("click", function(e) {
        var modalBuy = document.querySelector("#modal-buy");
        var modalSell = document.querySelector("#modal-sell");
        if (e.target.classList.contains("buy")) {
            modalBuy.style.display = "block";
        }
        if (e.target.classList.contains("sell")) {
            modalSell.style.display = "block";
        }
    });
});