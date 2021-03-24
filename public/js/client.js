const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
document.querySelector('video').playbackRate = 1;

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  menu.classList.toggle('active')
})