//1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

//3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
//Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
//4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
//5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

//2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function clickConsole(){
   console.log("El botón fue clicado");
};

//3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
//Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function pregunta(){
 let ciudad = prompt("Dime una ciudad de Brasil por favor")
 return alert(`Estuve en ${ciudad} y me acordé de ti.`)
};

//4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function mensaje(){
    alert("Yo amo JS")
};

//5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function suma(){
    let numero1 = parseInt(prompt("Dime un número"));
    let numero2 = parseInt(prompt("Dime otro número"));
    let resultado = numero1 + numero2;
    return alert(`El resultado de la suma es ${resultado} `);
}