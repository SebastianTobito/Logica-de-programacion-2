let numeroSecreto = generadorNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");

function generadorNumeroSecreto() {
  return parseInt(Math.floor(Math.random() * 10) + 1);
}

function verificarIntento() {
  let numeroDelUsuario = parseInt(
    document.getElementById("valorUsuario").value
  );
  if (numeroDelUsuario === numeroSecreto) {
    asignarTextoElemento("p", "Felicidades, acertaste!!");
  } else {
    if (numeroDelUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
  }
  return;
}
