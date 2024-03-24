let n = parseFloat(prompt("Ingrese la anchura del cuarto"));
let m= parseFloat(prompt("Ingrese el largo del cuarto"));

function areaperiRectangulo (x,y){
console.log(`El perimetro del cuarto rectangular es ` +2*(x+y)+ ` y el area es `+(x*y));
}

areaperiRectangulo (n,m); //funcion que muestra el area y perimetro


/*function areaRectangulo (x, y){
return parseFloat(x*y);
}

function perimetroRectangulo (x, y){
return parseFloat(2*(x + y));
}

console.log(`El perimetro del cuarto rectangular es ${perimetroRectangulo (n, m)} y el area es ${areaRectangulo (n, m)}`);*/