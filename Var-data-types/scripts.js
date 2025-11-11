
// Задание 1
let age = 23; // переменная которую можно менять
console.log(age);

age = 24; // изменяем значение переменной
console.log(age);


const name = 'Dimash'; // переменная которую нельзя менять
console.log(name);


// name = 'Shamid'

/* let позволяет изменять значение переменной,
 а const нет, поэтому попытка присвоить 
 новое значение name приведет к ошибке. */

// Задание 2
/* var — это старый способ объявления переменных в JavaScript.
   Сейчас лучше использовать let или const, потому что var имеет особенность области видимости
   функциональную, а не блочную и может случайно перезаписать значение. */

// Задание 3
let num = 32;
console.log(num);
console.log(typeof num);

let str = 'string';
console.log(str);
console.log(typeof str);

let bool = true;
console.log(bool);
console.log(typeof bool);

let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue);// особенность typeof null возвращает "object"

let undefinedValue = undefined;
console.log(undefinedValue);
console.log(typeof undefinedValue);

let noteNumber = NaN;
console.log(noteNumber);
console.log(typeof noteNumber); // NaN это тоже number

// Задание 4
let str2 = '123';
let numStr2 = Number(str2); // строку 123 преобразовали в число
console.log(numStr2);

let num2 = 123;
let strNum2 = String(num2); // число 123 преобразовали в строку
console.log(strNum2);

let null2 = null;
console.log(String(null2)); // "null"
console.log(Number(null2)); // 0

let undef2 = undefined;
console.log(String(undef2)); // "undefined"
console.log(Number(undef2)); // NaN

// null при преобразовании в число становится 0, а undefined не число.
// преобразование в строку просто превращает значение в текст.


// Задание 5

let number = 123; // переменная с типом number
console.log(number)
number = 'String'; // изменяем на строку
console.log(number)

/* в js переменные могут менять тип в процессе работы.
Это называется динамической типизацией. */

// Задание 6

let namePrmpt = prompt('Введите имя: ');
console.log(namePrmpt);

let agePrmpt = prompt('Введите возраст: ')
console.log(agePrmpt);



