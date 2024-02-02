let numeroSecreto;
let intentos;

function condicionesIniciales(){
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  numeroSecreto = generadorNumeroSecreto();
  intentos = 1;
}

condicionesIniciales();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function generadorNumeroSecreto() {
  return parseInt(Math.floor(Math.random() * 10) + 1);
}

function limpiarCaja(){ 
  document.querySelector('#valorUsuario').value = '';

}

function verificarIntento() {
  let numeroDelUsuario = parseInt(
    document.getElementById("valorUsuario").value
  );

  if (numeroDelUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Felicidades, acertaste el número secreto en ${intentos} ${intentos > 1 ? "intentos" :"intento"}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó 
    if (numeroDelUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
    
  }
  return;
}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja();
  /*Indicar mensaje de números del 1 al 10, generar el número aleatorio de nuevo, 
  inicializar el número de intentos*/
  condicionesIniciales();
  //Volver a desabilitar el boton de nuevo juego
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

