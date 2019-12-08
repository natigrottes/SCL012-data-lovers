import POKEMON from './data/pokemon/pokemon.js'
// console.log(POKEMON);   muestra OBJETOS del ARRAY


// Recorre todo el ARRAY de la data y se muestra en consola
for (let i = 0; i < POKEMON.length; i++) {

  // Crear CARDS por pokemon
  let pokeBase = document.getElementById('contentOfCards');
  let pokeCards = document.createElement('button');
  pokeCards.setAttribute('class', 'pokeCardsStyle');
  // console.log(pokeCards);
  let pokePic = document.createElement('img');
  pokePic.setAttribute('class', 'pokeCardsPic');
  let pokeImagen = POKEMON[i].img;
  pokePic.setAttribute('src', pokeImagen);
  pokeCards.appendChild(pokePic);
  let pokeName = document.createElement('p');
  pokeName.setAttribute('class', 'pokeCardsName');
  let pokemonName = document.createTextNode(POKEMON[i].name);
  pokeName.appendChild(pokemonName);
  pokeCards.appendChild(pokeName);
  let pokeLine = document.createElement('hr');
  pokeLine.setAttribute('class', 'pokeCardsLine');
  pokeCards.appendChild(pokeLine);
  let pokeNum = document.createElement('p');
  pokeNum.setAttribute('class', 'pokeCardsNum');
  let pokeNumber = document.createTextNode(POKEMON[i].num);
  pokeNum.appendChild(pokeNumber);
  pokeCards.appendChild(pokeNum);

  pokeBase.appendChild(pokeCards);

  // Método filtrar por tipo for (let i = 0; i < POKEMON.length; i++)
  let pokeTypes = POKEMON[i].type;
  // recorre array de tipos 
  for (let t = 0; t < pokeTypes.length; t++) {
    // console.log(pokeTypes[t]);
    if (pokeTypes[t] === 'Grass') {
      console.log(POKEMON[i].name);
    }
    // console.log(POKEMON[i].type[t]);
    // let p = POKEMON[i].type[t];
    // console.log(p);

    
    // let filterByType = POKEMON[i].type.filter(tipo => tipo === 'Grass');
    // console.log(filterByType);

  }
};










// export const example = () => {
//     return 'example';
//   };
