//Using Const inlieu of let because Const prevents the value from being changed through reassignment
const pokemonList = [];
pokemonList[0] = {
  name: "Blastoise",
  height: "1.6m",
  types: ["Grass", "Electric", "Steel"]
};
pokemonList[1] = {
  name: "Sandslash", height: "1.0m", types: ["Grass", "Water", "Ice"]
};
pokemonList[2] = {
  name: "Pichu", height: "0.3m", types: ["Ground", "Flying", "Steel"]
};



for (let i = 0; i < pokemonList.length; i++) {
  document.write(name);
}
