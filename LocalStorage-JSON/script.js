// Задание 1
localStorage.setItem('greeting', 'Привет мир!');

const storedGreeting = localStorage.getItem('greeting');
console.log(storedGreeting);

// Задание 2
localStorage.removeItem('greeting');
const greetDel = localStorage.getItem('greeting');
console.log(greetDel);

// Задание 3
const user = {
  name: 'Dimash',
  age: 24,
  isLoggedIn: true,
  preferences: {
    theme: 'blue',
    language: 'kz'
  }
};
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const storedUserJSON = localStorage.getItem('user');
const parsedUser = JSON.parse(storedUserJSON);
console.log(parsedUser);

// Задание 4
parsedUser.country = 'Kazakhstan';
const updateUserJSON = JSON.stringify(parsedUser);
localStorage.setItem('user', updateUserJSON);
const parsedUpdateUser = JSON.parse(updateUserJSON);
console.log(parsedUpdateUser);

// Задание 5
const storedUserCheck = localStorage.getItem('user1');

if (storedUserCheck) {
  const parsedUserCheck = JSON.parse(storedUserCheck);
  console.log("Пользователь найден:", parsedUserCheck);
} else {
  const newUser = {
    name: 'Aibek',
    age: 20,
    isLoggedIn: false,
    preferences: {
      theme: 'light',
      language: 'kz'
    }
  };
  const newUserJSON = JSON.stringify(newUser);
  localStorage.setItem('user1', newUserJSON);
  console.log("Пользователь создан:", newUser);
}

// Задание 6
// localStorage.clear();
// const lclTest = localStorage.getItem('newUser');
// const userCheck = localStorage.getItem('parsedUser');
// console.log(userCheck);
// console.log(lclTest);

// Задание 7
const tasks = [
  { title: 'JS  learn', completed: true },
  { title: 'Build github', completed: false },
  { title: 'practice JS', completed: false },
]

const taskJSON = JSON.stringify(tasks);
localStorage.setItem('tasks', taskJSON);
const storedTaskJSON = localStorage.getItem('tasks');
const parsedTask = JSON.parse(storedTaskJSON);
console.log(parsedTask);

// Задание 8

tasks[0].completed = false;
const updateTasksJSON = JSON.stringify(tasks);
localStorage.setItem('tasks', updateTasksJSON);
const storedUpdateTasks = localStorage.getItem('tasks');
const parsedUpdateTasks = JSON.parse(storedUpdateTasks);
console.log(parsedUpdateTasks);