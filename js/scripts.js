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
  pokemonList.add(pokemon);
}

function getAll(){
  return pokemonList;
}
// returning objects with add and getAll as keys - 
return {
  add: add,
  getAll: getAll
};
})();

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
pokemonRepository.getAll().forEach(function (pokemon) {
  if (pokemon.height > 1.0) {
    document.write(`${pokemon.name} (height: ${pokemon.height}) - Wow, that's big! <br> <br>`);
  } else {
    document.write(`${pokemon.name} (height: ${pokemon.height})<br> <br>`);
  }
})