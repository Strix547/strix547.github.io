document.addEventListener('DOMContentLoaded', () => {
  function createModalEvents() {
    const modal = document.querySelector('#modal')
    const overlay = document.querySelector('.overlay')
    const openModalBtns = document.querySelectorAll('.open-modal')
    const closeBtn = document.querySelector('.close-btn')

    function closeModal() {
      overlay.classList.remove('open')
      modal.classList.remove('open')
    }

    function openModal() {
      overlay.classList.add('open')
      modal.classList.add('open')
    }

    function overlayHandler(e) {
      if (e.target === overlay) {
        closeModal()
      }
    }

    openModalBtns
      .forEach(btn => btn.addEventListener('click', openModal))

    closeBtn.addEventListener('click', closeModal)
    overlay.addEventListener('click', overlayHandler)
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

  function createEmail() {
    const forms = document.querySelectorAll('form')

    async function sendEmail(e) {
      e.preventDefault()

      const inputs = Array.from(e.target.querySelectorAll('input[name]'))
      const formData = new FormData()

      const fields =
        inputs
          .map(({ name, value }) => ({ name, value }))
          .forEach(({ name, value }) => {
            formData.append(`${name}`, value)
          })

      console.log(formData);

      try {
        const response = await fetch('./php/sendEmail.php', {
          method: 'POST',
          body: formData
        })

        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
      } catch (err) {
        throw new Error(err)
      }
    }

    forms.forEach(form => form.addEventListener('submit', sendEmail))
  }

  createModalEvents()
  createLocationSlider()
  createEmail()
})

