
function intentoUsuario(){
 alert('Click desde el boton')
};

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};
asignarTextoElemento('h1', "Juego del número secreto");
asignarTextoElemento('p', "Indica un número del 1 al 10");
