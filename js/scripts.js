// IIFE
let pokemonRepository = (function() {

  //Pokemon List Array with nested Objects
  let pokemonList = [];
  // API link for the Pokemon repository
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

  // Public functions
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon //&&
      //'height' in pokemon &&
      //'types' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('Pokémon is not correct');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    // Event Listener added that reveals object details when button is clicked
    button.addEventListener('click', function() {
      showDetails(pokemon);
    })
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
    })
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

// Add Pokemon function
pokemonRepository.loadList().then(function() {
  // forEach() Loop with DOM manipulation
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});




// forEach() Loop code refactoring with .getAll & .add key/values

//pokemonRepository.getAll().forEach(function(pokemon) {
//  if (pokemon.height < 0.7) {
//    document.write('<p>' + pokemon.name + ' ' + '(' + pokemon.height + ')</p>');
//  } else if (pokemon.height >= 0.7) {
//    document.write('<p>' + pokemon.name + ' ' + '(' + pokemon.height + ')' + ' - Wow, that\'s big!</p>');
//  }
//});

//pokemonRepository.getAll().forEach(function(pokemon) {
//  if (pokemon.height < 0.7) {
//    document.write('<p>' + pokemon.name + ' ' + '(' + pokemon.height + ')</p>');
//  } else if (pokemon.height >= 0.7) {
//    document.write('<p>' + pokemon.name + ' ' + '(' + pokemon.height + ')' + ' - Wow, that\'s big!</p>');
//  }
//});

//for Loop executing the Name and Height of each Pokemon.
//for (let i=0; i < pokemonList.length; i++){
//  if (pokemonList[i].height < 0.7 ) {
//    document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')</p>');
//  } else if (pokemonList[i].height >= 0.7 ) {
//    document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow, that\'s big!</p>');
//  }
//}
