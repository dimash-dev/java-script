// Задание 1

let count = 0;
while (count <= 10) {
  console.log(count);
  count++;
}

// Задание 2

let count1 = 0;
while (count1 <= 10) {

  if (count1 === 5) {
    count1++;
    continue;
  }

  if (count1 === 8) {
    break;
  }
  console.log(count1);
  count1++;

}

// Задание 3


let count2 = 6;
do {
  console.log("score: " + count2);
  count2++;
} while (count2 < 2)
// отличие между обычным циклом while, тут цикл выполняется хотя бы 1 раз пройдясб по телу цикла.
// даже если это сразу ложь



// Задание 4

while (true) {
  let btn = prompt("Введите 10, что бы продолжить: ")

  if (btn === "10") {
    console.log("Цикл завершен");
    break;
  }
}

// Задание 5

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// Задание 6

let i1 = 0;

for (; ;) {
  if (i1 > 100) {
    console.log("cycle end");
    break;
  }
  console.log(i1);
  i1++;
}

// Задание 7

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Задание 8

// используем когда знаем количество повторении
for (let i = 0; i < 5; i++) {
  console.log("Привет!", i);
}


// используем когда количество неизвестно
let psw = "";
while (psw !== "dimash") {
  psw = prompt("Введите пароль: ")
}
alert("accept!")

// Задание 9

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Задание 10


for (let i = 0; i < 11; i++) {

  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}

