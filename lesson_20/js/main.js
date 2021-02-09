$(() => {
  let btn = $(".form-button");
  let form = $(".form");
  let input;
  let request = function (url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        success: resolve,
        error: reject,
      });
    });
  };
  form.on("submit", function (e) {
    let wrap = $(".country__wrap");
    wrap.html("");
    e.preventDefault();
    input = $("#form-input").val();
    this.reset();

    if (input != "") {
      request("https://restcountries.eu/rest/v2/name/" + input)
        .then(findBorder)
        .then(showCountry)
        .catch((err) => console.log(err));
    } else {
      console.log("Заполните!");
    }
    function showCode(response) {
      let title = $(".country__title").addClass("country__title-custom");
      title.text(input);
      let border = response[0].borders;
      for (let i = 0; i < border.length; i++) {
        let countryElement = $('<div href="#" class="country__border bg-info"></div>');
        let countryName = $('<span class="country__name"></span>');
        wrap.append(countryElement);
        countryElement.append(countryName.text(border[i]));
      }
    }

    function findBorder(response) {
      let country = response[0];
      showCode(response);
      let borders = [];
      for (let border of country.borders) {
        borders.push(
          request("https://restcountries.eu/rest/v2/alpha/" + border)
        );
      }
      return Promise.all(borders);
    }

    function showCountry(response) {
      let names = $(".country__name");
      let borders = $(".country__border");
      for (let i = 0; i < names.length; i++) {
        let flag = $(`<img class="country__flag" src="${response[i].flag}">`);
        $(names[i]).text(response[i].name);
        $(borders[i]).append(flag);
      }
    }
  });
});
