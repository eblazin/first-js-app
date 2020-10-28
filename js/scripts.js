//Using Const inlieu of let because Const prevents the variable identifier "pokemonList" from being changed through reassignment

const pokemonRepository = (function () {
const pokemonList = [];
//fetching the api with the list of Pokemon
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//Defining functions to add items to the pokemonList and to return all items in the pokemonList array
function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll(){
  return pokemonList;
}
//changing show details function to loaddetails from the pokemon api
function showDetails(pokemon){
  loadDetails(pokemon).then(function (){
    console.log(pokemon);
});
}

function addListItem(pokemon) {
  let unorderedList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("item-button");
  listpokemon.appendChild(button);
  unorderedList.appendChild(listpokemon);
  button.addEventListener('click', ()=>{
    showDetails(pokemon)});//adding event listener to button, and using an arrow function to callthe showDetails function
}
//adding LoadList() method to fetch data from the API, then adding Pokemon to pokemonList
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}
//loading the detailed data for a given Pokemon
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}
// returning objects with add, getAll, and addListItem as keys 
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails
};
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});
//creating loop to write name and height of all items in pokemonList array
//added conditional printing "wow, that's big" if height exceeds 1.0. 

/*
for (let i = 0; i <= pokemonList.length; i++) {
  if (pokemonList[i].height > 1.0) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + ' - Wow, that\'s big!' + "<br>" + "<br>");
  } else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + "<br>" + "<br>");
  }
}
*/
//refactoring code commented out above to use forEach() to iterate over repository array
//Replaced String Literals with Template Literals


  /* if (pokemon.height > 1.0) {
    document.write(`${pokemon.name} (height: ${pokemon.height}) - Wow, that's big! <br> <br>`);
  } else {
    document.write(`${pokemon.name} (height: ${pokemon.height})<br> <br>`);
  }
}) 
*/