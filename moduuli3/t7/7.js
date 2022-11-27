'use srict';

const hover = document.querySelector('#trigger');
hover.addEventListener('mouseover', function(evt) {
  const img = document.querySelector('#target');
  img.setAttribute('src', 'img/picB.jpg');
});
hover.addEventListener('mouseout', function(evt) {
  const img = document.querySelector('#target');
  img.setAttribute('src', 'img/picA.jpg');
});