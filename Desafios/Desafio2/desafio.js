//1. Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo() {
    console.log("Hola Mundo");
};
saludo();

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.


function saludarPersona() {
    let nombre = prompt("Dinos tu nombre por favor");
    console.log(`¡Hola ${nombre}!`);
}
saludarPersona();
//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.


function doble() {
    let numero = prompt("Di nos un número por favor");
    return alert(parseInt(numero)*2);
}
doble();
//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

let numero1 = parseInt(prompt("Di un número  para calcular el promedio por favor"));
let numero2 = parseInt(prompt("Di otro número por favor"));
let numero3 = parseInt(prompt("Di un tercer número por favor"));

function promedioDe3(a, b, c) {

    return console.log((a + b + c)/3);
}
promedioDe3(numero1, numero2, numero3);
//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

let mayor1 = parseInt(prompt("Dinos un número para comparar el mayor"));
let mayor2 = parseInt(prompt("Di un segundo número para comparar"))
function mayor(){
 return alert( mayor1 > mayor2 ? mayor1 : mayor2);
}
mayor();
//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function potencia2() {
    let numeroPotencia = prompt("Di un número por favor")
   return alert(numeroPotencia * numeroPotencia);
}
potencia2();