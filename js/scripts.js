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


function showModal(title,text){
  let modalContainer = document.querySelector('#modal-container');

  //Clearing all existing modal content
  modalContainer.innerHTML ='';
  let modal = document.createElement('div');
  modal.classList.add('modal');

  //Add the new modal content
  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);
  //adds the class .is-visible
  modalContainer.classList.add('is-visible');
}

function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');

  if(dialogPromisReject){
    dialogPromisReject();
    dialogPromiseReject = null;
  }
  }
function showDialog(title, text){
  showModal(title, text);
  let modalContainer = document.querySelector('#modal-container');

  //confirm and cancel button to the modal
  let modal = modalContainer.querySelector('.modal');

  let confirmButton = document.createElement('button');
  confirmButton.classList.add('modal-confirm')
  confirmButton.innerText = 'Confirm';

  let cancelButton = document.createElement('button');
  cancelButton.classList.add('modal-cancel')
  cancelButton.innerText = 'Cancel';

  modal.appendChild(cancelButton);
  modal.appendChild(confirmButton);

  //focusing the confirmButton so the user can press enter
  confirmButton.focus();

  return new Promise((resolve,reject) => {
    cancelButton.addEventListener('click, hideModal');
    confirmButton.addEventListener('click', () => {
      dialogPromiseReject = null;
      hideModal();
      resolve();
    });

    dialogPromiseReject = reject;
  });
}

document.querySelector('.item-button').addEventListener('click', () => {
  showModal('Modal title', 'This is the modal content!');
});






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