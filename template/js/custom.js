$(".select-name, .select-size").chosen();

let widgetHeader = document.querySelectorAll('.widget-header');
let container = document.querySelectorAll('.chosen-container');

for (let i = 0; i < widgetHeader.length; i++) {
    widgetHeader[i].addEventListener('click', function (evt) {
        evt.currentTarget.classList.toggle('active');
    });
}

for (let i = 0; i < container.length; i++) {
    container[i].addEventListener('click', function (evt) {
        let target = container[i].querySelector('.chosen-drop');
        $(target).slideToggle();
    });
}


// MODAL

let links        = document.querySelectorAll('.modal-link'),
    modals       = document.querySelectorAll('.modal'),
    overlays     = document.querySelectorAll('.modal .overlay'),
    blur         = document.querySelector('.content-blur');

function openModal(evt) {
    evt.preventDefault();
    // номер ссылки на которую нажали
    let linkNumber = evt.target.dataset.modal;
    
    for (let i = 0; i < modals.length; i++) {
        let modal = modals[i].id,
            modalNumber = modal.charAt(modal.length - 1);

        if (linkNumber === modalNumber) {
            modals[i].classList.add('active');
            blur.classList.add('active');
        }
    }
}

function closeModal(evt) {
    evt.preventDefault();

    for (let i = 0; i < modals.length; i++) {
        if (modals[i].classList.contains('active')) {
            modals[i].classList.remove('active');
            blur.classList.remove('active');
        }
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', openModal);
}

for (let i = 0; i < overlays.length; i++) {
    overlays[i].addEventListener('click', closeModal);
}


