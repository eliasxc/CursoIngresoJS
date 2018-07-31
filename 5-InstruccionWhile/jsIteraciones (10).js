	/*	
					1-Suma de los negativos.
					2-Suma de los positivos.
					3-Cantidad de positivos.
					4-Cantidad de negativos.
					5-Cantidad de ceros.
					6-Cantidad de números pares.
					7-Promedio de positivos.
					8-Promedios de negativos.
					9-Diferencia entre positivos y negativos, (positvos-negativos). 
	*/
	function mostrar()
	{
	//declarar contadores y variables 
	var respuesta= "si";
	var negativo = 0 ;
	var positivo = 0 ;
	var numero ;
	var contadorNegativos = 0 ;
	var contadorPositivos = 0 ;
	var contadorCeros = 0 ;
	var contadorPares = 0 ;
	var promedioPositivos ;
	var promedioNegativos ;
	var diferencia ;

	while(respuesta != "no" || isNaN(numero)) {
		numero = parseInt(prompt("Ingrese un numero: "));

		if (numero > 0) {
			positivo = positivo + numero ;
			contadorPositivos ++;
		}
		else if (numero < 0) {
			negativo = negativo + numero ;
			contadorNegativos ++ ;
		}
		else { contadorCeros ++ ; }

		if (numero / 2 == 0) {
			contadorPares ++ ;
		}

	respuesta = prompt(" ¿ Desea continnuar ?     si/no") ;
	}
	
	promedioPositivos = positivo / contadorPositivos ;
	promedioNegativos = negativo / contadorNegativos ;
	diferencia = positivo - negativo ;
	document.write("<br>  1) La suma de los negativos sera :" + negativo) ;
	document.write("<br>  2) La suma de los positivos sera :" + positivo) ;
	document.write("<br>  3) La cantidad de negativos sera :" + contadorNegativos) ;
	document.write("<br>  4) La cantidad de positivos sera :" + contadorPositivos) ;
	document.write("<br>  5) La cantidad de ceros sera :" + contadorCeros) ;
	document.write("<br>  6) La cantidad de pares sera :" + contadorPares) ;
	document.write("<br>  7) El promedio de positivos sera :" + promedioPositivos) ;
	document.write("<br>  8) El promedio de negativos sera :" + promedioNegativos) ;
	document.write("<br>  9) La diferencia entre positivos y negtivos sera :" + diferencia) ;


}//FIN DE LA FUNCIÓN