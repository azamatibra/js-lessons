let cars = ["bmw", "ferrari", "audi", "tesla", "toyota"];
// foreach
// cars.forEach((car, index) => console.log(car, index));
// map
// let newCarArray = cars.map((car, index) => {
//   return car + " " + (index + 1);
// });
// console.log(newCarArray );

// filter
// let newCarArray = cars.filter((car) => {
//   let chance = Math.floor(Math.random() * 2 + 1);
//   if (chance === 2) return car;
// });
// console.log(cars, newCarArray);

// function
// let User = {
//   cars: ["bmw", "ferrari", "audi", "tesla", "toyota"],
//   sell: [],
//   prefix: "lux ",
//   setSellList() {
//     this.sell = this.cars.filter((car) => {
//       let chance = Math.floor(Math.random() * 2 + 1);
//       if (chance === 2) return this.prefix + " " + car;
//     });
//   },
// };
// User.setSellList();
// console.log(User, User.setSellList());

// reduce
// function getEventNumbers(...numbers) {
//   return numbers
//     .filter((num) => {
//       if (num % 2 === 0) return num;
//     })
//     .reduce((acc, item) => {
//       return acc + item;
//     }, 0);
// }
// let result = getEventNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(result);


// includes
// let result = cars.includes('bmw')
// console.log(result);