// Задание 1

let person = {
  name: "Dimash",
  age: 24,
  city: "Almaty",
  greet: function () {
    return "Привет, меня зовут " + this.name + ", мне " + this.age + " года!";
  }
};
console.log(person);

// Задание 2

console.log(person.name);
console.log(person.age);
person.city = "Astana"
console.log(person.city);


// Задание 3

console.log(person.greet());

// Задание 4

let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };

if (obj1 == obj2 && obj1 === obj2) {
  console.log("Они равны");
} else {
  console.log("Они не равны");
}

// обьекты сравниваются по ссылке хотя содержимое одинаковое,
//  у них разные области памяти, значит ссылки разные.

// Задание 5

let book = {
  title: "451 градус по Фаренгейту",
  author: "Рэй Брэдбери",
  details: {
    year: 2025,
    pages: 320
  }
};

let copyBook = Object.assign({}, book);
copyBook.details.year = 2024;

console.log(book.details.year);
console.log(copyBook.details.year);

// Object.assign делает поверхностное копирование, 
// поэтому вложенный обект details остается общей ссылкой

// Задание 6

let calculator = {
  a: 5,
  b: 7,

  sum() {
    return this.a + this.b;
  },

  multiply() {
    return this.a * this.b;
  }
};

console.log(calculator.sum());
console.log(calculator.multiply());

// Задание 7

const car = {
  brand: "KIA",
  model: "Sorento"
}

console.log(car);

car.brand = "BMW"
console.log(car.brand);

// у конст можно менять свойство,
//  но запрещает переприсвоить переменную
