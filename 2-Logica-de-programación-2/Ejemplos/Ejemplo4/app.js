
let number = parseInt(prompt("Hola, ingresa un numero postivo o negativo"));

verificarNumero(number);


function verificarNumero(numero) {
  if (numero > 0) {
    console.log("El número es positivo.");
  } else if (numero < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es zero.");
  }
}