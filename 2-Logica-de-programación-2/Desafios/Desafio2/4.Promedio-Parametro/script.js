
function numeroPromedio(numero1, numero2, numero3)
{
let promedio = (numero1+numero2+numero3)/3;

promedio = parseFloat(Math.ceil(promedio*10)/10);

console.log(`El promedio de ${numero1}, ${numero2} y ${numero3} es ${promedio}`);
}

numeroPromedio(3,2,6);