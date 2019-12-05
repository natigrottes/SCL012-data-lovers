
//filterPOKEMON(POKEMON, condition)

//sortPOKEMON(POKEMON, sortBy, sortOrder)

export let pokemonByType = (POKEMON, types) => {
  return POKEMON.filter(pokeTypes => pokeTypes.type.includes(types));
};

export let pokemonByName = (POKEMON, names) => {
  return POKEMON.filter(pokeNames => pokeNames.name.includes(names));
};


