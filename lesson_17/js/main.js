class Hamburger {
  #PRICE = {
    price: 0,
    calorieContent: 0,
    cheese: 50,
    salad: 5,
    potato: 25,
  };
  constructor(type, filling) {
    this.#PRICE.price = 0;
    this.calorieContent = 0;
    this.cheese = 50;
    this.salad = 5;
    this.potato = 25;
    if (type == "маленький" || type == "small") {
      this.calorieContent = 200;
      this.price = 60;
    } else if (type == "большой" || type == "big") {
      this.price = 80;
      this.calorieContent = 300;
    }

    if (filling == "сыр" || filling == "cheese") {
      this.price += 15;
      this.calorieContent += this.cheese;
    } else if (filling == "салат" || filling == "salad") {
      this.price += 5;
      this.calorieContent += this.salad;
    } else if (
      filling == "картофель" ||
      filling == "картошка" ||
      filling == "картофель фри" ||
      filling == "картошка фри" ||
      filling == "potato"
    ) {
      this.price += 10;
      this.calorieContent += this.potato;
    }
    this.food = type;
  }

  getPrice() {
    alert("Цена " + this.price + " сомов");
  }
  getCalories() {
    alert("Калория " + this.calorieContent);
  }
}

let person = new Hamburger("маленький", "картофель");
console.log(person);
person.getPrice();
person.getCalories();