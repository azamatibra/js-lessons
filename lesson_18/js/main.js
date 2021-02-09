class PiggyBank {
  constructor(limit) {
    this.limit = limit;
    this.coins = {
      1: 0,
      3: 0,
      5: 0,
      10: 0,
    };
  }
  addCoin(value) {
    try {
      switch (value) {
        case 1:
        case 3:
        case 5:
        case 10:
          this.coins[value]++;
          break;
        default:
          throw new Error("Такого номинала нету");
      }
    } catch (err) {
      alert(err.message);
    }
  }
  showCoins() {
    let wrap = $(".content__wrap")
    wrap.html('')
    Object.keys(this.coins).forEach((coinName) => {
      let box = $('<div class="content__box">');
      box.html(`<div class="container">
      <span class="content__coin">${coinName}: </span>
      <span class="content__amount" id="amount-one">${this.coins[coinName]}</span>
    </div>`);
      wrap.append(box);
    });
  }
  getTotal() {
    let total = 0;
    for (const coinName in this.coins) {
      total += coinName * this.coins[coinName];
    }
    $("#price").text(total);
  }
}

const bank = new PiggyBank(100);

bank.getTotal();
console.log(bank);

$(".some__inner").on("click", function (e) {
  let current = e.target;
  if (current.classList.contains("some__btn")) {
    let coinName = parseInt($(current).text());
    bank.addCoin(coinName)
    bank.showCoins();
    bank.getTotal();
  }
});
