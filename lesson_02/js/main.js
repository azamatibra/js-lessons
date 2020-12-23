// 1
// let skills = ['Сидеть на диване ', ' Смотреть телевизор '];
// skills.push(" HTML ", " CSS ", " JavaScript ")
// alert(skills)
// 2
// let spiderman = {
//   name: "Питер",
//   force: "сильный",
//   mind: "умный",
//   growth: "178 см",
// };
// console.log(
//   "Меня зовут " +
//     spiderman.name +
//     "\n" +
//     "Мой рост " +
//     spiderman.growth +
//     "\n" +
//     "Я " +
//     spiderman.force +
//     " и " +
//     spiderman.mind +
//     " парень"
// );
// 3
// let user = prompt("Введите логин");
// let password;
// if (user === "root") {
//   password = prompt("Введите пароль");
//   if (password === "secret") {
//     alert("Добро пожаловать!");
//   } else if (password === null) {
//     alert("Вход отменен");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (user === null) {
//   alert("Вход отменен");
// } else if (user === "") {
//   alert("Укажите логин");
// } else {
//   alert("Неизвестный пользователь");
// }
// 4
// let shots = [
//   "попал",
//   "попал",
//   "промах",
//   "попал",
//   "промах",
//   "попал",
//   "промах",
//   "попал",
// ];
// let hit = 0;
// let miss = 0;
// for (let index = 0; index < shots.length; index++) {
//   if (shots[index] === 'попал') {
//     hit++;
//   }
//   else {
//     miss++;
//   }
// }
// alert(`Количество попаданий ${hit} \nКоличество промахов ${miss}`)
// 5
// let rectangle = prompt("Введите символ: ")
// let array = [];
// array.push(rectangle)
// for (let index = 0; index < array.length; index++) {
//   console.log(array);
// }
// 6
// let random = function (min, max) {
//   return Math.floor(Math.random() * Math.floor(min * max));
// };
// let numberOne = random(1, 10),
//   numberTwo = random(1, 10);
// let ask = parseInt(prompt(`${numberOne} * ${numberTwo} :`));
// let result = numberOne * numberTwo;
// if (ask == result) {
//   alert("Ответ верный");
// } else {
//   alert("Ответ неверный \nОтвет был: " + result);
// }


