function createLi(text) {
  const li = document.createElement('li');
  li.innerText = text;
  document.getElementById('target').appendChild(li);
}

createLi('First item');
createLi('Second item');
createLi('Third item');

document.querySelectorAll('li')[1].className = 'my-item';