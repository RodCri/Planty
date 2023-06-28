const menuIcon = document.querySelector('.nav__menu');
const navOptions = document.querySelector('.nav__options');
const closeIcon = document.querySelector('.nav__close');

menuIcon.addEventListener('click', () => {
  navOptions.classList.add('nav__options-active');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'flex'
});

closeIcon.addEventListener('click', () => {
  navOptions.classList.remove('nav__options-active');
  menuIcon.style.display = 'flex';
  closeIcon.style.display = 'none'
})
