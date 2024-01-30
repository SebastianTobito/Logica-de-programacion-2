let numeroSecreto = generadorNumeroSecreto();



function verificarIntento(){
 let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
 console.log("El número del usuario es de tipo: " + typeof(numeroDelUsuario));
 console.log("El número secreto es el: " + numeroSecreto);
 console.log("El número secreto es de tipo: " + typeof(numeroSecreto));
 console.log("La comparación entre el número secreto y el número del usuario es: " + numeroSecreto === numeroDelUsuario);
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