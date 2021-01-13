let btn = document.querySelector(".btn-start");
let btnInfo = document.querySelector(".btn-info");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  Game.chooseGame();
});
let gameArrSimple = ["бумага", "камень", "ножницы"];
let gameArrAdv = ["ящерица", "камень", "spock", "ножницы", "бумага"];

let Game = {
  chooseGame() {
    Game.getRandomInt();
    Game.getRandomTools();
    let game = prompt("Выберите игру: 1 или 2 ? (Введите 1 или 2)");
    if (game == 1) {
      this.gameBattleSimple();
    } else if (game == 2) {
      this.gameBattleAdv();
    } else {
      alert("Выберите правильную игру");
    }
  },
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getRandomTools(arr = []) {
    return arr[this.getRandomInt(0, arr.length - 1)];
  },
  gameBattleSimple() {
    let countUser = 0;
    let countPc = 0;
    for (;;) {
      let pcInfo = this.getRandomTools(gameArrSimple);
      let userInfo = prompt("Сыграем в “Камень-Ножницы-Бумага”: ");
      if (
        (userInfo == "бумага" && pcInfo == "камень") ||
        (userInfo == "камень" && pcInfo == "ножницы") ||
        (userInfo == "ножницы" && pcInfo == "бумага")
      ) {
        alert("Человек выиграл " + userInfo + " Компьютер " + pcInfo);
        countUser++;
      } else if (userInfo === null) {
        if (countUser > countPc) {
          alert(
            "Вы выиграли! Ваш счет " + countUser + " Счет комьютера " + countPc
          );
        } else if (countUser == countPc) {
          alert("Ничья! Ваш счет " + countUser + " Счет комьютера " + countPc);
        } else {
          alert(
            "Вы проиграли! Ваш счет " + countUser + " Счет комьютера " + countPc
          );
        }
        break;
      } else if (userInfo == pcInfo) {
        alert("Ничья бро");
        alert("Вы - " + userInfo + " Компьютер - " + pcInfo);
      } else if (
        (userInfo == "камень" && pcInfo == "бумага") ||
        (userInfo == "ножницы" && pcInfo == "камень") ||
        (userInfo == "бумага" && pcInfo == "ножницы")
      ) {
        countPc++;
        alert("Вы проиграли");
        alert("Вы - " + userInfo + " Компьютер - " + pcInfo);
      } else {
        alert(
          "Введите правильные данные! \n" +
            "Вы ввели: " +
            userInfo +
            "\nКомпьютер: " +
            pcInfo
        );
      }

      alert(`Счет: Вы ${countUser} ПК ${countPc}`);
    }
  },
  gameBattleAdv() {
    let countUser = 0;
    let countPc = 0;
    for (;;) {
      let pcInfo = this.getRandomTools(gameArrAdv);
      let userInfo = prompt("Сыграем в “Камень-Ножницы-Бумага”: ");
      if (
        (userInfo == "spock" && pcInfo == "ножницы") ||
        (userInfo == "spock" && pcInfo == "камень") ||
        (userInfo == "бумага" && pcInfo == "spock") ||
        (userInfo == "бумага" && pcInfo == "камень") ||
        (userInfo == "ножницы" && pcInfo == "ящерица") ||
        (userInfo == "ножницы" && pcInfo == "бумага") ||
        (userInfo == "камень" && pcInfo == "ножницы") ||
        (userInfo == "камень" && pcInfo == "ящерица") ||
        (userInfo == "ящерица" && pcInfo == "бумага") ||
        (userInfo == "ящерица" && pcInfo == "spock")
      ) {
        countUser++;
        alert("Вы выиграли \nВы: " + userInfo + " \nПк: " + pcInfo);
      } else if (userInfo == pcInfo) {
        alert("Ничья");
      } else if (userInfo === null) {
        if (countUser > countPc) {
          alert("Вы выиграли ) " + countUser + " Пк " + countPc);
        } else if (countUser == countPc) {
          alert("Ничья! Вы " + countUser + " Пк " + countPc);
        } else {
          alert("Вы проиграли ( " + countUser + " Пк " + countPc);
        }
        break;
      } else if (
        (pcInfo == "spock" && userInfo == "ножницы") ||
        (pcInfo == "spock" && userInfo == "камень") ||
        (pcInfo == "бумага" && userInfo == "spock") ||
        (pcInfo == "бумага" && userInfo == "камень") ||
        (pcInfo == "ножницы" && userInfo == "бумага") ||
        (pcInfo == "ножницы" && userInfo == "ящерица") ||
        (pcInfo == "камень" && userInfo == "ножницы") ||
        (pcInfo == "камень" && userInfo == "ящерица") ||
        (pcInfo == "ящерица" && userInfo == "spock") ||
        (pcInfo == "ящерица" && userInfo == "бумага")
      ) {
        countPc++;
        alert("Вы проиграли \nВы: " + userInfo + " \nПк: " + pcInfo);
      } else {
        alert("Введите правильные данные");
      }
      alert("Счет: Вы " + countUser + " Пк " + countPc);
    }
  },
};
