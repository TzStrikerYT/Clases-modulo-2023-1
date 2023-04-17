// let num = prompt("Ingrese un número");

// num = parseInt(num)

// for (num; true; num++) {

//   if (num === 3) {
//     console.log("fin");
//     break;
//   } else {
//     console.log(num);
//   }
// }

// function

let num = prompt("Ingrese un número");
let iterations = 0;

for (num; true; num++) {
  iterations += 1;
  let mul = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) mul += 1; //console.log("multiplo de", i)
  }
  if (mul === 2) {
    console.log(num, " es primo");
    break;
    
  } else {
    console.log(num, " no es primo");
  }
}
