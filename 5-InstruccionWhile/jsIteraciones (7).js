function mostrar()
{

	var contador = 0 ;
	
	var acumulador = 0 ;

	var respuesta = 'si' ;

	var numero ;

	var promedio ;

while(respuesta != "no" )
	{
		numero = parseInt(prompt("Ingrese un numero:"));

		acumulador = acumulador + numero ;

		contador ++ ;

		respuesta = prompt( " ¿ Desea continuar ?    (si/no)") ;
	}

promedio = acumulador / contador ;

document.getElementById('suma').value = "La suma total es : " + acumulador ;

document.getElementById('promedio').value = "El promedio total es :" + promedio ;

}//FIN DE LA FUNCIÓN