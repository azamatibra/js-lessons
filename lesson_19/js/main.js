class Machine {
  constructor() {
    this.state = false;
  }
  turnOn() {
    this.state = true;
    return "Механизм включен";
  }
  turnOff() {
    this.state = false;
    return "Механизм отключен";
  }
}
class HomeAppliance extends Machine {
  constructor() {
    super();
    this.network = false;
  }
  plugIn() {
    this.network = true;
    return "Подключен к сети";
  }
  plugOff() {
    this.network = false;
    return "Отключен от сети";
  }
}
class WashingMachine extends HomeAppliance {
  constructor() {
    super();
  }
  run() {
    if (this.state === true && this.network === true) {
      return "Стиралка запустилась";
    } else if (this.network == false) {
      return "Подключите к сети";
    } else {
      return "Включите механизм пожалуйста";
    }
  }
}

class LightSource extends HomeAppliance {
  constructor() {
    super();
  }
  setLevel(level) {
    if (this.state === true && this.network === true) {
      if (level >= 1 && level <= 100) {
        this.level = level;
        return "Уровень освещенности " + this.level;
      }
    } else if (this.network === false) {
      return "Подключите к сети";
    } else if (this.state === false) {
      return "Включите механизм";
    } else {
      return "Введите число от 1 до 100";
    }
  }
}

class AutoVehicle extends Machine {
  constructor() {
    super();
  }
  setPosition(x = 0, y = 0) {
    if (this.state === true) {
      this.x = x;
      this.y = y;
      return `Координаты x:${x} y:${y}`;
    } else {
      return "Включите механизм";
    }
  }
}

class Car extends AutoVehicle {
  constructor() {
    super();
    this.speed = 10;
  }
  setSpeed(speed = 10) {
    this.speed = speed;
  }
  run(dotX, dotY) {
    let resultX = 0;
    let resultY = 0;
    // console.log(dotX);
    for (let i = 0; i < dotX; i++) {
      resultX = this.x + this.speed;
    }
    for (let i = 0; i < dotY; i++) {
      resultY = this.y + this.speed;
    }
    this.x = resultX;
    this.y = resultY;
    console.log(this.x, this.y);
  }
}
let obj = new Car();
console.log(obj.turnOn());
console.log(obj.setPosition(50, 50));
obj.setSpeed(100);
obj.run(200, 200);
console.log(obj);
