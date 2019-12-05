
import { example } from './data.js';
import POKEMON from './data/pokemon/pokemon.js'

import POKEMON from './data/pokemon/pokemon.js'

console.log(POKEMON);

console.log(POKEMON[3].name) //muestra nombres según posicion

console.log(POKEMON[3].type) //muestra los tipos de pokemon segun posicion

console.log(POKEMON.length) //muestra los 151 pokemon

const pokemonByType = POKEMON.filter(POKEMON => POKEMON.type);
console.log(pokemonByType);

//Cambiar de HOME PAGE a SECOND PAGE al hacer click en el boton de la imagen 
document.getElementById('elegirPokeBtn').addEventListener('click', () => {
    homePage.style.display="none";
    secondPage.style.display="block";
});

const allPokemons = document.getElementById('allPokemons');

allPokemons.innerHTML = pokemonByType;
