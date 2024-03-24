
//función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros

//El índice de masa corporal (IMC) es el peso de una persona en kilogramos dividido por el cuadrado de la estatura en metros.

function CalcularImc(peso, altura)
{
  return parseFloat((peso/Math.pow(altura, 2)).toFixed(2)); 
}

let imc = CalcularImc(80, 1.67);

console.log(`El IMC de la persona es ${imc}`)