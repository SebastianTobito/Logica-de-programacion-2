let numeroSecreto = generadorNumeroSecreto();
console.log(numeroSecreto);
function intentoUsuario(){
 alert('Click desde el boton')
};

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};
asignarTextoElemento('h1', "Juego del número secreto");
asignarTextoElemento('p', "Indica un número del 1 al 10");
 
 function generadorNumeroSecreto(){
  return parseInt(Math.floor(Math.random()*10) +1);;
 };