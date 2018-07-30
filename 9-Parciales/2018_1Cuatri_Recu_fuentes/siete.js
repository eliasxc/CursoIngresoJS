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
 var contadorMayoresDeEdad ;
 var contadorMenoresDeEdad ;

	 //Inicializacion
	 contador = 0 ;
	while (contador < 3) { 
	//carga de datos
	 	nombre = prompt("Ing nombre");
	 	sexo = prompt("Ing sexo");
	 	while(sexo == "f" && sexo == "m") {
	 		sexo = prompt("Error, ing sexo");
	 	}
	 	edad = parseInt(prompt("Ing edad"));
	 	while(edad < 0 || eadd > 100) {
	 		edad = parseInt(prompt("Error, ing edad"));
	 	}
	 //Analisis	
		 	if (edad > 18) {
		 		contadorMayoresDeEdad ++;
		 	}
		 	if (edad > 18) {
		 		contadorMenoresDeEdad ++;
		 	}
	contador ++;
	}
//mostar
document.write("<br> La cantidad de mayores de edad es :" + contadorMayoresDeEdad);
document.write("<br> La cantidad de menores de edad es :" + contadorMenoresDeEdad);

}
