let numeroSecreto;
let intentos;
let numerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales(){
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generadorNumeroSecreto();
  intentos = 1;
}

condicionesIniciales();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function generadorNumeroSecreto() {
 let numeroGenerado = parseInt(Math.floor(Math.random() * numeroMaximo) + 1);
 console.log(numeroGenerado);
 console.log(numerosSorteados);
// Si ya sorteamos todos los números
if (numerosSorteados.length === numeroMaximo) {
  asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
} else{
   // si el número generado está incluido en la lista
 if(numerosSorteados.includes(numeroGenerado)){
   return generadorNumeroSecreto();
 }else{
  numerosSorteados.push(numeroGenerado);
  return numeroGenerado;
 }
}
}

function limpiarCaja(){ 
  document.querySelector('#valorUsuario').value = '';

}

function verificarIntento() {
  let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);

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

