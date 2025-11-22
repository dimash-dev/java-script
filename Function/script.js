// Задание 1

function greet() {
  console.log("Привет, мир!");
}
greet();

// Задание 2

function sayHello(name) {
  console.log("Привет, " + name + "!");
}
sayHello("Ару");

// Задание 3

let sum = (a, b) => a + b;
console.log(sum(5, 4));

// Задание 4

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(5));

// Задание 5

function max(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Числа равны";
  }
}
console.log(max(10, 9));
console.log(max(8, 9));
console.log(max(10, 10));

// Задание 6

function getInitials(name, surName) {
  return name[0] + "." + surName[0] + ".";
}

console.log(getInitials("Димаш", "Шамид"));
console.log(getInitials("dimash", "shamid"));
console.log(getInitials("beka", "aru"));

// Задание 7

function square(num) {
  return num * num;
}

function cube(num) {
  return num * square(num);
}

console.log(square(3));
console.log(cube(3));

console.log(square(5));
console.log(cube(5));

// Задание 8

// переписал задание 3

// доп задание
function getFactorial(nmb) {
  let result = 1;
  for (let i = 1; i <= nmb; i++) {
    result *= i;
  }
  return result;
}

console.log(getFactorial(5));
console.log(getFactorial(0));
console.log(getFactorial(7)); 