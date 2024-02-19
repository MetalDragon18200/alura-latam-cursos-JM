alert("¡Bienvenido al juego del numero aleatorio!");

var numero= parseInt(Math.random()*501);

if (numero >= 100)
{
alert(`¡Felicidades, has ganado! \nTu numero fue ${numero}`);
}
else
{
alert(`¡Intenta nuevamente para ganar! \nTu numero fue ${numero}`);
}
