// console.log("2 + 2 = ", 2 + 2) /* imprimir una salida */

/* tipos de datos */

// "cadena texto o string" String
// 324.4 Number
// true || false Boolean
// [true, false, "", "", {}, [], 234] Array
// {
//     json: "json"  Object
// }
// null  VACIO
// undefined VACIO

/* variables */

//let nombre = "Michael"
//const deVariable = 324
//console.log(nombre, deVariable)
// deVariable = 345
// no funciona porque no puedo cambiar un valor constante

//= asignacion

//== comparacion del mismo datos "2" == 2 = true

//=== Comparacion del mismo dato y el mismo tipo "2" === 2 = false

// condicionales

true || false;

/* operadores logicos */

// === comparaciones

// > mayor

// < menor

// >= mayor o igual

// <= menor o igual

// && and = y

// || or = ó

// let num = 5;

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("XD");
// } else {
//   if (num % 3 === 0) {
//     console.log("X");
//   }

//   if (num % 5 === 0) {
//     console.log("D");
//   }
// }

// 1. si el numero es multiplo de 3
//     debe imprimimir "X"

// 2. si el numero es multiplo de 5 debe imprimimir
//     debe imprimir "D"

// 3. si el numero es multiplo de 3 y 5 debe imprimir
//     "XD"


// for(inicio; condicion; actualizacion){

// }

// for(let i = 0; i <= 100; i += 10){

//     console.log(i)
// }

// El codigo debe impirmir la tabla del 5

// ej: 

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50

// for(let i = 0; i <= 10; i++){
//     console.log(`5 x ${i} = ${5 * i}`) // alt gr + }
// }

// El estudiante utilizando for debe imprimir las 24 horas 
// del dia en el siguiente formato "00:00" - "01:00" ...

for(let i = 0; i < 24; i++){

    if(i < 10) console.log(`0${i}:00`)
    else console.log(`${i}:00`)
}


// deben imprimir la salida contando de 1 hasta 100 en
// el sisguiente formato

// separados por ", "
// en una sola linea
// el ultimo numero no debe tener ", "

// 01, 02, 03, ... 98, 99, 100