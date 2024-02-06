//1. Crea una función que calcule el índice de masa corporal (IMC) de una persona
//a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function indiceDeMasaCorporal(peso, estatura){
 return peso /(estatura * estatura);
}

console.log(indiceDeMasaCorporal(80, 1.7));

//2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial (numero) {
	let total = 1; 
	for (i=1; i<=numero; i++) {
		total = total * i; 
	}
	return total; 
}


console.log(factorial(5));

//3. Crea una función que convierta un valor en dólares, pasado como parámetro, 
//y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo 
//con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function dolarAPeso(cantidad){
 return cantidad *3.886;
}
console.log(dolarAPeso(20));

//4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
//utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaPerimetroRectangulo(altura, base){
    let area = altura*base;
    let perimetro = (altura*2)+(base*2);
return ` el area de la sala rectangular es ${area} y el perimetro de la sala es ${perimetro}`;
}

console.log(areaPerimetroRectangulo(12, 18));

//5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaPerimetroCirculo(radio){
 let pi = 3.14;
 let perimetro = (2*pi) * radio ;
 let area = pi*(radio*radio);
 return ` el area de la sala circular es ${area} y el perimetro de la sala es ${perimetro}`;
}

console.log(areaPerimetroCirculo(5));
//6. Crea una función que muestre en pantalla la tabla de multiplicar de un número 
//dado como parámetro.*/

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
   console.log(i * numero);
    
  }
}
tablaMultiplicar(5);