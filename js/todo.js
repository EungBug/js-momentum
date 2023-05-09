const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'ToDos';
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // const liItem = event.target.closest('li');
  const liItem = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id !== Number(liItem.id));
  saveToDos();
  liItem.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('div');
  button.classList.add('material-symbols-outlined');
  button.classList.add('delete');
  button.innerHTML = 'delete';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  if (todoInput.value.trim() === '') return;
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
