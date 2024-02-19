//problema 7

var edad = prompt("Ingresa tu edad: ");

if (edad >=18)
{
console.log("Eres mayor de edad!");
}
else
{
console.log("Eres menor de edad!");
}

//Problema 8

var numero = prompt("Ingresa un numero positivo o negativo: ");

if (numero >=0)
{
console.log(`${numero} es un numero positivo`);
}
else
{
console.log(`${numero} es un numero negativo`);
}

//Problema 9

var numero= 0;

while(numero < 10)
{

console.log(numero+1);

numero ++;
};

//Problema 10

var nota = parseInt(Math.random()*10) + 1;

if (nota >=7)
{
console.log(`Aprobado! con ${nota} de nota`);
}
else
{
console.log(`Reprobado! con ${nota} de nota`);
}
