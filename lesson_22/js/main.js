$(() => {
  let baseUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  let pokemonData = $(".pokemon__data");
  let pokemonFormSearch = $(".pokemon__form-search");
  let next = $(".pokemon__next");
  let prev = $(".pokemon__prev");
  let pokemonPagePrev = $(".pokemon__page-prev");
  let pokemonPageNext = $(".pokemon__page-next");
  let pokemonState;
  let pokemonCurrentPageNumber = $("#pokemon-current");
  let currentPageNumber = 1;

  pokemonFormSearch.on("submit", async function (e) {
    let pokemonSearchInput = $(".pokemon__search");
    let pokemonInfo = pokemonSearchInput.val();
    let pokemonAllReq = await request(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"
    );
    for (let i = 0; i < pokemonAllReq.results.length; i++) {
      if (pokemonInfo == pokemonAllReq.results[i].name) {
        pokemonData.html("");
        createPokemon(await request(pokemonAllReq.results[i].url));
      }
    }
    this.reset();
  });

  let request = async function (url) {
    return (await fetch(url)).json();
  };

  async function getPokemon(url) {
    pokemonData.html("");
    let title = await request(url);
    renderPokemon(title);
  }

  getPokemon(baseUrl);
  async function renderPokemon(pokemon) {
    pokemonState = pokemon;
    for (let i = 0; i < pokemon.results.length; i++) {
      pokemonReq = await request(pokemon.results[i].url);
      createPokemon(pokemonReq);
    }
  }

  function createPokemon(pokemonReq) {
    let pokemonImgUrl;
    let pokemonName = pokemonReq.name;
    let pokemonType = [];
    let pokemonGrowth = pokemonReq.height;
    let pokemonWeight = pokemonReq.weight;
    for (let i = 0; i < pokemonReq.types.length; i++) {
      pokemonType.push(pokemonReq.types[i].type.name);
    }
    pokemonImgUrl = pokemonReq.sprites.front_default;
    if (pokemonReq.sprites.front_default == null) {
      pokemonImgUrl =
        pokemonReq.sprites.other["official-artwork"].front_default;
    }
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

  next.on("click", async function (e) {
    pokemonData.html("");
    let pokemonPage = await request(pokemonState.next);
    renderPokemon(pokemonPage);
    currentPageNumber++;
    pokemonCurrentPageNumber.text(currentPageNumber);
  });
  prev.on("click", async function (e) {
    if (pokemonState.previous != null) {
      pokemonData.html("");
      let pokemonPage = await request(pokemonState.previous);
      renderPokemon(pokemonPage);
      currentPageNumber--;
      pokemonCurrentPageNumber.text(currentPageNumber);
    }
  });

  pokemonPagePrev.on("click", async function (e) {
    pokemonData.html("");
    currentPageNumber = 1;
    pokemonCurrentPageNumber.text(currentPageNumber);
    let pokemonPage = await request(baseUrl);
    renderPokemon(pokemonPage);
  });
  pokemonPageNext.on("click", async function (e) {
    let pokemonLimit = 20;
    let pokemonNumbers = pokemonState.count - pokemonLimit;
    pokemonData.html("");
    currentPageNumber = Math.round(pokemonNumbers / pokemonLimit);
    pokemonCurrentPageNumber.text(currentPageNumber);
    let pokemonPage = await request(
      `https://pokeapi.co/api/v2/pokemon/?offset=${pokemonNumbers}&limit=${pokemonLimit}`
    );
    renderPokemon(pokemonPage);
  });
});
