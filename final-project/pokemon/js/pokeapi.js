//PokeAPI functionality.
function getJSON(url) {
    return fetch(url)
      .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
            return response.json();
            }
  })
  .catch(function(error) {
    console.log(error);
  });
  }
  function getPokemon(url) {
    return getJSON(url);
  }

  //Write the Pokemon's data to the Pokedex's h1 object
  function renderPokedex(pokemon, DexList) {
      var type2 = "n/a";
      if (pokemon.types[1]){
        type2 = pokemon.types[1].type.name;
      }
    DexList.innerHTML = `
    <td class="pokeName">Name: ${pokemon.name}</td>
    </br>
    <td class= "pokeHeight">Height: 0.${pokemon.height} m</td>
    </br>
    <td class= "pokeType1">Type - 1: ${pokemon.types[0].type.name}</td>
    </br>
    <td class= "pokeType2"> type - 2: ${type2}</td>
    `;
 
  };

  //Retrieve Pokemon from the API database
  function showPokemon(url) {
    getPokemon(url).then(function (data) {
      console.log(data);
      const results = data;

      const DexList = document.getElementById("pokedex");
      renderPokedex(results, DexList);
    })};