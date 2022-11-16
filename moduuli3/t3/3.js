'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i of names) {
  const li = document.createElement('li');
  li.innerText = i;
  document.querySelector('#target').appendChild(li)
}
