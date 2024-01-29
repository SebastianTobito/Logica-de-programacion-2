let numeroSecreto = generadorNumeroSecreto();



function verificarIntento(){
 let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
 console.log(typeof(numeroDelUsuario));
 console.log(numeroSecreto);
 console.log(numeroSecreto === numeroDelUsuario);
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