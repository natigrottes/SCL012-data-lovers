import POKEMON from './data/pokemon/pokemon.js'


//Cambiar de HOME PAGE a SECOND PAGE al hacer click en el boton de la imagen 
document.getElementById('elegirPokeBtn').addEventListener('click', () => {
  homePage.style.display = "none";
  secondPage.style.display = "block";
});


// Activar select
  document.getElementById('filterTypeButton').addEventListener ('click', () => {
  let dropList = document.getElementById('select').value;
  console.log(dropList);

});


//volver al Home apretando HOME
document.getElementById('pokeHomeBtn').addEventListener('click', home);


function home() {
  window.location.reload();
};

