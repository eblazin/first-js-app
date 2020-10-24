//Using Const inlieu of let because Const prevents the variable identifier "pokemonList" from being changed through reassignment

const pokemonRepository = (function () {
const pokemonList = [];
//Adding Pokemon to the pokemonList array using push method.
pokemonList.push({
  name: "Blastoise",
  height: "1.6",
  types: ["Grass", "Electric", "Steel"]
});
pokemonList.push({
  name: "Sandslash",
  height: "1.0",
  types: ["Grass", "Water", "Ice"]
});
pokemonList.push({
  name: "Pichu",
  height: "0.3",
  types: ["Ground", "Flying", "Steel"]
});
//Defining functions to add items to the pokemonList and to return all items in the pokemonList array
function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll(){
  return pokemonList;
}

function showDetails(pokemon){
  console.log(pokemon)
}

function addListItem(pokemon) {
  let unorderedList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("item-button");
  listpokemon.appendChild(button);
  unorderedList.appendChild(listpokemon);
  button.addEventListener('click', showDetails(pokemon));//adding event listener to button, and calling the show details function
}


// returning objects with add, getAll, and addListItem as keys 
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
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