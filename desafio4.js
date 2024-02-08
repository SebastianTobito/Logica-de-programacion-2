//1. Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos:
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby", "Golang");

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarListaPorConsola() {
   console.log(lenguajesDeProgramacion);
   return;
}
mostrarListaPorConsola();

//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" 
//en orden inverso.

function listaOrdenInverso() {
    for (let i = lenguajesDeProgramacion.length-1 ; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
        
    }
}
listaOrdenInverso();
//6. Crea una función que calcule el promedio de los elementos en una lista de números.

let numeros = [20, 30, 40, 50];

function promediolista() {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
       suma += numeros[i];
    }
    console.log(suma/numeros.length);
}
promediolista();
//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
    let numeroMayor = Math.max(...lista);
    let numeroMenor = Math.min(...lista);
  
    console.log('Mayor:', numeroMayor);
    console.log('Menor:', numeroMenor);
    }
  

  let numeros2 = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros2);

//.8 Crea una función que devuelva la suma de todos los elementos en una lista.

function sumar() {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(suma);
}
sumar();


//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
//o -1 si no existe en la lista.
function posicionEnLista(numero){
   lista = [12,25,63];
   let posicion = lista.indexOf(numero);
   return lista.includes(numero) ? console.log( `el número ${numero} está en la posición ${posicion}`) : console.log( `el número ${numero} está en la posición -1`);
   
   
}
posicionEnLista(18);
//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista
//con la suma de los elementos uno a uno.

function combinarListas() {
    lista1 = [10,50,70];
    lista2 = [20,40,60];
    listasCombinadas= [];
    for(i = 0; i < lista1.length; i++){
        listasCombinadas.push(lista1[i]+lista2[i]);
    }
    return console.log(listasCombinadas);
}
combinarListas();
//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadrado() {
  let potencia = []
  let numerosLista = [80,20,60]
  for(i= 0; i < numerosLista.length; i++){
     potencia.push( numerosLista [i]* numerosLista [i]);
  }
  return potencia;
}
console.log(cuadrado());