
const theme = document.querySelector(".theme-switch");
const the_Body = document.getElementById('body');

theme.addEventListener('click', () => {
  theme.classList.toggle('moon');
  theme.classList.toggle('sun');
  the_Body.classList.toggle('body');
});
