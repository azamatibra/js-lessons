// 1
// let answer = prompt("Введите число: ");

// function numberCheck(num) {
//   let number = parseInt(answer);
//   let cancel = answer;
//   if (Number.isInteger(number) && number > 0) {
//     alert("Вы ввели положительное число");
//   } else if (number < 0) {
//     alert("Вы ввели отрицательное число");
//   } else if (number === 0) {
//     alert("Вы ввели ноль");
//   } else if (cancel == null) {
//     alert("Вы нажали на отмена");
//   } else if (!Number.isInteger(number)) {
//     alert("Вы ввели не число");
//   } else {
//     alert("Неизвестно");
//   }
// }
// numberCheck(answer);
// 2
// let answer = prompt("Введите число яиц");
// let cookingTime = (number) => {
//   let time = 5;
//   let maxNumber = 8;
//   let answerTime;
//   if (number <= maxNumber) {
//     alert(`Для варки ${number} яиц нужно ${time} минут`);
//   } else if (number > maxNumber) {
//     answerTime = Math.ceil(number / maxNumber) * time;
//     alert(`Для варки ${number} яиц нужно ${answerTime} минут`);
//   }
// };
// cookingTime(answer);
// 3
// let getEvenSum = function () {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] % 2 == 0) {
//       sum = sum + parseInt(arguments[i])
//     }
//   }
//   console.log(sum);
// };

// getEvenSum(4, 3, 1, 2, 5, 10, 6, 7, 8);
// 4
// let result = 0;
// function checkExam(answer, exam) {
//   for (let i = 0; i < answer.length; i++) {
//     if (answer[i] === exam[0]) {
//       console.log("Правильно");
//       result = result + 4;
//     } else if (answer[i] != exam[1]) {
//       console.log("Правильно");
//       result = result - 1;
//     }
//   }
//   console.log(result);
// }
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);

// 4.1

// let checkExam = (answers, userAnswers) => {
//   let sum = 0;
//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === userAnswers[i]) {
//       sum += 4;
//     } else if (userAnswers[i] === "") {
//       continue;
//     }
//     else{
//       sum--;
//     }
//   }
//   return sum < 0 ? 0 : sum
// };

// let result = checkExam(["a", "b", "c", "d"], ["a", "", "d", "d"]);

// console.log(result);