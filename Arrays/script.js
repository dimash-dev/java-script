// Задание 1

let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);

// Задание 2

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.push("Груша");

// Задание 3

let delLast = fruits.pop();
console.log(delLast);

let delFirst = fruits.shift();
console.log(delFirst);

console.log(fruits);


// Задание 4

fruits.forEach(fruit => {
  console.log(fruit);
})

// Задание 5

let lengths = fruits.map(wrd => wrd.length);
console.log(lengths);


// Задание 6

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(num => num % 2 === 0);
console.log(evenNums);

// Задание 7

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Задание 8

let findBig = numbers.find(num => num > 5);
console.log(findBig);

// Задание 9

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let fullArr = arr1.concat(arr2);
console.log(fullArr);

// Задание 10

let hasBanana = fruits.includes("Банан");
console.log(hasBanana);

// Задание 11

let reversed = fruits.reverse();
console.log(reversed);

