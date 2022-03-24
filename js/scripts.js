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
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll
  };
})();

// forEach() Loop code refactoring with .getAll & .add key/values
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height < 0.7) {
    document.write('<p>' + pokemon.name + ' ' + '(' + pokemon.height + ')</p>');
  } else if (pokemon.height >= 0.7) {
    document.write('<p>' + pokemon.name + ' ' + '(' + pokemon.height + ')' + ' - Wow, that\'s big!</p>');
  }
});
pokemonRepository.add({
  name: 'Zubat',
  height: 0.8,
  types: ['Poison', 'Flying']
});
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height < 0.7) {
    document.write('<p>' + pokemon.name + ' ' + '(' + pokemon.height + ')</p>');
  } else if (pokemon.height >= 0.7) {
    document.write('<p>' + pokemon.name + ' ' + '(' + pokemon.height + ')' + ' - Wow, that\'s big!</p>');
  }
});

//for Loop executing the Name and Height of each Pokemon.
//for (let i=0; i < pokemonList.length; i++){
//  if (pokemonList[i].height < 0.7 ) {
//    document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')</p>');
//  } else if (pokemonList[i].height >= 0.7 ) {
//    document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow, that\'s big!</p>');
//  }
//}
