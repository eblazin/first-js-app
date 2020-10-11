//Using Const inlieu of let because Const prevents the value from being changed through reassignment
const pokemonList = [];
//Adding Pokemon to the pokemonList array
pokemonList[0] = {
  name: "Blastoise",
  height: "1.6",
  types: ["Grass", "Electric", "Steel"]
};
pokemonList[1] = {
  name: "Sandslash",
  height: "1.0",
  types: ["Grass", "Water", "Ice"]
};
pokemonList[2] = {
  name: "Pichu",
  height: "0.3",
  types: ["Ground", "Flying", "Steel"]
};

//creating loop to write name and height of all items in pokemonList array
//added conditional printing "wow, that's big" if height exceeds 1.0. 
for (let i = 0; i <= pokemonList.length; i++) {
  if (pokemonList[i].height > 1.0) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + ' - Wow, that\'s big!' + "<br>" + "<br>");
  } else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + "<br>");
  }
}