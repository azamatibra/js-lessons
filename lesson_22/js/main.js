$(() => {
  let baseUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  let pokemonData = $(".pokemon__data");
  let next = $(".pokemon__next");
  let prev = $(".pokemon__prev");
  let request = function (url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        success: resolve,
        error: reject,
      });
    });
  };

  let pokemonState;
  async function getPokemon() {
    pokemonData.html("");
    let title = await request(baseUrl);
    renderPokemon(title);
  }

  getPokemon();
  async function renderPokemon(pokemon) {
    pokemonState = pokemon;
    for (let i = 0; i < pokemon.results.length; i++) {
      pokemonReq = await request(pokemon.results[i].url);
      let pokemonImgUrl;
      let pokemonName = pokemonReq.name;
      let pokemonType = [];
      let pokemonGrowth = pokemonReq.height;
      let pokemonWeight = pokemonReq.weight;
      for (let i = 0; i < pokemonReq.types.length; i++) {
        pokemonType.push(pokemonReq.types[i].type.name);
      }
      pokemonImgUrl = pokemonReq.sprites.front_default;
      let pokemonBox = `
      <div class="pokemon__box">
        <div class="pokemon__img">
          <img
            id="pokemon-img"
            src="${pokemonImgUrl}"
            alt=""
          />
        </div>
        <div class="pokemon__feature">
          <div class="pokemon__group">
            <span class="pokemon__group-label"
              >Имя</span
            >
            <span class="pokemon__name">${pokemonName}</span>
          </div>
          <div class="pokemon__group">
            <span class="pokemon__group-label"
              >Тип</span
            >
            <span class="pokemon__type">${pokemonType}</span>
          </div>
          <div class="pokemon__group">
            <span class="pokemon__group-label"
              >Рост</span
            >
            <span class="pokemon__growth">${pokemonGrowth}</span>
          </div>
          <div class="pokemon__group">
            <span class="pokemon__group-label"
              >Вес</span
            >
            <span class="pokemon__weight">${pokemonWeight}</span>
          </div>
        </div>
      </div>
      `;
      pokemonData.append(pokemonBox);
    }
  }

  next.on("click", async function (e) {
    pokemonData.html("");
    let pokemonPage = await request(pokemonState.next);
    console.log(pokemonPage);
    renderPokemon(pokemonPage);
  });
  prev.on("click", async function (e) {
    if (pokemonState.previous != null) {
      pokemonData.html("");
      let pokemonPage = await request(pokemonState.previous);
      renderPokemon(pokemonPage);
    }
  });
});
