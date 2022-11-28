'use strict';

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function sub(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multi(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function div(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

const tulos = document.getElementById('result');

const button = document.querySelector('#start');
button.addEventListener('click', function(evt) {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const x = document.getElementById('operation').value;
  if (x === 'add') {
    tulos.innerText = add(num1, num2);
  } else if (x === 'sub') {
    tulos.innerText = sub(num1, num2);
  } else if (x === 'multi') {
    tulos.innerText = multi(num1, num2);
  } else {
    tulos.innerText = div(num1, num2);
  }

});