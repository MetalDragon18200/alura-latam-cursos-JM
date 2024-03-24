let n = parseInt(prompt("Ingrese un numero!"));

function tablaMultiplicar(numero)
{
	console.log(`La tabla del ${numero} es `);
	for (var i = 0; i < 12; i++) {
   		console.log(numero+"x"+(i+1)+ "=" + ((i+1)*numero));
	}
}

tablaMultiplicar(n);