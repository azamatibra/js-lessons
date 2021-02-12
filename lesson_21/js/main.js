let pokemonInner = $(".pokemon__inner");
let baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
let urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
let request = (url) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      success: resolve,
      error: reject,
    });
  });
};
async function getPokemon(url) {
  let title = await request(url);
  function updateTitle(request) {
    for (item in request.results) {
      let itemName = request.results[item].name;
      let titlePokemon = $('<div class="pokemon__title"></div>');
      pokemonInner.append(titlePokemon.text(itemName));
    }
  }
  updateTitle(title);

  let btnPrev = $(".pokemon__prev");
  let btnNext = $(".pokemon__next");

  switching(btnPrev, decNumber);
  switching(btnNext, incNumber);
  let number = 20;

  function switching(btn, controlNumber) {
    btn.on("click", async function (e) {
      console.log(number);
      pokemonInner.html("");
      e.preventDefault();
      let switchUrl = `https://pokeapi.co/api/v2/pokemon?offset=${controlNumber()}&limit=20`;
      let titleState = await request(switchUrl);
      updateTitle(titleState);
      changeValuePokemon(titleState);
    });
  }

  function incNumber() {
    return (number += 20);
  }
  function decNumber() {
    if (number != 0) {
      return (number -= 20);
    }
  }

  function changeValuePokemon(item) {
    let titlePokemon = $(".pokemon__title");
    titlePokemon.on("click", function (e) {
      for (let i = 0; i < titlePokemon.length; i++) {
        if (item.results[i].name == $(e.target).text()) {
          let currentTitle = $(e.target).text();
          $.ajax({
            url: urlPokemon + currentTitle,
            success: setValuePokemon,
          });
        }
      }
    });
  }
  changeValuePokemon(title);
}

function setValuePokemon(response) {
  $(".pokemon__name").text(response.name);
  $("#pokemon-img").attr("src", response.sprites.front_default);
  let pokemonTypeArr = [];
  for (let i = 0; i < response.types.length; i++) {
    pokemonTypeArr.push(response.types[i].type.name);
    $(".pokemon__type").text(pokemonTypeArr);
  }
  $(".pokemon__growth").text(response.height);
  $(".pokemon__weight").text(response.weight);
}
getPokemon(baseUrl);