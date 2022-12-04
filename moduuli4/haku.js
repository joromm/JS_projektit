'use strict';

const apiurl = 'https://api.tvmaze.com/search/shows?q=';

async function fetchJson(url, options = {}) {
  const vastaus = await fetch(url, options);
  if (!vastaus.ok) throw new Error('Invalid input!');
  return await vastaus.json();
}

function strip(html) {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

function pilkku(lista) {
  let string = '';
  for (let i = 0; i < lista.length; i++) {
    const genre = lista[i];
    if (i !== lista.length - 1) {
      string = string + genre + ' | ';
    } else {
      string = string + genre;
    }
  }
  return string;
}

// const div1 = document.createElement('div');
// document.querySelector('body').appendChild(div1);

const container = document.createElement('div');
container.classList.add('container1');
document.querySelector('body').appendChild(container);

document.querySelector('form').addEventListener('submit', async function(evt) {
  try {
    evt.preventDefault();
    const sarjat = await fetchJson(
        apiurl + document.querySelector('#query').value);
    console.log(sarjat);

    for (let i = 0; i < sarjat.length; i++) {
      const div = document.createElement('div');
      div.classList.add('sarja');
      container.appendChild(div);

      const p = document.createElement('p');
      p.innerText = sarjat[i]['show']['name'];
      div.appendChild(p);

      const img = document.createElement('img');
      img.src = sarjat[i]['show']['image'] ?
          sarjat[i]['show']['image']['medium'] :
          'https://via.placeholder.com/100x200?text=text+here';
      img.alt = 'medium image';
      div.appendChild(img);

      const a = document.createElement('a');
      a.setAttribute('target', '_blank');
      a.href = sarjat[i]['show']['url'];
      a.innerText = 'link to details';
      div.appendChild(a);

      const p2 = document.createElement('p');
      p2.innerText = strip(sarjat[i]['show']['summary']);
      p2.classList.add('summary')
      div.appendChild(p2);

      const p3 = document.createElement('p');
      p3.innerText = pilkku(sarjat[i]['show']['genres']);
      div.appendChild(p3);
    }

    /*
        const p = document.createElement('p');
        p.innerText = sarjat[0]['show']['name'];
        div1.appendChild(p);

        const a = document.createElement('a');
        a.setAttribute('target', '_blank');
        a.href = sarjat[0]['show']['url'];
        a.innerText = 'link to details';
        div1.appendChild(a);

        const img = document.createElement('img');
        img.src = sarjat[0]['show']['image']['medium'];
        img.alt = 'medium image';
        div1.appendChild(img);

        const p2 = document.createElement('p');
        p2.innerText = strip(sarjat[0]['show']['summary']);
        div1.appendChild(p2)*/

  } catch (e) {
    console.error(e.message);
  }
});

