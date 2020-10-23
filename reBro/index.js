document.addEventListener('DOMContentLoaded', () => {
  function createModalEvents() {
    const overlays = document.querySelectorAll('.overlay')
    const openModalBtns = document.querySelectorAll('.open-modal')
    const closeBtns = document.querySelectorAll('.close-btn')

    function closeModal() {
      const openedModal = document.querySelector('.modal.open')
      openedModal.parentElement.classList.remove('open')
      openedModal.classList.remove('open')
    }

    function openModal(e) {
      const modalId = e.target.dataset.modal
      const modal = document.querySelector(`#modal${modalId}`)
      modal.parentElement.classList.add('open')
      modal.classList.add('open')
    }

    function overlayHandler(e) {
      if (e.target.classList.contains('overlay')) {
        closeModal()
      }
    }

    openModalBtns
      .forEach(btn => btn.addEventListener('click', openModal))

    closeBtns.forEach(btn => btn.addEventListener('click', closeModal))
    overlays.forEach(overlay => overlay.addEventListener('click', overlayHandler))
  }

  function createLocationSlider() {
    const slider = document.querySelector('#locations ul')
    const prevBtn = document.querySelector('#locations .slider-buttons .prev')
    const nextBtn = document.querySelector('#locations .slider-buttons .next')

    const step = 210
    const maxLength = slider.scrollWidth - window.innerWidth + 30

    function setSliderLength(length) {
      slider.style.transform = `translateX(-${length}px)`
    }

    function getSliderLength() {
      const sliderTransform = getComputedStyle(slider).transform
      return sliderTransform !== 'none' ? Math.abs(parseInt(sliderTransform.slice(19))) : 0
    }

    function prevSlide() {
      if (getSliderLength() - step <= 0) {
        setSliderLength(0)
      } else {
        setSliderLength(getSliderLength() - step)
      }
    }

    function nextSlide() {
      if (getSliderLength() + step >= maxLength) {
        setSliderLength(maxLength)
      } else {
        setSliderLength(getSliderLength() + step)
      }
    }

    prevBtn.addEventListener('click', prevSlide)
    nextBtn.addEventListener('click', nextSlide)
  }

  createModalEvents()
  createLocationSlider()
})

