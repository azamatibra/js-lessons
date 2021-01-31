$(function () {
  let places = $(".places"),
    addBtn = $(".add__btn");
  clearBtn = $(".add__clear");

  let space,
    placeTop,
    placeDesc,
    placeInner,
    placeRemove,
    placeRecord,
    placeNumber,
    placeDate,
    placeStay,
    placeCountry;

  let dataCountry = JSON.parse(localStorage.getItem("country")),
    dataDate = JSON.parse(localStorage.getItem("date")),
    dataDesc = JSON.parse(localStorage.getItem("desc")),
    dataNumber = JSON.parse(localStorage.getItem("number"));
  let arrCountry = [],
    arrDate = [],
    arrDesc = [],
    arrNumber = [];
  if (
    dataCountry != null ||
    dataDate != null ||
    dataDesc != null ||
    dataNumber != null
  ) {
    arrCountry = [...dataCountry];
    arrDate = [...dataDate];
    arrDesc = [...dataDesc];
    arrNumber = [...dataNumber];
  }

  $(".add__text").on("keyup", function () {
    if (this.scrollTop > 0) {
      this.style.height = this.scrollHeight + "px";
    }
  });

  addBtn.on("click", function (e) {
    let country = $(".add__country").val(),
      dateReverse = $(".add__date").val().split("-"),
      desc = $(".add__text").val(),
      number = 1;

    let date = ([dateReverse[0], dateReverse[1], dateReverse[2]] = [
      dateReverse[2],
      dateReverse[1],
      dateReverse[0],
    ]).join(".");

    let place = $(".place");
    for (let i = 0; i < place.length; i++) {
      if (dataNumber != "") {
        number++;
      }
    }

    arrCountry.push(country);
    arrDate.push(date);
    arrDesc.push(desc);
    arrNumber.push(number);
    localStorage.setItem("country", JSON.stringify(arrCountry));
    localStorage.setItem("date", JSON.stringify(arrDate));
    localStorage.setItem("desc", JSON.stringify(arrDesc));
    localStorage.setItem("number", JSON.stringify(arrNumber));

    e.preventDefault();
    createBox(desc, number, date, country);
    removeData();
  });
  if (dataNumber != "") {
    getData();
  }
  function getData() {
    if (dataNumber != null) {
      createItem(dataDesc, dataNumber, dataDate, dataCountry);
      removeData();
    }
  }

  function createElement() {
    space = $('<div class="place"></div>');
    placeTop = $('<div class="place__top"></div>');
    placeDesc = $('<div class="place__desc"></div>');
    placeInner = $('<div class="place__inner"></div>');
    placeRemove = $('<button class="place__remove"></button>');
    placeRecord = $('<p class="place__record"></p>');
    placeNumber = $('<span class="place__number"></span>');
    placeDate = $('<span class="place__date"></span>');
    placeStay = $('<p class="place__stay"></p>');
    placeCountry = $('<span class="place__country"></span>');
  }

  function createBox(desc, number, date, place) {
    createElement();
    places.append(space);
    space.append(placeTop, placeDesc.text(desc));
    placeTop.append(placeInner, placeRemove.text("Удалить запись"));
    placeInner.append(
      placeRecord.text("Запись #"),
      placeDate.text(date),
      placeStay.text("Место пребывания ")
    );
    placeRecord.append(placeNumber.text(number));
    placeStay.append(placeCountry.text(place));
  }

  function createItem(desc, number, date, place) {
    for (let i = 0; i < dataNumber.length; i++) {
      createElement();
      places.append(space);
      space.append(placeTop, placeDesc.text(desc[i]));
      placeTop.append(placeInner, placeRemove.text("Удалить запись"));
      placeInner.append(
        placeRecord.text("Запись #"),
        placeDate.text(date[i]),
        placeStay.text("Место пребывания ")
      );
      placeRecord.append(placeNumber.text(number[i]));
      placeStay.append(placeCountry.text(place[i]));
    }
  }

  function removeData() {
    let placeRemove = $(".place__remove");
    placeRemove.on("click", function (e) {
      $(this).closest(".place").remove();
      arrCountry = JSON.parse(localStorage.getItem("country"));
      arrDate = JSON.parse(localStorage.getItem("date"));
      arrDesc = JSON.parse(localStorage.getItem("desc"));
      arrNumber = JSON.parse(localStorage.getItem("number"));
      let placeCountry = $(this)
        .siblings(".place__inner")
        .find(".place__stay")
        .find(".place__country")
        .text();
      let placeDate = $(this)
        .siblings(".place__inner")
        .find(".place__date")
        .text();
      let placeDesc = $(this)
        .closest(".place__top")
        .siblings(".place__desc")
        .text();
      let placeNumber = parseInt(
        $(this)
          .siblings(".place__inner")
          .find(".place__record")
          .find(".place__number")
          .text()
      );

      compareValue(arrCountry, placeCountry);
      compareValue(arrDate, placeDate);
      compareValue(arrDesc, placeDesc);
      compareValue(arrNumber, placeNumber);

      localStorage.setItem("country", JSON.stringify(arrCountry));
      localStorage.setItem("date", JSON.stringify(arrDate));
      localStorage.setItem("desc", JSON.stringify(arrDesc));
      localStorage.setItem("number", JSON.stringify(arrNumber));
    });

    function compareValue(arr, value) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
          let index = arr.lastIndexOf(value);
          arr.splice(index, 1);
        }
      }
    }
  }

  clearBtn.on("click", function () {
    arrCountry = [];
    arrDesc = [];
    arrNumber = [];
    arrDate = [];
    $(".place").remove();
    localStorage.clear();
  });
});
