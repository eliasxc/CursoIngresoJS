function mostrar()
{
	//declarar contadores y variables 
	var respuesta= "si";
	var negativo = 0 ;
	var positivo = 0 ;
	var numero ;
	var contadorNegativos ;
	var contadorPositivos ;

	while(respuesta != "no" || isNaN(numero)) {
		numero = parseInt(prompt("Ingrese un numero: "));
		if (numero > 0) {
			positivo = positivo + numero ;
			contadorPositivos ++;
		}
		if (numero < 0) {
			negativo = negativo + numero ;
			contadorNegativos ++ ;
		}
		respuesta = prompt(" ¿ Desea continnuar ?     si/no") ;
	}
	
	document.write("1) La suma de los negativos sera :" + negativo)	;
	document.write("2) La suma de los positivos sera :" + positivo) ;
	document.write("3) La cantidad de negativos sera :" + contadorNegativos) ;
	document.write("3) La cantidad de positivos sera :" + contadorPositivos) ;




}//FIN DE LA FUNCIÓN