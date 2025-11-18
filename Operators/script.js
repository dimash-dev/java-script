// ЗАДАНИЕ 1 

let a = 10;
let b = 5;
let c = 2;

console.log(a + b + c);
console.log(a + c - b);
console.log(a * b / c);
console.log(a % b);

// ЗАДАНИЕ 2 

// let x = 7;

// console.log(x++ + ++x);
// console.log(x-- - --x);

// ЗАДАНИЕ 3

let num = 5;
let num1 = 4;
let result = num + num1;
console.log("The result is: " + result);

// Задание 4 



let reslt = a > b && a > 0 && b > 0;
let reslt1 = c < 10 || c == 2;
let reslt2 = a / c;

console.log(reslt);
console.log(reslt1);
console.log(reslt2 !== 5);

// ЗАДАНИЕ 5

let num2 = 10;
let strNum = "10";

console.log(num2 == strNum); // true, сравнивает значение с приведением типов
console.log(num2 === strNum); // false, строгая проверка проверяет и значение, и тип данных 

// ЗАДАНИЕ 6
let x = 8;

let rslt = ((x % 2 === 0 || x % 3 === 0) && x % 6 !== 0);
console.log(rslt);

let y = 3;
console.log(!(y > 10 || y < 5));


