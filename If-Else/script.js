// Задание 1

let nmb = Number(prompt("Введите цифру"));

if (nmb > 10) {
  console.log("Число больше 10");
} else {
  console.log("Число меньше или равно 10");
};

// Задание 2 

let delFail = confirm("Вы действительно хотите удалить файл?");

if (delFail) {
  console.log("Файл удалеен");
} else {
  console.log("Удаление отменено");
};

// Задание 3 

let age = Number(prompt("Введите возраст:"));

if (age < 18) {
  console.log("Вы еще подросток");
} else if (age >= 18 && age <= 30) {
  console.log("Вы молодой взрослый");
} else {
  console.log("Вы взрослый");
};

// Задание 4

let numb = Number(prompt("Введите число:"));

let result = (numb % 2 === 0) ? "Четное число" : "Нечетное число";
console.log(result);

// Задание 5 

let ndls = Number(prompt("Введито число от 1 до 7"));
let msg;

switch (ndls) {
  case 1:
    msg = "Пн";
    break;
  case 2:
    msg = "Вт";
    break;
  case 3:
    msg = "Cp";
    break;
  case 4:
    msg = "Чт";
    break;
  case 5:
    msg = "Пт";
    break;
  case 6:
    msg = "Сб";
    break;
  case 7:
    msg = "Вс";
    break;
  default:
    msg = "not found"
}

console.log(msg);

// Задание 6 

let numb1 = Number(prompt("Введите первое число:"));
let numb2 = Number(prompt("Введите второе число:"));

if (numb1 === numb2) {
  console.log("Числа равны");
} else {
  let rslt = (numb1 > numb2) ? "Первое число больше" : "Второе число больше";
  console.log(rslt);
}

// Доп. задание

let season = Number(prompt("Пишите номер от 1 до 12"));

switch (season) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;

  default:
    console.log("Not found");
}