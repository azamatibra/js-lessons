$(function () {
  $("table").addSortWidget();
  let search = $(".search");
  search.on("submit", function (e) {
    e.preventDefault();
    let searchText = $(".search__input").val();
    let name = $(".table__name");
    for (let i = 0; i < name.length; i++) {
      let countryName = $(name[i]).text();
      if (searchText == countryName) {
        $("tbody").prepend($(name[i].closest("tr")));
      }
    }
  });
  $.ajax({
    type: "GET",
    url: "https://restcountries.eu/rest/v2/all",
  }).done(printCountry);
  function printCountry(response) {
    for (let i = 0; i < response.length; i++) {
      let box = $("<tr>");
      let td = $("<td>");
      let number = $("<td>").text(i + 1);
      let code = $("<td>").text(response[i].alpha2Code);
      let flag = $('<img class="table__flag-img" src="">').attr(
        "src",
        response[i].flag
      );
      let name = $('<td class="table__name"></td>').text(response[i].name);
      let capital = $('<td class="table__capital"></td>').text(
        response[i].capital
      );
      let population = $('<td class="table__population"></td>').text(
        response[i].population
      );
      $("tbody").append(box);
      box.append(number, code, td);
      td.append(flag).addClass("table__flag");
      box.append(name, capital, population);

      let options = {
        data: response,
        getValue: "name",
        theme: "bootstrap",
        list: {
          match: {
            enabled: true,
          },
        },
      };
      search.easyAutocomplete(options);
    }
  }
});
