//Pokemon List Array with nested Objects
let pokemonList = [
  {
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
    names: 'Pikachu',
    height: 0.4,
    types: 'Electric'
  },
];

//for Loop executing the Name and Height of each Pokemon.
for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height < 0.7 ) {
    document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')</p>');
  } else if (pokemonList[i].height >= 0.7 ) {
    document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow, that\'s big!</p>');
  }
}
