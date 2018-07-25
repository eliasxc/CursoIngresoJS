function mostrar()
{

	var contador=0;

	var acumulador=0;

 	var promedio ;

 	var numero ;

while(contador < 5)
	{
		numero = parseInt(prompt("reingrese un numero")) ;

		contador ++;

		acumulador = acumulador + numero
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN