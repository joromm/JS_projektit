'use strict';

const apiurl = 'https://api.tvmaze.com/search/shows?q=';

async function fetchJson(url, options = {}) {
  const vastaus = await fetch(url, options);
  if (!vastaus.ok) throw new Error('Invalid input!');
  return await vastaus.json();
}

document.querySelector('form').addEventListener('submit', async function(evt) {
  try {
    evt.preventDefault();
    const sarjat = await fetchJson(
        apiurl + document.querySelector('#query').value);
    console.log(sarjat);
  } catch (e) {
    console.error(e.message);
  }
});
