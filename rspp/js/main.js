(function () {
    var toggle = document.querySelector('#pull');

    toggle.onclick = function () {
        var menu = document.querySelector("#menu");
        this.classList.toggle('is-active');
        if (menu.classList.contains("open-menu")) {
            $("#menu").removeClass("open-menu");
        } else {
            $("#menu").addClass("open-menu");
        }
    }
})();