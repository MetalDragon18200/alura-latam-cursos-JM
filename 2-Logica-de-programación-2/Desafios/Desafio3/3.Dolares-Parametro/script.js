let n = parseFloat(prompt("Ingrese una cantidad de dolares a cambiar a reales brasileños"));

function toReales(n){
return parseFloat(n*4.80);
}

console.log(`$${n} dolares equivalen a R$${toReales(n)} reales brasileños`);