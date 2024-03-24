//Crea una función que calcule el valor del factorial de un número pasado como parámetro

let n= 5;

function factorial(numero)
{
   let total =1 ;
    for (i=1; i<=numero; i++) {
    total = total * i;
  }
  return total;
}

console.log(`El factorial de ${n} es ` + factorial(n));