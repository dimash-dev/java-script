// Задание 1 на HTML


// Задание 2 
const button = document.getElementById('jsButton');

button.addEventListener('click', () => {
  console.log("Событие обработано через JS");
});

// Задание 3
const myDiv = document.getElementById('myDiv');

myDiv.addEventListener('click', () => {
  myDiv.style.backgroundColor = 'blue';
});

myDiv.addEventListener('mouseenter', () => {
  console.log('Элемент нажат');
});

// Задание 4
const textInput = document.getElementById('textInput');

textInput.addEventListener('keydown', (event) => {
  console.log('Клавиша нажата', event.key);
});

// Задание 5
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Переход по ссылке отменен');
})

// Задание 6
const list = document.getElementById('list');

list.addEventListener('click', (event) => {
  console.log(event.target.textContent);
})

// Задание 7
const keybInput = document.getElementById('keyboardInput');

keybInput.addEventListener('keydown', (event) => {
  console.log('Нажаита клавиша', event.key);
})
