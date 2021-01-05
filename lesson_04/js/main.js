// 1
// Создайте объект Circle на основании введенного пользователем радиуса. У нового
// объекта должно быть два метода: получить площадь круга и получить длину
// окружности и свойство радиус, равное введенному пользователем значению.
// Вывести данные с помощью alert об этом круге: радиус, площадь и длину окружности,
// используя методы данного объекта.
// let Circle = {
//   radius() {
//     return (this.radius = parseInt(prompt("Введите радиус")));
//   },
//   getSquare() {
//     return (
//       "Площадь круга " + (Math.PI * Math.pow(this.radius, 2)).toFixed(2) + " м2"
//     );
//   },
//   getLength() {
//     return "Длина круга " + (2 * Math.PI * this.radius).toFixed(2) + " м";
//   },
// };
// Circle.radius();
// alert(Circle.getSquare());
// alert(Circle.getLength());
// 2
// Необходимо создать объект, который будет представлять из себя лифт. У него должны
// быть методы:
//  toFloor - принимает целое числовое значение от 1 до 16 - переместиться на
// определенный этаж.
//  printFloor - печатает текущий этаж, на котором находится лифт
//  upOneFloor - перемещает на один этаж вверх
//  downOneFloor - перемещает на один этаж вниз
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(), программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж (только в этом методе).

// let Elevator = {
//   floor: 16,
//   getLevel() {
//     return (this.getLevel = prompt("На какой этаж: "));
//   },
//   maxLevel: 16,
//   toFloor(num) {
//     for (let i = 0; i <= 16; i++) {
//       if (num > this.floor) {
//         this.upOneFloor();
//       } else {
//         this.downOneFloor();
//       }
//     }
//   },
//   printFloor() {
//     console.log("Текущий этаж " + this.floor);
//   },
//   upOneFloor() {
//     if (this.floor >= 16) {
//       console.log("Выше нельзя");
//     } else {
//       this.floor++;
//     }
//   },
//   downOneFloor() {
//     if (this.floor < 1) {
//       console.log("Ниже нельзя");
//     } else {
//       this.floor--;
//     }
//   },
// };