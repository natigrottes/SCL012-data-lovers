import POKEMON from './data/pokemon/pokemon.js'

import {pokemonByType} from './data.js'
console.log(pokemonByType(POKEMON, 'Fire'));

import {pokemonByName} from './data.js'
console.log(pokemonByName(POKEMON, 'Charmander'));

//console.log(POKEMON);

//console.log(POKEMON[3].name) //muestra nombres según posicion

//console.log(POKEMON[0].type) //muestra los tipos de pokemon segun posicion

//console.log(POKEMON.length) //muestra los 151 pokemon

//let pokemonByType = POKEMON.filter(POKEMON => POKEMON.type);
//console.log(pokemonByType);

//let pokemonNames = POKEMON.filter(POKEMON => POKEMON.name);
//console.log(pokemonNames);

//Cambiar de HOME PAGE a SECOND PAGE al hacer click en el boton de la imagen 
document.getElementById('elegirPokeBtn').addEventListener('click', () => {
    homePage.style.display="none";
    secondPage.style.display="block";
});

//volver al Home apretando HOME
document.getElementById('pokeHomeBtn').addEventListener('click', limpiar);

function limpiar () {
    window.location.reload();    
}


//const allPokemons = document.getElementById('allPokemons');
//allPokemons.innerHTML = pokemonByType;

