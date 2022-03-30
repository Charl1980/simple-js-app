// IIFE
let pokemonRepository = (function() {

  //Pokemon List Array with nested Objects
  let pokemonList = [{
      name: 'Bulbasaur',
      height: 0.7,
      types: ['Grass', 'Poison']
    },
    {
      name: 'Charmander',
      height: 0.6,
      types: 'Fire'
    },
    {
      name: 'Squirtle',
      height: 0.5,
      types: 'Water'
    },
    {
      name: 'Pikachu',
      height: 0.4,
      types: 'Electric'
    },
  ];

  // Public functions
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
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

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// Add Pokemon function
pokemonRepository.add({
  name: 'Zubat',
  height: 0.8,
  types: ['Poison', 'Flying']
});

console.log(pokemonRepository.getAll());

// forEach() Loop with DOM manipulation
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
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
