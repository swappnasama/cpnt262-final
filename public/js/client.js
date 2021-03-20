const menuToggle = document.querySelector('.toggle');
const hero = document.querySelector('.hero');
document.querySelector('video').playbackRate = 1;

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  hero.classList.toggle('active')
})