/*
  Ingreso : 
  		maria	f  15
		jose     m 33
		pepe     m  81

  		1)cantidad de mayores de edad : 2
  		2)cantidad de menores de edad : 1
  		3)cantidad de mujeres : 1
  		4)cantidad de hombres : 2
  		5)nombre del mayor = pepe 
  		6)nombre del menor = maria
  		7)nombre del hombre de menor edad = jose
*/

function mostrar()
{
 var nombre ;
 var sexo ;
 var edad ;
 var contador ;
 var contadorMayoresDeEdad = 0 ;
 var contadorMenoresDeEdad = 0 ;
 var contadorMujeres = 0 ;
 var contadorHombres = 0 ;
 var nombreMayor ;
 var nombreMenor ;
 var edadMayor ;
 var edadMenor ;
 var hombreMenor ;

	//Inicializacion
	 contador = 0 ;
	 
	while (contador < 3) { 
	//carga de datos
	 	nombre = prompt("Ing nombre");
	 	sexo = prompt("Ing sexo");
	 	sexo = sexo.toLowerCase() ;
	 	while(sexo == "f" && sexo == "m") {
	 		sexo = prompt("Error, ing sexo") ;
	 		sexo = sexo.toLowerCase() ;
	 	}
	 	edad = parseInt(prompt("Ing edad")) ;
	 	while(edad < 0 || edad > 100) {
	 		edad = parseInt(prompt("Error, ing edad")) ;
	 	}
	 //Analisis	
		if (edad < 18) {
		  	contadorMayoresDeEdad ++ ;
		}
		 	else { contadorMenoresDeEdad ++ ;  }	

		if (sexo == "m" ) {
			contadorHombres ++ ;	
		}
		else if (sexo == "f" )  {
				contadorMujeres ++ ;
		}
		if (contador == 0) {
		edadMenor = edad ;
		edadMayor = edad ;
		}
		else if(edad <= edadMenor) {
			edadMenor = edad ;
			nombreMenor = nombre ;
		}
		else if(edad >= edadMayor) {
			edadMayor = edad ;
			nombreMayor = nombre ;
		}
		if (sexo = "m" && (contadorHombres != 0 || hombreMenor < edadMayor )) {
		 	hombreMenor = nombre ;
		}
		

	contador ++;
	}
//mostar
document.write("<br> La cantidad de mayores de edad es :" + contadorMayoresDeEdad) ;
document.write("<br> La cantidad de menores de edad es :" + contadorMenoresDeEdad) ;
document.write("<br> La cantidad mujeres es :" + contadorMujeres) ;
document.write("<br> La cantidad hombres es :" + contadorHombres) ;
document.write("<br> El nombre del mayor es :" + nombreMayor) ;
document.write("<br> El nombre del menor sera :" + nombreMenor) ;
	if (contadorHombres == 0) {
		hombreMenor = "no hay ningun hombre ingresado" ;
	}
document.write("<br> El nombre del hombre menor sera :" + hombreMenor ) ;

}
 
