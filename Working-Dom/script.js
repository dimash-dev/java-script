// Задание 1

let header = document.getElementById("message");
header.textContent = "Добро пожаловать!"

// Задание 2

let backColor = document.getElementsByClassName("box");

for (let i = 0; i < backColor.length; i++) {
  backColor[i].style.backgroundColor = "green";
}

// Задание 3

let allElem = document.querySelectorAll('.box1');
for (let i = 0; i < allElem.length; i++) {
  allElem[i].style.backgroundColor = 'red';
}

let firstElem = document.querySelector('#text');
firstElem.textContent = 'Обнова текста';
// Задание 4

let highlightedParagraphs = document.querySelectorAll('.highlight');
highlightedParagraphs.forEach(paragraph => {
  paragraph.style.color = "red";
})