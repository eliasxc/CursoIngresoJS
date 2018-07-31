function mostrar()
{

	var contador=0;
	// declarar variables
	var respuesta='si';
	var maximo ;
	var minimo ;
	var numero ;
	//var flag = 0 ;

	while(respuesta!='no') {
		contador ++;
		numero = parseInt(prompt("Ingrese nu numero  #" + contador));

		if (contador == 1) {
			minimo = numero ;
			maximo = numero ;
			//flag = 1 ;
		}
	    if (numero < minimo) {
			 	minimo = numero ; 
		}
		if (numero > maximo) {
				maximo = numero ; 
		}
		

		respuesta = prompt("¿Desea continuar ?   si/no") ;

	}

document.getElementById('maximo').value = maximo ;
document.getElementById("minimo").value = minimo ;


}//FIN DE LA FUNCIÓN