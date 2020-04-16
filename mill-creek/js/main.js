function showMobileMenu() {
  const mobileMenuBtn = document.querySelector('#header #mobile-menu-btn');
  const topLine = document.querySelector('#header .top-line');
  const bottomLine = document.querySelector('#header .bottom-line');
  
  mobileMenuBtn.addEventListener('click', (e) => {
    const target = e.currentTarget;
    target.classList.toggle('menu-active');
    bottomLine.classList.toggle('menu-active');
    topLine.classList.toggle('menu-active');
  });
}

showMobileMenu()