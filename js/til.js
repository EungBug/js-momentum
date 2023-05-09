const tilForm = document.getElementById('til-form');
const tilInput = tilForm.querySelector('input');
const tilList = document.getElementById('til-list');

const TIL_KEY = 'TIL-LIST';
let tils = [];

function saveTils() {
  localStorage.setItem(TIL_KEY, JSON.stringify(tils));
}

function deleteTil(event) {
  const liItem = event.target.parentElement;
  tils = tils.filter(toDo => toDo.id !== Number(liItem.id));
  saveTils();
  liItem.remove();
}

function paintTil(newTil) {
  const li = document.createElement('li');
  li.id = newTil.id;
  const span = document.createElement('span');
  span.innerText = newTil.text;
  const button = document.createElement('div');
  button.classList.add('material-symbols-outlined');
  button.classList.add('delete');
  button.innerHTML = 'delete';
  button.addEventListener('click', deleteTil);
  li.appendChild(span);
  li.appendChild(button);

  tilList.appendChild(li);
}

function handleTilSubmit(event) {
  event.preventDefault();
  if (tilInput.value.trim() === '') return;
  const newTil = tilInput.value;
  tilInput.value = '';
  const newTilObj = {
    text: newTil,
    id: Date.now()
  };
  tils.push(newTilObj);
  paintTil(newTilObj);
  saveTils();
}

tilForm.addEventListener('submit', handleTilSubmit);

const savedTils = localStorage.getItem(TIL_KEY);
if (savedTils !== null) {
  const parsedTils = JSON.parse(savedTils);
  tils = parsedTils;
  parsedTils.forEach(paintTil);
}
