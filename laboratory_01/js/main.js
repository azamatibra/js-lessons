// let oneNumber = parseInt(prompt("Введите первое число: "));
// let twoNumber = parseInt(prompt("Введите второе число: "));
// if (oneNumber >= twoNumber){
//   alert(`Первое число ${oneNumber} больше второго ${twoNumber}`)
// } else if (oneNumber <= twoNumber){
//   alert(`Первое число ${oneNumber} меньше второго ${twoNumber}`)
// } else if (oneNumber === twoNumber){
//   alert('Числа равны')
// } else {
//   alert("Неизвестно")
// }
// 2.0
// let symbol = prompt("Введите символ: ");
// let message = symbol + ' ' + prompt("Введите сообщение: ") + ' ' + symbol;

// let line = "";
// for (let i = 0; i < message.length; i++) {
//   line += symbol;
// }

// console.log(line + "\n" + line + message + line + "\n" + line);

// 2.1
// let message = prompt("Введите сообщение: ");
// let symbol = prompt("Введите символ: ");
// let result = "";
// const border = 4;
// const lines = 3;
// for (let index = 0; index < lines; index++) {
//   for (let j = 0; j < message; j++) {
//     if (i === 1) {
//       result += symbol + " " + message + " " + symbol;
//     } else {
//       result += symbol;
//     }
//   }
//   result += "\n";
// }
// console.log(result);
// // 3
// let random = function (min, max) {
//   return Math.floor(Math.random() * Math.floor(min * max));
// };
// let numberOne = random(1, 4),
//   numberTwo = random(1, 4),
//   numberThree = random(1, 4);

// if (numberOne === numberTwo && numberTwo === numberThree) {
//   console.log(`%c Вы выиграли: ${numberOne}=${numberTwo}=${numberTwo}`, 'color: green');
// } else {
//   console.log(`К сожалению: ${numberOne}=${numberTwo}=${numberThree}`);
// }
// 4
// let random = function (min, max) {
//   return Math.floor(Math.random() * Math.floor(min * max));
// };

// do {
//   let i = 24;
//   if (ask == result) {
//     alert("Ответ верный");
//   } else if (ask === null) {
//     // break;
//   } else {
//     alert("Ответ неверный \nОтвет был: " + result);
//   }
//   i++;
// } while (i >= 0);

// let ask = 0;
// let trueAnswer = 0;
// let falseAnswer = 0;

// for (;;) {
//   let numberOne = random(1, 10),
//     numberTwo = random(1, 10);
//   let ask = prompt(`${numberOne} * ${numberTwo} :`);
//   let result = numberOne * numberTwo;
//   if (ask == result) {
//     alert("Ответ верный");
//     trueAnswer++;
//     ask++;
//   } else if (ask === null) {
//     alert(
//       "Общее количество правильных ответов " +
//         trueAnswer +
//         "\n" +
//         "Общее количество неправильных ответов " +
//         falseAnswer
//     );
//     break;
//   } else {
//     ask++;
//     falseAnswer++;
//     alert("Ответ неверный \nОтвет был: " + result);
//   }
// }
// 5
// let random = function (min, max) {
//   return Math.floor(Math.random() * Math.floor(min * max));
// };
// let center = {
//   x: x = random(1, 10),
//   y: y = random(1, 10),
// };
// if (x <= 5 && y >= 5) {
//   alert(`Снаряд упал на северо-запад x = ${x}; y = ${y};`);
// } else if (x >= 5 && y >= 5) {
//   alert(`Снаряд упал на северо-восток x = ${x}; y = ${y};`);
// } else if (x == 5 && y == 5) {
//   alert(`Снаряд упал в центр x = ${x}; y = ${y};`);
// } else if (x <= 5 && y <= 5) {
//   alert(`Снаряд упал на юго-запад x = ${x}; y = ${y};`);
// } else if (x >= 5 && y <= 5) {
//   alert(`Снаряд упал на юго-восток x = ${x}; y = ${y};`);
// } else {
//   alert("Неизвестно");
// }
