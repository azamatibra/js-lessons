// let numbers = [];
// for (;;) {
//   let number = prompt("Введите число: ");
//   if (number === null) {
//     break;
//   }
//   number = parseInt(number);
//   if(number < 1 || number > 100){
//     alert('Прощено')
//     continue;
//   }
// }
// console.log(numbers);
// while (true) {
//   let number = prompt("Введите число: ");
//   if (number === null) {
//     break;
//   }
//   numbers.push(parseInt(number));
// }
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 6];
// let result = numbers.splice(0, 6)
// console.log(numbers, result);

// let getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// let chance = getRandomInt(1, 2)

// if(chance === 1){
//   console.log('Что-то произойдет с 50%');
// }

// console.log(getRandomInt(2, 5));

// let FruitsBox = {
//   fruits: {
//     'Banana': 0,
//     'Apple': 0,
//     'Pear': 0,
//     'Orange': 0
//   },
//   addFruit(value){
//     switch(value){
//       case 'Banana':
//       case 'Apple':
//       case 'Pear':
//       case 'Orange':
//         this.fruits[value]++;
//         break;
//       default: console.log('Error');
//     }
//   },
//   showFruits(){
//     for (const item in this.fruits) {
//       console.log(item, this.fruits[item]);
//     }
//   },
//   getTotal(){
//     let total = 0;
//     for (let i of Object.values(this.fruits)) {
//       total += i;
//     }
//     return total;
//   }
// }

// FruitsBox.addFruit('Banana')
// let result = FruitsBox.getTotal();
// console.log('Fruits count is ' + result);
// 1
// let salaries = {
//   Mike: 30,
//   John: 20,
//   Julia: 50,
//   isPaid: true,
// };
// function findSum(sum) {
  // let count = 0;
  // for (let item of Object.values(salaries)) {
  //   count += item
  // }
  // console.log(count);
//   return Object.values(salaries).reduce((sum, item) => {
//     if (!isNaN(item) && typeof item !== "boolean") {
//       sum += item;
//     }
//     return sum;
//   }, 0);
// }
// let result = findSum(salaries);
// console.log(result);

// 2

// let Number = {
//   getRandom(min, max) {
//     let count = 0;
//     let Maxcount = 3;
//     for (;;) {
//       if (count < Maxcount) {
//         let number = prompt("Угадай число: ");
//         randomNum = Math.floor(Math.random() * (max - min + 1) + min);
//         if (randomNum == number) {
//           alert("Угадал");
//         } else if (isNaN(number)) {
//           alert("Нельзя вводить слова или символы");
//         } else if (number === null) {
//           break;
//         } else if (number > 0 && number != randomNum && number < max) {
//           count++;
//           alert("Промах");
//           alert("Количество промахов " + count);
//         } else {
//           alert("Похоже вы ввели число меньше " + min + " или больше " + max);
//         }
//       } else {
//         alert("К сожалению вы проиграли, количество промахов " + count);
//       }
//     }
//   },
// };
// let result = Number.getRandom(1, 7);
// console.log(result);

// 3
// let initialList = ["John", "Jack", "Azamat", "Merry", "Sam", "Violet", "Jimmy"];
// let Host = {
//   getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   setGuestList() {
//     for (let i = 0; i < initialList.length; i++) {
//       if (i <= this.getRandom(2, 4)) {
//         this.guestList.push(initialList[i]);
//       }
//     }
//     return (
//       "В списке было " +
//       initialList.length +
//       " имен" +
//       "\n" +
//       "После сортировки стало " +
//       this.guestList.length +
//       " имени" +
//       "\n" +
//       "Гости которые были приглашены " +
//       this.guestList.join(", ")
//     );
//   },
//   guestList: [],
// };

// console.log(Host.setGuestList());
// console.log(Host.guestList);







// 1
// let salaries = {
//   Mike: 30,
//   John: 20,
//   Julia: 50,
//   isPaid: NaN,
// };
// let findSum = (obj) => {
//   let sum = 0;
//   for (let key in obj) {
//     let item = obj[key];
//     if (typeof item === "number" && !isNaN(item)) {
//       sum += item;
//     }
//   }
//   return sum;
// };
// console.log(findSum(salaries));

//2 Домашка
// let Number = {
//   getRandom(min, max) {
//     let count = 0;
//     let Maxcount = 3;
//     for (;;) {
//       if (count < Maxcount) {
//         let number = prompt("Угадай число: ");
//         randomNum = Math.floor(Math.random() * (max - min + 1) + min);
//         if (randomNum == number) {
//           alert("Угадал");
//         } else if (isNaN(number)) {
//           alert("Нельзя вводить слова или символы");
//         } else if (number === null) {
//           break;
//         } else if (number > 0 && number != randomNum && number < max) {
//           count++;
//           alert("Промах");
//           alert("Количество промахов " + count);
//         } else {
//           alert("Похоже вы ввели число меньше " + min + " или больше " + max);
//         }
//       } else {
//         alert("К сожалению вы проиграли, количество промахов " + count);
//       }
//     }
//   },
// };
// let result = Number.getRandom(1, 7);
// console.log(result);

// let GuessNumber = {
//   attemp: 3,
//   getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   init() {
//     let randomNumber = this.getRandomInt(1, 7);
//     while (true) {
//       let answer = prompt("Угадайте число от 1 до 7");
//       if (answer === null) {
//         break;
//       }
//       if (isNaN(answer) || answer < 1 || answer > 7) {
//         alert("Введите корректные данные");
//         continue;
//       }

//       if (answer == randomNumber) {
//         alert("Вы угадали число" + " " + randomNumber);
//         return;
//       } else {
//         alert("Промах");
//         this.attemp--;
//       }
//     }
//     alert('Вы проиграли количество попыток 0')
//   },
// };

// console.log(GuessNumber.init());

// 3
// const guests = ["John", "Jack", "Harry", "Merry", "Sam", "Violet", "Jimmy"];

// const Host = {
//   guestList: [],
//   unguestList: [],
//   getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   setGuestList(list) {
//     for (let guest of list) {
//       let chance = this.getRandomInt(1, 100);
//       if (chance <= 80) {
//         this.guestList.push(guest);
//       } else {
//         this.unguestList.push(guest);
//       }
//     }
//   },
//   getListInfo(list) {
//     return `В списке было ${list.length} \nПосле сортировки, осталось ${
//       this.unguestList.length
//     } имени.\nГости которые были приглашены на вечеринку: ${this.guestList.join(
//       ", "
//     )}`;
//   },
// };
// Host.setGuestList(guests);
// console.log(Host.getListInfo(guests));
