$(() => {
  let btn = $(".form-button");
  let form = $(".form");
  let input;
  form.on("submit", function (e) {
    let wrap = $(".country__wrap");
    wrap.html("");
    e.preventDefault();
    input = $("#form-input").val();
    this.reset();

    $.ajax({
      url: "https://restcountries.eu/rest/v2/name/" + input,
      success: showCountry,
    });
    function showCountry(response) {
      let title = $(".country__title").addClass("country__title-custom");
      title.text(input);
      let border = response[0].borders;
      let flagUrl = response[0].flag;
      let flag = $(`<img src="${flagUrl}" class="country__flag">`);
      for (let i = 0; i < border.length; i++) {
        let countryElement = $('<div class="country__border"></div>');
        let countryName = $('<span class="country__name"></span>');
        wrap.append(countryElement);
        countryElement.append(countryName.text(border[i]));
      }
    }
    findCountry();
    function findCountry() {
      setTimeout(() => {
        let names = $(".country__name");
        let borders = $('.country__border') 
        for (let i = 0; i < names.length; i++) {
          $.ajax({
            url:
              "https://restcountries.eu/rest/v2/alpha/" + $(names[i]).text(),
            success: function (response) {
              let flag = $(
                `<img class="country__flag" src="${response.flag}">`
              );
              $(names[i]).text(response.name);
              $(borders[i]).append(flag);
            },
          });
        }
      }, 2000);
    }
  });
});
