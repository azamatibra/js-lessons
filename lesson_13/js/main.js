// Method 1
// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.eu/rest/v2/name/Kyrgyzstan");
// request.addEventListener("load", printCountry);
// request.send();

// function printCountry() {
//   let response = JSON.parse(this.responseText)
//   console.log(response[0].capital);
// }

// Method 2

// function printCountry(response) {
//   let country = response[0]
//   console.log(country.name);
// }
// $.ajax({
//   type: "GET",
//   url: "https://restcountries.eu/rest/v2/name/Kyrgyzstan",
//   success: printCountry,
// });

// 1
// $(function () {
//   let dataText = $(".search__input"),
//     search = $(".search"),
//     country = $("#name"),
//     capital = $("#capital"),
//     region = $("#region"),
//     subRegion = $("#subregion");


//   let countryName, countryCapital, countryRegion, countrySubRegion;
//   search.on("submit", function (e) {
//     e.preventDefault();
//     if (dataText.val() != "") {
//       let url = "https://restcountries.eu/rest/v2/name/" + dataText.val();
//       $.ajax({
//         type: "GET",
//         url: url,
//         success: printCountry,
//       });
//     } else {
//       alert("Введите страну");
//       dataText.css({ border: "1px solid red" });
//     }
//   });

//   function printCountry(response) {
//     let countryInfo = response[0];
//     countryName = countryInfo.name;
//     countryCapital = countryInfo.capital;
//     countryRegion = countryInfo.region;
//     countrySubRegion = countryInfo.subregion;
//     addInfo(country, countryName);
//     addInfo(capital, countryCapital);
//     addInfo(region, countryRegion);
//     addInfo(subRegion, countrySubRegion);
//   }
//   let addInfo = (selector, value) => $(selector).text(value);
// });

// 2

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
    }
  }
});
