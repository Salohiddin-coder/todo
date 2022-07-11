let elBody = document.querySelector('.site-body');
let elThemeChanger = document.querySelector('.js-button-changer');

window.localStorage.getItem('color',)
elThemeChanger.addEventListener('click', function(){
  elBody.classList.toggle('dark-mode')
})

