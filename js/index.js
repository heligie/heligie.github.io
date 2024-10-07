const body = document.body;
const modeButton = document.querySelector('.header__toggle');

modeButton.addEventListener('click', () => body.classList.toggle('dark-mode'));